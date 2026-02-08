# Project Instructions for Claude

## Git Workflow
**IMPORTANT:** Before pushing any changes:
1. Create a GitHub issue first describing the change
2. Reference the issue number in the commit message (e.g., `Fix menu delay #12`)
3. Then push the changes

This ensures a professional audit trail.

## Project Details
- **Domain:** corebitops.com
- **Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Hosting:** Azure Container Apps
- **CI/CD:** GitHub Actions (auto-deploys on push to main)

## Performance Decisions
- No framer-motion (removed for faster hydration)
- CSS animations with Intersection Observer instead
- Mobile menu uses CSS checkbox hack (works without JS)
- Dynamic imports with `ssr: false` for below-fold components

## Design Preferences
- Professional, clean animations
- Dark/light theme support
- Mobile-first approach
