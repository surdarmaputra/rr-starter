# React Router Starter

A starter kit for building full-stack React applications using React Router.

## Features

- 🚀 Everything provided by [React Router](https://reactrouter.com/)
- 🔒 TypeScript by default
- 🎉 [TailwindCSS v3](https://v3.tailwindcss.com/) for styling
- 🎉 [Shadcn UI](https://ui.shadcn.com/) for components
- 📖 [Storybook](https://storybook.js.org/) for component documentation
- 🎨 Pre-defined color palette and core components
- 🔧 Script to scaffold a component
- 🔧 Code formatting using linter and prettier
- 🔧 Git hooks
- 🔧 GitHub Actions

## Getting Started

### Installation

Install the dependencies:

```bash
asdf install
asdf current
./scripts/prepare-project.sh
```

### Development

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

### Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience.

Color palette pre-defined in `app/app.css` and `tailwind.config.ts`. Colors preview provided in the Storybook.

### Components

Reusable components can be found in `app/modules/core/components`.

Component documented using [Storybook](https://storybook.js.org/):

```bash
bun run start:storybook
```

Generate component basic structure using a script:

```bash
# generate component from shadcn UI and modify the structure to match our project structure
bun run scaffold:component ShadcnComponentName

# generate component from shadcn UI and move to specific directory
bun run scaffold:component ShadcnComponentName -t app/modules/my-module/components

# generate non shadcn component using template located in scripts/scaffoldComponent/templates
bun run scaffold:component ComponentName -t ComponentSimpleStarter
```

## Building for Production

Create a production build:

```bash
bun run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `bun run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```
