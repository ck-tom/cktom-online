# Project History

## [2025-12-25] Initial Setup & Git Configuration
- **Action**: Configured Global Git User.
- **Details**: Set username to `ck-tom` and email to `git@cktom.online` to ensure commits are correctly attributed.
- **Context**: Ensuring privacy and correct identity for the repository.

## [2025-12-25] Astro Landing Page Setup
- **Action**: Initialized the Astro project.
- **Details**:
    - Created a new Astro project in `web/`.
    - Configured Tailwind CSS and TypeScript (strict mode).
    - Implemented a Landing Page with a Hero section and Feature Grid.
    - Structured components for reusability.
- **Context**: Establishing the visual foundation of the site.

## [2025-12-25] Infrastructure Provisioning with OpenTofu
- **Action**: Set up Infrastructure as Code.
- **Details**:
    - Created `infrastructure/` directory.
    - Defined `cloudflare_pages_project` resource in `main.tf`.
    - Configured a `cloudflare_record` (CNAME) pointing to the Pages project.
    - Set up S3-compatible backend for OpenTofu state.
- **Context**: moving towards a GitOps and IaC approach for reliable deployments.

## [2025-12-26] Monorepo Restructuring & Push
- **Action**: Organized project into a monorepo.
- **Details**:
    - formally separated `web` and `infrastructure` directories.
    - Configured SSH access for GitHub.
    - Updated Cloudflare Pages configuration to point to the `web` subdirectory.
- **Resolutions**:
    - Resolved authentication issues with GitHub pushes by using consistent email addresses and SSH keys.

## [2025-12-26] Documentation Initiatives
- **Action**: Started comprehensive documentation.
- **Details**: Created this `HISTORY.md`, along with `OVERVIEW.md`, `DECISIONS.md`, and `DEAD_ENDS.md`.
- **Reasoning**: To maintain a "brain" for the project and facilitate future blog posts.
