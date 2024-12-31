import { promises as fs } from 'fs';
import path from 'path';

// Helper function to convert input to PascalCase
function toPascalCase(input: string): string {
  return input
    .trim() // Trim extra spaces
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : '')) // Convert snake_case, kebab-case, and spaces to PascalCase
    .replace(/^(.)/, (c) => c.toUpperCase()); // Ensure the first letter is uppercase
}

// Replace occurrences of "ComponentName" in file content
async function replaceContent(
  filePath: string,
  componentName: string,
): Promise<void> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const updatedContent = content.replaceAll('ComponentName', componentName);
    await fs.writeFile(filePath, updatedContent);
  } catch (error) {
    console.error(`Error replacing content in ${filePath}:`, error);
    throw error;
  }
}

// Copy template files and replace "ComponentName" with the given name
async function copyTemplate(
  templateDir: string,
  targetDir: string,
  componentName: string,
): Promise<void> {
  try {
    await fs.mkdir(targetDir, { recursive: true });

    const files = await fs.readdir(templateDir);
    await Promise.all(
      files.map(async (file) => {
        const templateFilePath = path.join(templateDir, file);
        const targetFilePath = path
          .join(targetDir, file.replaceAll('ComponentName', componentName))
          .replace('.template', '');

        const stats = await fs.stat(templateFilePath);
        if (stats.isDirectory()) {
          await copyTemplate(templateFilePath, targetFilePath, componentName);
        } else {
          await fs.copyFile(templateFilePath, targetFilePath);
          await replaceContent(targetFilePath, componentName);
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

// Main function to generate component
async function generateComponent(
  componentPath: string,
  template: string = 'VariantComponentStarter',
): Promise<void> {
  try {
    const parts = componentPath.split('/').map((part) => toPascalCase(part));
    const componentName = parts.pop(); // Last part is the actual component name in PascalCase

    if (!componentName) {
      console.error('Error: Invalid component path.');
      process.exit(1);
    }

    const targetDir = path.resolve(
      __dirname,
      '../../app/modules/core/components',
      ...parts,
      componentName,
    );

    const templateDir = path.resolve(__dirname, 'templates', template);

    const templateExists = await fs
      .access(templateDir)
      .then(() => true)
      .catch(() => false);
    if (!templateExists) {
      console.error(`Template "${template}" not found.`);
      process.exit(1);
    }

    await copyTemplate(templateDir, targetDir, componentName);
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
    const args = process.argv.slice(2);
    const componentPath = args[0];
    const template = args[1] || 'ComponentStoryAndTestStarter';

    if (!componentPath) {
      console.error('Error: Please specify a component path.');
      console.log(`
        Usage: yarn weblib:gen-component <ComponentName> [template]

        Example:
        yarn weblib:gen-component ButtonContextual
        yarn weblib:gen-component ButtonContextual ComponentStoryAndTestStarter
        yarn weblib:gen-component Indicator/Shimmer ComponentStoryAndTestStarter

        Default template is ComponentStoryAndTestStarter
      `);
      process.exit(1);
    }

    await generateComponent(componentPath, template);
  } catch (error) {
    console.error('Error running CLI:', error);
    process.exit(1);
  }
}

runCLI();
