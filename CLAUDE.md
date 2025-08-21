# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Use pnpm as the package manager:
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture Overview

This is a Next.js 14 portfolio website using the App Router with:

### Core Technologies
- **Next.js 14** with App Router and React Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling with shadcn/ui components
- **Framer Motion** for animations
- **MDX** for blog content

### Key Architecture Patterns

**Data-Driven Portfolio**: The entire portfolio content is driven by a single configuration file at `src/data/resume.tsx`. This includes:
- Personal information, contact details, and social links
- Work experience and education history
- Projects and hackathons
- Skills and navigation items

**Blog System**: MDX-based blog with:
- Content stored in `/content/*.mdx` files
- Gray-matter for frontmatter parsing
- Unified processor with rehype-pretty-code for syntax highlighting
- Custom markdown processing in `src/data/blog.ts`

**Component Architecture**:
- **UI Components**: shadcn/ui components in `src/components/ui/`
- **Magic UI**: Custom animated components in `src/components/magicui/`
- **Card Components**: Specialized cards for resume items, projects, and hackathons
- **Theme System**: Dark/light mode via next-themes

### File Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components organized by type
- `src/data/` - Configuration and data processing
- `src/lib/` - Utility functions
- `content/` - MDX blog posts
- `public/` - Static assets (images, logos)

### Styling System
- Tailwind CSS with CSS variables for theming
- shadcn/ui component library configuration
- Custom animations via tailwindcss-animate and Framer Motion
- Responsive design with mobile-first approach

## Making Changes

**Content Updates**: Edit `src/data/resume.tsx` to update portfolio information
**Blog Posts**: Add new `.mdx` files to the `/content` directory
**Styling**: Use existing Tailwind classes and shadcn/ui components
**Components**: Follow existing patterns for card-based layouts and blur fade animations