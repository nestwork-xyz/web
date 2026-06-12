# Changelog

All notable changes to Nestwork will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and [Conventional Commits](https://www.conventionalcommits.org/). The formatting for this document is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- GitHub Actions workflows: build, ci, commitlint, codeql, lint-and-check, link-check, auto-merge, release, stale
- Dependabot configuration with grouped updates for npm and github-actions ecosystems
- Issue templates for bug reports, feature requests, user stories, and documentation issues
- Pull request template
- CONTRIBUTING.md with full development workflow and coding standards
- CODE_OF_CONDUCT.md based on Contributor Covenant v2.1
- SECURITY.md with vulnerability reporting guidelines
- commitlint enforcing Conventional Commits via Husky commit-msg hook
- CSpell spell checking with project-terms dictionary
- markdownlint-cli2 with consolidated configuration
- `.nvmrc` pinning Node.js 20
- vercel.json with base deployment configuration
- lychee.toml for dead link checking
- .release-it.json for automated versioning and changelog generation
- GitHub labels for type, status, priority, scope, and triage workflows

### Changed

- Use array destructuring to extract conventional commit types in Commitlint configuration
- Added [Contributing](./README.md#contributing) section in README file
- Bumped required Node.js version from 20 to >=22.18.0 to satisfy engine requirements in workflows
- Updated `.nvmrc` and `package.json` engines field accordingly
- Updated commitlint.yml to use node-version-file instead of hardcoded Node 20
- Reinitialized Husky and accompanying `commit-msg` and `pre-commit` hooks
- Add `ignorePatterns` to Oxfmt configuration file

## [0.1.0] - 2026-06-12

### Added

- Initial Next.js 16 project scaffold with App Router, TypeScript, and Tailwind CSS v4
- shadcn/ui with Nova style, Zinc base color, and Geist font
- Ultracite v7 with Oxlint and Oxfmt replacing ESLint and Prettier
- Husky pre-commit hooks with lint-staged integration
- `.editorconfig`, `.gitattributes`, and `.npmrc` for consistent editor and git behavior
- `engines` field enforcing Node >=20 and npm >=10
- React Compiler enabled via `babel-plugin-react-compiler`
- AGENTS.md and CLAUDE.md for AI coding agent context

[Unreleased]: https://github.com/nestwork-xyz/web/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/nestwork-xyz/web/releases/tag/v0.1.0
