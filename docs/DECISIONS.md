# Design Decisions

## 1. Monorepo Structure
- **Decision**: Split the codebase into `web/` and `infrastructure/`.
- **Alternatives Considered**: Keeping everything in the root or separate repositories.
- **Reasoning**:
    - **Clarity**: Separates application logic from infrastructure definitions.
    - **Deployment**: allows Cloudflare Pages to watch only the `web` folder (or specific paths) for builds.
    - **Management**: Keeps related parts of the project together without cluttering the root directory.

## 2. Astro for Frontend
- **Decision**: Use Astro as the site generator.
- **Reasoning**:
    - **Performance**: Astro ships zero JavaScript to the client by default (Islands Architecture).
    - **Content-Focused**: Ideal for a personal site/blog where content is king.
    - **Flexibility**: Allows using React/Vue/Svelte components if needed in the future.

## 3. OpenTofu for IaC
- **Decision**: Use OpenTofu instead of Terraform directly or manual configuration.
- **Reasoning**:
    - **Open Source**: Committed to being open source (fork of Terraform).
    - **Reproducibility**: Infrastructure changes are code, reviewable, and versioned.
    - **Automation**: Enables automated infrastructure updates alongside code changes.

## 4. Cloudflare Pages
- **Decision**: Host on Cloudflare Pages.
- **Reasoning**:
    - **Integration**: Excellent DNS and Edge integration.
    - **Speed**: Global CDN ensures fast load times.
    - **Cost**: Generous free tier for personal projects.
