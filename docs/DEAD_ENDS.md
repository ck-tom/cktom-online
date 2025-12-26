# Dead Ends & Lessons Learned

## Git Push Privacy Rejection
- **Issue**: Pushing to GitHub was rejected due to "push contains email address that is private".
- **Cause**: The local Git config email did not match the GitHub verified email, or the "Block command line pushes that expose my email" setting was enabled and the email used was not the private `noreply` one.
- **Resolution**:
    - Used a specific, verified email alias (`git@cktom.online`) for this project.
    - Ensured local git config (`user.email`) matched this address.
- **Takeaway**: Always verify Git identity configuration before starting a new repo to avoid rewriting history or push rejections.

## Initial Flat Directory Structure
- **Issue**: Mixing infrastructure `.tf` files with Astro project files in the root.
- **Problem**:
    - Cluttered root directory.
    - Confusing for build tools (e.g., Cloudflare Pages potentially trying to build terraform files).
    - Harder to separate concerns (infrastructure vs. application).
- **Resolution**: Moved to a `web/` vs `infrastructure/` split.
- **Takeaway**: Start with a structured approach (monorepo-lite) even for small projects if they involve both code and infra.
