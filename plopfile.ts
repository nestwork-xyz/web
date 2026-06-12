import type { NodePlopAPI } from "plop";

const defineConfig = (plop: NodePlopAPI) => {
  // Component generator
  plop.setGenerator("component", {
    actions: [
      {
        path: "src/components/{{type}}/{{kebabCase name}}.tsx",
        templateFile: "plop-templates/component.hbs",
        type: "add",
      },
    ],
    description: "Create a new React component",
    prompts: [
      {
        choices: [
          { name: "Shared (reusable stateful widget)", value: "shared" },
          { name: "Layout (structural shell)", value: "layout" },
          { name: "Feature (route-specific component)", value: "features" },
        ],
        message: "What type of component?",
        name: "type",
        type: "list",
      },
      {
        message: "Component name (e.g. UserAvatar)",
        name: "name",
        type: "input",
      },
    ],
  });

  // Hook generator
  plop.setGenerator("hook", {
    actions: [
      {
        path: "src/hooks/use-{{kebabCase name}}.ts",
        templateFile: "plop-templates/hook.hbs",
        type: "add",
      },
    ],
    description: "Create a new custom React hook",
    prompts: [
      {
        message: "Hook name (e.g. useWindowSize, without the 'use' prefix):",
        name: "name",
        type: "input",
      },
    ],
  });

  // Page generator
  plop.setGenerator("page", {
    actions: [
      {
        path: "src/app/{{route}}/page.tsx",
        templateFile: "plop-templates/page.hbs",
        type: "add",
      },
    ],
    description: "Create a new Next.js App Router page",
    prompts: [
      {
        message: "Route path (e.g. about, dashboard/settings, etc.):",
        name: "route",
        type: "input",
      },
      {
        default: false,
        message: "Is this a protected route?",
        name: "protected",
        type: "confirm",
      },
    ],
  });
};

export default defineConfig;
