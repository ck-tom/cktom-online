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

## 5. Design System & Aesthetics
- **Decision**: Minimalist monochrome palette with focus on typography.
    - **Font Stack**: `Inter` for UI/Body, `JetBrains Mono` for code and technical elements.
    - **Colors**: Neutral gray scale (50-900) to ensure high contrast and professional look.
- **Reasoning**:
    - **Timelessness**: Monochrome designs tend to age better than trend-focused color palettes.
    - **Readability**: High contrast and clean typography prioritize the reading experience.
    - **Professionalism**: avoiding "flashy" elements to focus on the engineering content.

## 6. Content Strategy & Architecture
- **Decision**: Explicit separation of Blog (time-sensitive) and Projects (portfolio).
- **Structure**:
    - **Home**: Hybrid approach with a personal Hero section and a list of recent posts.
    - **Blog**: Standard reverse-chronological listing with tagging support.
    - **Projects**: Dedicated section for showcasing work (Portfolio).
- **Reasoning**:
    - **Clarity**: distinct sections filter visitors based on intent (hiring vs reading).
    - **Discoverability**: a "Recent Posts" on the home page keeps the site feeling alive.

## 7. Headless CMS (Keystatic)
- **Decision**: Use Keystatic for content management.
- **Alternatives Considered**: Netlify CMS (Decap), TinaCMS, Sanity.
- **Reasoning**:
    - **Offline First**: Runs entirely locally (`npm run dev`), satisfying the requirement for "local offline" editing.
    - **Git-Backed**: Saves content directly to the file system (Markdown/JSON/YAML), leveraging existing Git workflows.
    - **Astro Integration**: Native support for Astro Content Collections via the `@keystatic/astro` integration.
    - **Singleton Support**: Allows editing singular pages (like the Home Page) in addition to collections (Blog/Projects).
