# Project History
This is an account of the history of the project, primarily focused on changes to the codebase, not the content.

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

## [2025-12-26] Continuous Integration Setup
- **Action**: Added build verification workflow.
- **Details**:
    - Created `.github/workflows/build-verify.yml`.
    - Configured to run `npm ci` and `npm run build` on `push` and `pull_request` to `main`.
    - Verified build commands locally.
- **Results**: Ensures the `main` branch always remains in a buildable state.

## [2025-12-27] Professional Blog Design Implementation
- **Action**: Transformed placeholder template into a full professional blog.
- **Details**:
    - **Design System**: Implemented a minimalist monochrome theme using Tailwind CSS v4 variables.
    - **Typography**: Integrated `Inter` (sans-serif) and `JetBrains Mono` (monospace).
    - **Structure**: Created comprehensive site structure:
        - `Home`: Custom hero and recent posts.
        - `Blog`: Listing and Detail pages using Astro Content Collections.
        - `Projects`: Portfolio showcase.
        - `About` & `Contact`: Static informational pages.
    - **Features**: Added syntax highlighting via `@tailwindcss/typography` and tag support.
- **Results**: The site is now functionally complete and ready for real content.

## [2025-12-27] Local Headless CMS Integration
- **Action**: Integrated Keystatic for local offline content management.
- **Details**:
    - **Installation**: Configured `@keystatic/astro` with React.
    - **Collections**: Mapped `Blog` and `Projects` to Keystatic collections for easy list management.
    - **Singletons**: Implemented a `Homepage` singleton to allow editing the Hero text (Greeting, Headline, Intro) via the CMS.
    - **Adapter**: Switched to `@astrojs/cloudflare` with `output: 'static'` to support the necessary server routes for the Admin UI while maintaining static builds.
- **Impact**: Enables non-technical editing of site content without touching code, fully offline and version controlled.

## [2026-01-06] Keystatic Singletons & Markdoc Adoption
- **Action**: Migrated About and Contact pages to Keystatic Singletons.
- **Details**:
    - **Singletons**: Converted `about.astro` and `contact.astro` to fetch data from Keystatic.
    - **Integration**: Installed `@astrojs/markdoc` to handle Keystatic's native `.mdoc` format.
    - **Documentation**: Created `web/docs/adr/001-keystatic-markdoc.md` detailing the decision process.
- **Context**: Enabling full CMS control over static pages while resolving file format conflicts between Astro and Keystatic. Keystatic was saving files as `.mdoc` but Astro was looking for `.md` so wasn't rendering the pages. Manually renaming files to `.md` let Astro render them, but would need to be manually done every time edited in keystatic. Adding markdoc support allowed Keystatic to save files as `.mdoc` and Astro to render them.

## [2026-01-09] Domain Rebrand
- **Action**: Rebranded the domain from `cktom.online` to `itschey.net`.
- **Details**:
    - **DNS**: Updated Cloudflare DNS records to point to the new domain.
    - **Content**: Updated all references to the old domain in the codebase.
    - **Infrastructure**: Updated Cloudflare Pages project name and domain, github project name and url.
- **Impact**: Moving to the more clever domain name `itschey.net`. Because my name is *Cheyne Tom* so **its CheyneT**om, get it?