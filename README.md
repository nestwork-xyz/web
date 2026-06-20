# <img src="./docs/assets/brand/nestwork-primary.svg#gh-light-mode-only" alt="Nestwork logo" height="30" /><img src="./docs/assets/brand/nestwork-blue-white.svg#gh-dark-mode-only" alt="Nestwork logo" height="30" />

![License](https://img.shields.io/github/license/nestwork-xyz/web?color=blue)
![Version](https://img.shields.io/github/v/tag/nestwork-xyz/web?label=version)
![Last Commit](https://img.shields.io/github/last-commit/nestwork-xyz/web?color=yellow)
![Contributors](https://img.shields.io/github/contributors/nestwork-xyz/web?color=5d00ff)

**Nestwork** is a modern team workspace for managing projects, tasks, and documents — with kanban boards, @mentions, file uploads, and real-time collaboration.

> [!WARNING]
> Nestwork is currently under active development and some features may change before the first stable release.

## Project Structure

```ASCII
nestwork-xyz/web/
├─ .claude/                             # Claude Code workspace settings, commands, and contexts
├─ .cspell/                             # Spell-check dictionaries
├─ .github/                             # GitHub configuration (workflows, issue/PR templates, etc.)
│  ├─ hooks/                            # AI agent hook configurations (Ultracite)
│  ├─ ISSUE_TEMPLATE/                   # Structured templates for bug reports and feature requests
│  │  ├─ bug_report.yml                 # Template for reporting bugs and reproducible issues
│  │  ├─ config.yml                     # Disables blank issues, adds contact links
│  │  ├─ documentation.yml              # Template for documentation improvements and additions
│  │  ├─ feature_request.yml            # Template for proposing new features and enhancements
│  │  ├─ task.yml                       # Template for chores/engineering tasks
│  │  └─ user_story.yml                 # Template for user stories and product requirements
│  ├─ scripts/                          # Custom scripts for GitHub automation and CI/CD tasks
│  ├─ workflows/                        # GitHub Actions CI, release, lint, auto-merge, etc.
│  │  ├─ auto-merge.yml                 # Dependabot auto-merge for safe updates
│  │  ├─ build.yml                      # Build verification
│  │  ├─ ci.yml                         # Full quality check suite
│  │  ├─ codeql.yml                     # CodeQL security scanning
│  │  ├─ commitlint.yml                 # Commit message validation
│  │  ├─ link-check.yml                 # Dead link checker
│  │  ├─ lint-and-check.yml             # Lint, format, spell, and markdown checks
│  │  ├─ release.yml                    # Automated release via release-it
│  │  └─ stale.yml                      # Stale issue and PR management
│  ├─ CODEOWNERS                        # Pull request template
│  ├─ dependabot.yml                    # Dependabot dependency update configuration
│  ├─ pull_request_template.md          # Pull request template
│  └─ SECURITY.md                       # Security policy, vulnerability reporting, and disclosure process
├─ .husky/                              # Git hooks for enforcing code quality and commit standards
├─ .vscode/                             # VSCode workspace settings, recommended extensions, etc.
├─ docs/                                # Extended project documentation, ADR notes, etc.
│  ├─ assets/                           # Documentation-only assets (images, diagrams, etc.)
│  └─ adr/                              # Architecture Decision Records (ADRs)
├─ plop-templates/                      # Handlebars templates for Plop code generators
├─ public/                              # Static assets served directly by Next.js
├─ src/                                 # Application source code (App Router, components, styles, utilities)
│  ├─ app/                              # Next.js App Router (routes, layouts, route handlers, etc.)
│  │  ├─ favicon.ico                    # Browser tab icon
│  │  ├─ globals.css                    # Global stylesheet
│  │  ├─ layout.tsx                     # Root application layout
│  │  └─ page.tsx                       # Home page
├─ .editorconfig                        # Editor-agnostic coding style rules
├─ .gitattributes                       # Git behavior settings (line endings, diff rules, etc.)
├─ .gitignore                           # Files and directories excluded from version control
├─ .lintstagedrc.json                   # lint-staged configuration for running checks on staged files
├─ .markdownlint-cli2.jsonc             # Markdown linting configuration
├─ .npmrc                               # npm configuration (dependency behavior, install settings)
├─ .nvmrc                               # Node.js version for local development consistency
├─ .release-it.json                     # Release-it configuration for versioning and changelog
├─ AGENTS.md                            # Guidelines for AI agents/tools interacting with the codebase
├─ CHANGELOG.md                         # Project changelog (Keep a Changelog format)
├─ CLAUDE.md                            # Project-specific instructions and context for Claude AI
├─ CODE_OF_CONDUCT.md                   # Community standards and enforcement guidelines
├─ commitlint.config.mjs                # Commit message linting rules (Conventional Commits)
├─ CONTRIBUTING.md                      # Contribution guidelines, workflow, and coding standards
├─ cspell.json                          # Spell checking configuration for code and docs
├─ LICENSE                              # Project license (AGPL-3.0)
├─ lychee.toml                          # Dead link checker configuration
├─ next.config.ts                       # Next.js configuration
├─ package-lock.json                    # Locked dependency versions for reproducible installs
├─ package.json                         # Project metadata, scripts, and dependencies
├─ postcss.config.mjs                   # PostCSS configuration
├─ README.md                            # Project overview, setup, and usage instructions
├─ SUPPORT.md                           # Support channels, troubleshooting, and help resources
└─ tsconfig.json                        # TypeScript configuration
```

## Versioning

This project is currently in pre-1.0 development. Breaking changes may occur at any time.

Releases follow [Semantic Versioning](https://semver.org/) and are documented in [CHANGELOG.md](./CHANGELOG.md).

## Repository Standards

Nestwork includes a complete governance and automation setup, including:

- Conventional commits
- Commitlint and Husky hooks
- Dependabot configuration
- GitHub issue and pull request templates
- Standardized GitHub labels via [.github/scripts/create-gh-labels.sh](./.github/scripts/create-gh-labels.sh)
- Automated release tooling with `Release-it`

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

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
