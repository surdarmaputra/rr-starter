import { execSync } from 'child_process';
import { program } from 'commander';
import { promises as fs } from 'fs';
import path from 'path';

const CORE_COMPONENTS_DIR = 'app/modules/core/components';

function toPascalCase(input: string): string {
  return input
    .trim() // Trim extra spaces
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')) // Convert snake_case, kebab-case, and spaces to PascalCase
    .replace(/^(.)/, (c) => c.toUpperCase()); // Ensure the first letter is uppercase
}

function toKebabCase(input: string): string {
  return input
    .trim() // Trim extra spaces
    .replace(/[-_\s]+/g, '-') // Convert snake_case, kebab-case, and spaces to kebab-case
    .replace(/^(.)/, (c) => c.toLowerCase()); // Ensure the first letter is lowercase
}

// Replace occurrences of "ComponentName" in file content
async function replaceContent({
  filePath,
  componentName,
  storyTitle,
}: {
  filePath: string;
  componentName: string;
  storyTitle: string;
}): Promise<void> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const updatedContent = content
      .replaceAll('ComponentName', componentName)
      .replaceAll('StoryTitle', storyTitle);
    await fs.writeFile(filePath, updatedContent);
  } catch (error) {
    console.error(`Error replacing content in ${filePath}:`, error);
    throw error;
  }
}

// Copy template files and replace "ComponentName" with the given name
async function copyTemplate({
  templateDir,
  targetDir,
  componentName,
}: {
  templateDir: string;
  targetDir: string;
  componentName: string;
}): Promise<void> {
  const storyTitle = targetDir
    .replace(process.cwd(), '')
    .replace('app/modules/', '')
    .replace(/^\//, '')
    .split('/')
    .map(toPascalCase)
    .join('/');

  try {
    const files = await fs.readdir(templateDir);
    await Promise.all(
      files.map(async (file) => {
        const templateFilePath = path.join(templateDir, file);
        const targetFilePath = path
          .join(targetDir, file.replaceAll('ComponentName', componentName))
          .replace('.template', '');

        const stats = await fs.stat(templateFilePath);
        if (stats.isDirectory()) {
          await copyTemplate({
            templateDir: templateFilePath,
            targetDir: targetFilePath,
            componentName,
          });
        } else {
          await fs.copyFile(templateFilePath, targetFilePath);
          await replaceContent({
            filePath: targetFilePath,
            componentName,
            storyTitle,
          });
        }
      }),
    );
  } catch (error) {
    console.error(
      `Error copying template from ${templateDir} to ${targetDir}:`,
      error,
    );
    throw error;
  }
}

// Fix import alias in shadcn generated component
async function adjustShadcnGeneratedComponent(filePath: string): Promise<void> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const updatedContent = content.replaceAll(
      '~/lib/utils',
      '~/libs/shadcn/utils',
    );
    await fs.writeFile(filePath, updatedContent);
  } catch (error) {
    console.error(`Error replacing content in ${filePath}:`, error);
    throw error;
  }
}

function runCommand(command: string): void {
  console.log('Running command:', command);
  execSync(command, { stdio: 'inherit' });
}

// Main function to generate component
async function generateComponent({
  componentPath,
  destinationDir,
  template,
}: {
  componentPath: string;
  destinationDir: string;
  template: string;
}): Promise<void> {
  try {
    const parts = componentPath.split('/');
    const componentName = toPascalCase(parts.pop() || ''); // Last part is the actual component name in PascalCase
    const componentNameKebab = toKebabCase(componentName || '');

    if (!componentName) {
      console.error('Error: Invalid component path.');
      process.exit(1);
    }

    const targetDir = path.resolve(destinationDir, ...parts, componentName);

    const templateDir = path.resolve(__dirname, 'templates', template);

    const templateExists = await fs
      .access(templateDir)
      .then(() => true)
      .catch(() => false);
    if (!templateExists) {
      console.error(`Template "${template}" not found.`);
      process.exit(1);
    }

    runCommand(`bunx --bun shadcn@latest add ${componentNameKebab}`);
    await fs.mkdir(targetDir, { recursive: true });
    runCommand(
      `mv ${CORE_COMPONENTS_DIR}/${componentNameKebab}.tsx ${targetDir}/${componentName}.tsx`,
    );
    await adjustShadcnGeneratedComponent(`${targetDir}/${componentName}.tsx`);
    await copyTemplate({
      templateDir,
      targetDir,
      componentName,
    });
    runCommand(`bun run format:fix ${targetDir}`);
    runCommand(`bun run lint:fix ${targetDir}`);
    console.log(
      `Component "${componentName}" has been generated in ${targetDir}.`,
    );
  } catch (error) {
    console.error('Error generating component:', error);
    process.exit(1);
  }
}

async function runCLI(): Promise<void> {
  try {
    program
      .option('-d, --destination <destination>', 'Destination directory')
      .option('-t, --template <template>', 'Template name')
      .argument('<ComponentName>', 'Component name in PascalCase');

    program.parse();

    const options = program.opts();
    const componentPath = program.args[0];
    const destinationDir = options.destination || CORE_COMPONENTS_DIR;
    const template = options.template || 'ComponentStoryAndTestStarter';

    await generateComponent({
      componentPath,
      destinationDir,
      template,
    });
  } catch (error) {
    console.error('Error running CLI:', error);
    process.exit(1);
  }
}

runCLI();
