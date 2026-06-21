# Changelog

All notable changes to Nestwork will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and [Conventional Commits](https://www.conventionalcommits.org/). The formatting for this document is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Added shadcn/ui configuration and initial design system foundation with tokens and reusable UI components.
- Introduced application theming infrastructure with `next-themes`, including theme providers, theme hooks, and a reusable theme toggle component.
- Hydration and mounting utility hooks to safely handle client-only behavior (`use-hydrated`, `use-mounted`).
- Reusable layout components (`Container`, `Grid`, `Flex`, `Stack`) to establish a consistent design system foundation.
- Added a shared header layout component.
- Enabled `allowedDevOrigins` option in Next.js configuration to enable application preview on external devices during development.
- Enabled app providers in root `layout.tsx` file and `suppressedHydrationWarning`.

### Changed

- Updated `.gitignore` to allow tracking `.env.example` while ignoring local environment files.
- Updated TypeScript configuration to strengthen compiler options:
  - Enabled `noFallThroughCaseInSwitch` and `noUnCheckedIndexedAccess` options
  - Disabled `allowUnreachableCode` option suppression

### Removed

- `public/eclipse.svg` static image file, `Eclipse` icon now loaded from `components/shared/icons.tsx`.

## [0.5.0] - 2026-06-20

### Added

- Nestwork branding assets to the `public/brand` folder, and browser icons (favicon, apple-icon, etc.) to the `public/` folder.
- `not-found.tsx` global 404 page with illustration, go home, and go back actions.
- `loading.tsx` global loading state.
- `site.ts` site constants (name, URL, descriptions, social links).
- `metadata.ts` + metadata generation utility for consistent metadata setup.
- `manifest.ts` PWA web app manifest.
- Reusable illustration images for UI content in `public/illustrations`.

### Changed

- `layout.tsx` updated to use `createMetadata` for root metadata.
- `(marketing)/page.tsx` updated to use `createMetadata` for page-level metadata.
- Updated project structure diagram in README to reflect new files.
- Replaced "Nestwork" text with official logo in landing page header.

### Removed

- Default `favicon.ico` from the `app/` folder (Nestwork branded favicon now lives in `public/` folder).

## [0.4.2] - 2026-06-20

### Added

- Husky `pre-push` hook to validate only commit messages being pushed.
- Build, open issues, and GitHub repo stars badges in the head of the README file.
- [Development Setup](./README.md#development-setup) section in README file.
- Pull request merge commit guidelines in the CONTRIBUTING file.
- Merge commit guidance comment in the pull request template.

## [0.4.1] - 2026-06-20

### Changed

- Downgrade pinned npm version in `package.json` engines configuration from v11.3.0 to v10.9.0.
  - Resolves npm supported version error when GitHub actions are running in the remote repository during dependency installations.

## [0.4.0] - 2026-06-20

### Added

- GitHub CI/CD workflows for lint checks, code quality, build, stale issues management, dead link checks, auto PR merge, release management.
- Lychee configuration with `link-check` workflow for dead link checks in code and documentation files.
- Dependabot configuration with grouped updates for npm and github-actions ecosystems.
- Commit message spell checking using CSpell via the `commit-msg` Husky hook.
- Commit message validation in the `commit-msg` hook using Commitlint.
- Conventional Commit terms and project-specific terminology to the CSpell dictionary to reduce false positives.
- Plop configuration, corresponding template files in `plop-templates` folder, and run script in `package.json`.
- [Repository Standards](./README.md#repository-standards) section in README file.
- Added bash files found in `.github/` folder to ignore list in CSpell configuration.
- Release-it configuration for automating versioning and releases.

### Changed

- Updated commit workflow to validate new commit messages during the commit-msg phase.
- Retained commit history validation in the pre-commit hook to help identify non-compliant commit messages introduced through merges or other workflows.
- Limited commit message spell checking to the commit subject line to improve signal-to-noise ratio and avoid false positives from footers, issue references, and metadata.
- Updated project structure diagram in README file to reflect newly added files and folders.

## [0.3.0] - 2026-06-19

### Added

- Issue templates for bug reports, feature requests, user stories, tasks, and documentation issues.
- Pull request template.
- CONTRIBUTING.md with full development workflow and coding standards.
- CODE_OF_CONDUCT.md based on Contributor Covenant v2.1.
- SECURITY.md with vulnerability reporting guidelines.
- SUPPORT.md with instructions on how to ask questions and receive help on the project.
- [Versioning](./README.md#versioning) and [Contributing](./README.md#versioning) sections in README file.

### Changed

- README now shows Nestwork logo with light and dark mode logo variants.
- Updated project structure diagram in README to reflect newly added files and folders.
- Updated ignore pattern for `.github/` folder to target YML/YAML files only in cspell config.

### Fixed

- Lint-staged configuration causing RANDOM `[SIGKILL]` error on JSON and markdown files.

## [0.2.0] - 2026-06-19

### Added

- Commitlint configuration with Husky commit-msg hook for linting Git commits.
- Markdownlint configuration with corresponding `lint:md` script in package.json file.
- Enabled Ultracite with Oxlint and Oxfmt configuration files and corresponding lint, format, and fix scripts in `package.json` file.
- `.nvmrc` pinning Node to version `v22.22.1`.
- `engines` field enforcing Node version >=22 and npm >=11 in `package.json`
- `.editorconfig` and `.gitattributes` for consistent editor and Git behavior.
- `.npmrc` to configure NPM behavior for dependency management.
- Code spell checker configuration with `cspell` with custom `project-terms` dictionary in `.cspell/` directory.
- Configured `.github/hooks/ultracite.json` for GitHub awareness of Ultracite lint and formatting commands.
- `.vscode/` folder containing VSCode workspace settings and recommended extensions list.
- Added ADR docs explaining choices of package manager, linter/formatter, React compiler, and app router

### Changed

- Expanded `lint-staged` configuration to also run spellchecker and lint markdown files as well.
- Add `.cspellcache` to ignore patterns in `.gitignore` file.
- Formatted root `layout.tsx` file with Oxlint.
- Updated AI agent files to provide more context on formatting standards for the project.
- Updated project structure diagram in README file to reflect new files.

### Fixed

- Typo in this CHANGELOG file.
- Invalid DOM property `clip-rule` in `page.tsx` to `clipRule`.

## [0.1.0] - 2026-06-19

### Added

- Initial Next.js 16 project scaffold with App Router, TypeScript, and Tailwind CSS v4.
- Added project licensing under AGPL-3.0.
- Added a CHANGELOG following the Keep a Changelog format.
- Added project documentation and setup instructions in the README.
- Added repository metadata and AI agent guidance files.
- Added initial application layout and home page.

### Changed

- Updated application metadata to use the Nestwork name and description.
- Replaced the default Next.js landing page with an under-construction page linking to the Nestwork organization and web repository

[Unreleased]: https://github.com/nestwork-xyz/web/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/nestwork-xyz/web/compare/v0.4.2...v0.5.0
[0.4.2]: https://github.com/nestwork-xyz/web/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/nestwork-xyz/web/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/nestwork-xyz/web/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/nestwork-xyz/web/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/nestwork-xyz/web/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/nestwork-xyz/web/releases/tag/v0.1.0
