# FarkusDynamics Website — AI Agent Quick Reference

*Essential information for AI agents working on the FarkusDynamics website. This quick reference provides immediate access to project conventions, design specifications, and implementation patterns.*

## 🚀 Quick Start Checklist

### Project Setup
- [ ] Clone repository: `git clone https://github.com/farkusza/farkusdynamics-website.git`
- [ ] Install dependencies: `npm install` or `yarn install`
- [ ] Configure environment: `cp .env.example .env.local` and edit
- [ ] Start development server: `npm run dev`
- [ ] Verify at http://localhost:3000

### Development Workflow
1. **Create feature branch**: `git checkout -b feature/description`
2. **Make changes** following coding conventions
3. **Test changes**: Run linting, type checking, and component tests
4. **Commit**: Use Conventional Commits format
5. **Push**: `git push origin feature/description`
6. **Create PR** with description and testing notes

## 🎨 Design System at a Glance

### Core Colors
- **Background**: `#0a0e1a` (fd-primary)
- **Surface**: `#0f1423` (fd-surface)
- **Accent Violet**: `#8b5cf6` (fd-violet)
- **Accent Cyan**: `#06b6d4` (fd-cyan)
- **Text**: `#f1f5f9` (fd-text)

### Typography
- **Font**: Inter (300-800 weights)
- **Headings**: Gradient text effect
- **Body**: `text-base leading-relaxed text-fd-text-2`
- **Responsive**: `sm:`, `md:`, `lg:`, `xl:` prefixes

### Key Components
- **Navbar**: Sticky, glassmorphism on scroll
- **HeroSection**: Full-screen, animated background orbs
- **ServicesSection**: 3-column grid with gradient icons
- **ContactSection**: Two-column form + contact info
- **Footer**: Logo, links, social icons

## 📁 File Structure Reference

### Main Directories
```
app/           # Next.js pages and layout
components/    # Reusable React components
lib/           # Utility functions
public/        # Static assets
```

### Key Files
- **app/layout.tsx**: Root layout with metadata
- **app/page.tsx**: Main page component
- **components/Navbar.tsx**: Navigation header
- **components/Footer.tsx**: Page footer
- **components/sections/HeroSection.tsx**: Hero banner
- **tailwind.config.ts**: Custom theme configuration
- **globals.css**: Global CSS variables and utilities

## ⚡ Component Quick Specs

### Navbar
```typescript
// State: scrolled, mobileOpen
// Features: Sticky, glassmorphism, mobile responsive
// Location: components/Navbar.tsx
```

### HeroSection
```typescript
// State: visible
// Features: Full-screen, animated background, gradient text
// Location: components/sections/HeroSection.tsx
```

### ServicesSection
```typescript
// Features: 3-column grid, gradient icons, hover effects
// Location: components/sections/ServicesSection.tsx
```

### ContactSection
```typescript
// Features: Form with validation, contact info cards
// Location: components/sections/ContactSection.tsx
```

## 🔧 Common Tasks Reference

### Adding a New Section
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to layout
4. Update navigation in `Navbar.tsx`
5. Add section ID to metadata if needed

### Creating a Component
1. Create `.tsx` file in `components/`
2. Use proper TypeScript interfaces
3. Follow component structure conventions
4. Export default component
5. Add documentation comments

### Updating Global Styles
- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **CSS Variables**: Edit `app/globals.css` → `:root`
- **Animations**: Add keyframes in `globals.css`
- **Utilities**: Add to `@layer utilities` in `globals.css`

### Responsive Design Patterns
```typescript
// Mobile-first approach
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>

// Grid system
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  Grid items
</div>
```

## 🐛 Debugging Quick Fixes

### Build Issues
```bash
# Clean install
rm -rf node_modules package-lock.json yarn.lock
npm install

# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript Errors
```bash
# Run type checking
npm run type-check

# Check for common issues:
# - Missing imports
# - Type mismatches
# - Optional chaining on non-optional types
```

### Styling Problems
```bash
# Verify Tailwind classes
# Check for typos in class names
# Ensure proper nesting in components
# Use browser DevTools to inspect applied styles
```

### Component Not Rendering
```bash
# Check console for errors
# Verify imports are correct
# Ensure proper TypeScript types
# Check for infinite loops in useEffect
```

## 🧪 Testing Commands

### Unit Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test -- ComponentName.test.tsx

# Watch mode
npm test -- --watch

# Test coverage
npm test -- --coverage
```

### Type Checking
```bash
# Verify TypeScript types
npm run type-check

# Fix type errors
# Update type definitions or add proper types
```

### Linting
```bash
# Check code quality
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

## 🔐 Security Best Practices

### Input Validation
```typescript
// Always validate and sanitize
function createUser(input: CreateUserInput) {
  if (!isValidEmail(input.email)) {
    throw new Error('Invalid email format');
  }
  
  const sanitized = {
    name: sanitizeInput(input.name),
    email: input.email.toLowerCase().trim(),
  };
  
  // Proceed with sanitized data
}
```

### Environment Variables
```typescript
// Never commit secrets
// Use .env.local for local development
// Use environment variables in code
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const dbUrl = process.env.DATABASE_URL;
```

### Error Handling
```typescript
// Use error boundaries for React components
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return <div>Something went wrong: {error.message}</div>;
}

// Catch and log errors appropriately
try {
  // risky operation
} catch (error) {
  logger.error('Operation failed', { error });
  // Show user-friendly message
}
```

## 📈 Performance Optimization

### Code Splitting
```typescript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'));

// Route-based splitting (automatic in Next.js)
```

### Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="Company logo"
  width={200}
  height={200}
  priority
/>
```

### Caching
```typescript
// Static generation (revalidates every 5 minutes)
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 300,
  };
}
```

## 🔄 Git Workflow

### Branch Naming
- **Feature branches**: `feature/description`
- **Fix branches**: `fix/description`
- **Chore branches**: `chore/description`

### Commit Messages
```
feat: add payment integration
fix: header styling on mobile
docs: update component documentation
test: add unit tests for payment component
chore: update dependencies
```

### Pull Request Template
```markdown
## Description
What does this PR do?

## Changes
- List of changes

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing performed
- [ ] Accessibility testing performed

## Screenshots/GIFs
(Optional) Visual changes

## Related Issues
#123, #456
```

## 📚 Learning Resources

### Official Docs
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev/learn
- **TypeScript**: https://www.typescriptlang.org/
- **Tailwind CSS**: https://tailwindcss.com/docs

### Community
- **Stack Overflow**: https://stackoverflow.com/questions/tagged/nextjs
- **GitHub Discussions**: https://github.com/vercel/next.js/discussions
- **Discord**: https://discord.com/invite/nextjs

---

*This quick reference is designed for AI agents to work efficiently on the FarkusDynamics website. For detailed information, consult the full framework documents:*
- `PROJECT_FRAMEWORK.md` - Complete project structure and conventions
- `DESIGN_SYSTEM.md` - Visual design specifications
- `COMPONENT_SPECS.md` - Technical component documentation
- `CODING_CONVENTIONS.md` - Code style and best practices
- `SETUP_GUIDE.md` - Development environment setup

*Always follow the established conventions to maintain consistency and quality across the project.*