# Project Overview

## Goal
The goal of ~~`cktom-online`~~ [itschey.net](https://itschey.net) is to build a personal website and blog for Cheyne Tom. 

## Technology Stack

### Frontend
- **Framework**: [Astro](https://astro.build/) - Chosen for its performance, static site generation capabilities, and component island architecture.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- **Language**: TypeScript - Used in strict mode for type safety.

### Infrastructure & Deployment
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) - Fast, secure, and globally distributed hosting for static sites.
- **Infrastructure as Code (IaC)**: [OpenTofu](https://opentofu.org/) - Open-source alternative to Terraform for managing Cloudflare resources.
- **State Management**: S3-compatible backend (configured in `infrastructure/main.tf`).

### Continuous Integration
- **Platform**: [GitHub Actions](https://github.com/features/actions) - Automates build verification.
- **Workflow**: `.github/workflows/build-verify.yml` triggers on pushes and pull requests to `main`, ensuring the site always builds successfully (`npm ci` && `npm run build`).

## Project Structure
The project follows a monorepo structure:
- `web/`: Contains the Astro frontend application.
- `web/src/content/`: Contains the content for the blog and projects.
- `infrastructure/`: Contains OpenTofu configuration for provisioning Cloudflare resources.
- `docs/`: Project documentation (this folder).
