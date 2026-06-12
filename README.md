# <img src="./docs/assets/nestwork-primary.svg#gh-light-mode-only" alt="Nestwork logo" height="30" /><img src="./docs/assets/nestwork-light.svg#gh-dark-mode-only" alt="Nestwork logo" height="30" />

![License](https://img.shields.io/github/license/nestwork-xyz/web?color=blue)
![Version](https://img.shields.io/github/v/tag/nestwork-xyz/web?label=version)
![Build](https://img.shields.io/github/actions/workflow/status/nestwork-xyz/web/ci.yml)
![Last Commit](https://img.shields.io/github/last-commit/nestwork-xyz/web?color=yellow)
![Contributors](https://img.shields.io/github/contributors/nestwork-xyz/web?color=5d00ff)
![Open Issues](https://img.shields.io/github/issues/nestwork-xyz/web?color=ff0000)
![GitHub Repo stars](https://img.shields.io/github/stars/nestwork-xyz/web)

**Nestwork** is a modern team workspace for managing projects, tasks, and documents — with kanban boards, @mentions, file uploads, and real-time collaboration.

> [!WARNING]
> Nestwork is currently under active development and some features may change before the first stable release.

## Quick Start

The live application is available at [https://nestwork.xyz](https://nestwork.xyz/), or [here if redirect fails](https://nestwork-web.vercel.app/).

## Project Structure

```ASCII
nestwork-xyz/web/
├─ .claude/                       # Claude Code workspace settings, commands, and AI development context
├─ .github/                       # GitHub configuration (workflows, issue templates, etc.)
│  └─ hooks/                      # AI agent hook configurations (Ultracite)
├─ .husky/                        # Git hooks for enforcing code quality and commit standards
├─ .vscode/                       # VSCode workspace settings, recommended extensions, etc.
├─ docs/                          # Extended project documentation, ADR notes, etc.
│  ├─ assets/                     # Documentation-only assets (images, diagrams, etc.)
│  └─ adr/                        # Architecture Decision Records (ADRs)
├─ plop-templates/                # Handlebars templates for Plop code generators
├─ public/                        # Static assets served directly by Next.js (favicon, images, etc.)
├─ src/                           # Application source code
│  ├─ app/                        # Next.js App Router (routes, layouts, route handlers, etc.)
│  │  ├─ layout.tsx               # Root Next.js layout file
│  │  └─ page.tsx                 # Home page
│  ├─ components/ui               # shadcn/ui component library
│  ├─ lib/utils.ts                # Shared helper functions
│  └─ styles/                     # Global styles
├─ .editorconfig                  # Editor-agnostic coding style rules
├─ .env.example                   # Example .env file for contributors
├─ .gitattributes                 # Git behavior settings (line endings, diff rules, etc.)
├─ .gitignore                     # Files and directories excluded from version control
├─ .lintstagedrc.json             # lint-staged configuration for running checks on staged files
├─ .npmrc                         # npm configuration (dependency behavior, install settings)
├─ AGENTS.md                      # Guidelines for AI agents/tools interacting with the codebase
├─ CHANGELOG.md                   # Project changelog (Keep a Changelog format)
├─ CLAUDE.md                      # Project-specific instructions and context for Claude AI
├─ commitlint.config.mjs          # Commit message linting rules (Conventional Commits)
├─ components.json                # shadcn/ui component registry
├─ LICENSE                        # Project license (AGPL-3.0)
├─ next.config.ts                 # Next.js configuration
├─ oxfmt.config.ts                # Oxlfmt configuration
├─ oxlint.config.ts               # Oxlint configuration
├─ package-lock.json              # Locked dependency versions for reproducible installs
├─ package.json                   # Project metadata, scripts, and dependencies
├─ plopfile.ts                    # Code generators (scaffolding components, pages, etc.)
├─ postcss.config.mjs             # PostCSS configuration
├─ README.md                      # Project overview, setup, and usage instructions
└─ tsconfig.json                  # TypeScript configuration
```

## Development Setup

### Prerequisites

- Node.js >= 20.x ([nvm](https://github.com/nvm-sh/nvm) recommended)
- npm >= 10.x

### Installation

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/nestwork-xyz/web.git
   cd web
   npm install
   ```

2. Configure environment variables:

   ```bash
   cp .env.example .env.local
   # Windows (CMD/Powershell)
   copy .env.example .env.local
   ```

   Fill in the required values &mdash; see `.env.example` for descriptions of each variable.

3. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at [`http://localhost:3000`](https://localhost:3000)

4. You can start editing the project! The application automatically reloads as you edit files during development.

   > This project uses the [`geist`](https://vercel.com/geist/introduction) npm package to load Geist Sans and Geist Mono, applied via CSS variables.

### Verify your setup

```bash
npm run typecheck  # TypeScript
npm run check      # OXLint + OXFmt
npm run build      # Production build
```

## Tech Stack

- [Next.js](https://nextjs.org/docs)
- [Ultracite](https://www.ultracite.ai/)
- [TailwindCSS](https://tailwindcs.com)
- [PostCSS](https://postcss.org)
- [shadcn/ui](https://ui.shadcn.com)
- [Plop](https://plopjs.com)
- [OXC](https://oxc.rs)

## Versioning

This project is currently in pre-1.0 development. Breaking changes may occur at any time.

Releases follow [Semantic Versioning](https://semver.org/) and are documented in [CHANGELOG.md](./CHANGELOG.md).

## Author

Created and maintained by [@nestwork-xyz](https://github.com/nestwork-xyz/).

## Contributors

- [@stephen-wm](https://github.com/stephen-wm/)

## License

AGPL-3.0 © 2026 Nestwork. See [LICENSE](./LICENSE) for details.

## Contact

For questions or support, open an issue or email [hello@nestwork.xyz](mailto:hello@nestwork.xyz).

---

Badges generated by [shields.io](https://shields.io/).
