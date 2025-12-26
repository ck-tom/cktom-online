# Project Overview

## Goal
The goal of `cktom-online` is to build a personal website and blog for "ck-tom". It serves as a playground for modern web technologies and a platform to share knowledge.

## Technology Stack

### Frontend
- **Framework**: [Astro](https://astro.build/) - Chosen for its performance, static site generation capabilities, and component island architecture.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- **Language**: TypeScript - Used in strict mode for type safety.

### Infrastructure & Deployment
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) - Fast, secure, and globally distributed hosting for static sites.
- **Infrastructure as Code (IaC)**: [OpenTofu](https://opentofu.org/) - Open-source alternative to Terraform for managing Cloudflare resources.
- **State Management**: S3-compatible backend (configured in `infrastructure/main.tf`).

## Project Structure
The project follows a monorepo structure:
- `web/`: Contains the Astro frontend application.
- `infrastructure/`: Contains OpenTofu configuration for provisioning Cloudflare resources.
- `docs/`: Project documentation (this folder).
