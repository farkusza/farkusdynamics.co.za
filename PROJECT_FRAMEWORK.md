# FarkusDynamics Website — Project Framework for AI Agents

*Master documentation for AI agents working on the FarkusDynamics website. This framework provides the complete context, conventions, and specifications needed to understand, modify, and extend the website consistently.*

## 📋 Overview

The FarkusDynamics website is a Next.js 14+ application built with React, TypeScript, and Tailwind CSS. It follows modern web development best practices with a focus on performance, accessibility, and visual impact.

### Core Technologies
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: React functional components with `use client` directive
- **Animations**: CSS animations + React state management
- **Deployment**: Vercel (auto-deployed from GitHub)

### Project Structure
```
farkusdynamics-website/
├── app/                    # Next.js App Router pages and layout
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global CSS variables and utilities
├── components/             # Reusable React components
│   ├── Navbar.tsx          # Navigation header
│   ├── Footer.tsx          # Page footer
│   └── sections/           # Page section components
│       ├── HeroSection.tsx # Hero banner
│       ├── ServicesSection.tsx
│       ├── AboutSection.tsx
│       ├── WorkSection.tsx
│       └── ContactSection.tsx
├── lib/                   # Utility functions and libraries
├── public/                # Static assets (images, HTML)
├── tailwind.config.ts     # Tailwind configuration with custom colors
├── next.config.js         # Next.js configuration
└── package.json           # Project dependencies
```

## 🎨 Design System

### Color Palette
The design system uses a deep-space theme with violet and cyan accents.

**Primary Colors:**
- `--fd-primary` (#0a0e1a): Deep space background
- `--fd-surface` (#0f1423): Secondary background/card surface
- `--fd-surface-2` (#151b2d): Tertiary background

**Accent Colors:**
- `--fd-violet` (#8b5cf6): Primary brand color
- `--fd-violet-light` (#a78bfa): Hover/light state
- `--fd-violet-dark` (#7c3aed): Dark shade
- `--fd-cyan` (#06b6d4): Secondary accent
- `--fd-cyan-light` (#22d3ee): Hover/light state

**Text Colors:**
- `--fd-text` (#f1f5f9): Primary text
- `--fd-text-2` (#94a3b8): Secondary text
- `--fd-text-3` (#64748b): Tertiary/text-muted

### Typography
- **Primary**: Inter (weights: 300-800)
- **Headings**: Large, bold, with gradient text effects
- **Body**: Readable line lengths (65-75 characters)
- **Hierarchy**: Clear size progression (text-lg → text-2xl → text-3xl → text-4xl → text-5xl+)

### Spacing & Layout
- **Container**: `max-w-7xl` (standard), `max-w-5xl` (sections)
- **Padding**: `px-6` (mobile), `px-8` (desktop)
- **Grid**: Responsive grid system with `grid-cols-1` (mobile) to `grid-cols-4` (desktop)
- **Gaps**: `gap-8` (standard), `gap-12` (large sections)

### Components & Patterns

#### Navigation
- **Navbar**: Fixed position, glassmorphism effect on scroll
- **Mobile**: Hamburger menu with smooth animation
- **Links**: Underline on hover, gradient text for emphasis

#### Sections
- **Hero**: Full viewport height (`min-h-screen`), animated background elements
- **Content**: Max-width 2/3 of container, centered or left-aligned
- **Stats**: Grid layout with animated numbers

#### Visual Effects
- **Glassmorphism**: `bg-opacity-60 backdrop-blur-md border-white/10`
- **Gradients**: Linear gradients for text and backgrounds
- **Shadows**: Colored glows (`glow-violet`, `glow-cyan`)
- **Animations**: Fade-in, slide-up, float, pulse

## 📁 File & Code Conventions

### Component Structure
Each component follows this pattern:

```typescript
'use client';

import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function ComponentName() {
  // State management
  const [state, setState] = useState(initialState);
  
  // Refs for DOM elements
  const ref = useRef<HTMLElement>(null);
  
  // Effects for side effects
  useEffect(() => {
    // Component did mount logic
  }, []);
  
  return (
    <div className="component-styles">
      {/* Component content */}
    </div>
  );
}
```

### Styling Guidelines
- Use Tailwind CSS utility classes for 90% of styling
- Custom CSS in `globals.css` or component-specific `<style>` tags
- Responsive design: `sm:`, `md:`, `lg:`, `xl:` prefixes
- Hover states: `hover:`, `focus:`, `active:` variants
- Transitions: `transition-all duration-300` for smooth animations

### TypeScript Best Practices
- Always use `import type` for type imports
- Define clear prop interfaces for components
- Use `React.ReactNode` for children
- Generic types where appropriate
- Strict null checks enabled

### Animation Patterns
- **Entry animations**: Use `useState` + `useEffect` for fade-in effects
- **Scroll animations**: Use `IntersectionObserver` or scroll position
- **Hover effects**: CSS transitions with `hover:` classes
- **Loading states**: Skeleton loaders or shimmer effects

## 🚀 Development Setup

### Prerequisites
- Node.js 18+ (with npm or yarn)
- Git
- Code editor (VS Code recommended)

### Installation
```bash
# Clone the repository
git clone https://github.com/farkusza/farkusdynamics-website.git
cd farkusdynamics-website

# Install dependencies
npm install
# or
yarn install

# Development server
npm run dev
# or
yarn dev

# Open http://localhost:3000
```

### Build & Deployment
```bash
# Production build
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start

# Deploy to Vercel (auto-detected from git repo)
# Push to main branch and Vercel will auto-deploy
```

### Testing
```bash
# Run tests (if any)
npm test
# or
yarn test

# ESLint (code quality)
npm run lint
# or
yarn lint
```

## 🔧 Common Tasks & Patterns

### Adding a New Section
1. Create component in `components/sections/` directory
2. Import and add to `app/page.tsx` layout
3. Add corresponding navigation link in `Navbar.tsx`
4. Update metadata in `app/layout.tsx` if needed

### Creating a New Component
1. Create file in `components/` directory
2. Use proper TypeScript interfaces
3. Add to component library documentation
4. Export default component

### Updating Global Styles
- Edit `app/globals.css` for CSS variables and utility classes
- Edit `tailwind.config.ts` for color palette and theme extensions
- Run dev server to see changes

### Working with Images
- Place images in `public/images/`
- Reference with `/images/filename.jpg` in Next.js components
- Use `next/image` component for optimization (if implemented)

### Animations & Effects
- Use CSS keyframes in `globals.css` for reusable animations
- Use React state for component-specific animations
- Use `useRef` for scroll-triggered animations

## 📝 Component Specifications

### Navbar
- **Location**: `components/Navbar.tsx`
- **Props**: None
- **State**: `scrolled`, `mobileOpen`
- **Features**: Sticky header, glassmorphism, mobile responsive

### HeroSection
- **Location**: `components/sections/HeroSection.tsx`
- **Props**: None
- **State**: `visible`
- **Features**: Full-screen, animated background, gradient text, stats grid

### ServicesSection
- **Location**: `components/sections/ServicesSection.tsx`
- **Props**: None
- **Features**: Service cards with icons, hover effects

### AboutSection
- **Location**: `components/sections/AboutSection.tsx`
- **Props**: None
- **Features**: Company information, team highlights

### WorkSection
- **Location**: `components/sections/WorkSection.tsx`
- **Props**: None
- **Features**: Project showcase, case studies

### ContactSection
- **Location**: `components/sections/ContactSection.tsx`
- **Props**: None
- **Features**: Contact form, location info

### Footer
- **Location**: `components/Footer.tsx`
- **Props**: None
- **Features**: Copyright, links, social icons

## 🎯 Quality Standards

### Performance
- Optimize images with Next.js `next/image`
- Minimize re-renders with `React.memo` where appropriate
- Use code splitting and lazy loading
- Keep bundle size under control

### Accessibility
- Semantic HTML elements (`header`, `main`, `section`, `footer`)
- ARIA labels where needed
- Color contrast ratios > 4.5:1
- Keyboard navigation support
- Screen reader friendly

### SEO
- Proper metadata in `app/layout.tsx`
- Semantic heading hierarchy
- Descriptive alt text for images
- Clean URL structure
- Sitemap generation (if implemented)

### Mobile Responsiveness
- Test on multiple screen sizes
- Use Tailwind's responsive prefixes
- Touch-friendly tap targets (min 44px)
- Performance on mobile networks

### Cross-Browser Compatibility
- Test on Chrome, Firefox, Safari, Edge
- Vendor prefixes where needed
- Graceful degradation for older browsers

## 🛠️ Debugging & Maintenance

### Common Issues
- **Build failures**: Check `package.json` scripts and dependencies
- **Styling issues**: Verify Tailwind classes and custom CSS
- **TypeScript errors**: Check type definitions and imports
- **Performance issues**: Use browser DevTools profiling

### Development Workflow
1. Create feature branch from main
2. Make changes with tests
3. Run linting and type checking
4. Commit with clear message
5. Push and create PR
6. Get review and merge

### Environment Variables
- Store sensitive data in `.env.local`
- Use `process.env.VAR_NAME` in code
- Never commit `.env` files

### Version Control
- Use semantic versioning for releases
- Keep commit history clean and descriptive
- Use GitHub PRs for code review

## 📚 Additional Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React TypeScript Guide](https://react.tips/typescript/)

### Project-Specific
- **GitHub Repository**: https://github.com/farkusza/farkusdynamics-website
- **Vercel Deployment**: https://farkusdynamics.com
- **Component Library**: See `components/` directory

### Support
For questions or issues, contact the development team or consult the project's issue tracker.

---

*Last updated: June 2024*
*Maintained by: FarkusDynamics AI Team*