# FarkusDynamics Coding Conventions

*Comprehensive coding standards and best practices for AI agents working on the FarkusDynamics website. This document covers TypeScript, React, Tailwind CSS, and general development conventions.*

## 📐 File Structure & Organization

### Project Layout
```
farkusdynamics-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/             # Reusable React components
│   ├── Navbar.tsx          # Navigation header
│   ├── Footer.tsx         # Page footer
│   └── sections/           # Page section components
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── AboutSection.tsx
│       ├── WorkSection.tsx
│       └── ContactSection.tsx
├── lib/                   # Utility functions and libraries
├── public/                # Static assets
├── styles/                # Global CSS (if needed)
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

### Component File Structure
```typescript
// Good
components/
  ├── ComponentName.tsx
  ├── ComponentName.module.css (if CSS modules needed)
  └── index.ts (for barrel exports)

// Bad
components/
  └── component-name.tsx  // Inconsistent naming
```

## 🔤 Naming Conventions

### Files & Directories
- **Component files**: PascalCase (`HeroSection.tsx`, `ContactForm.tsx`)
- **Utility files**: camelCase (`formatDate.ts`, `apiClient.ts`)
- **Type definitions**: camelCase (`userProfile.ts`, `apiResponse.ts`)
- **Test files**: `*.test.tsx` or `*.spec.tsx`
- **Directories**: camelCase or kebab-case (`utils/`, `api-clients/`)

### Variables & Functions
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_FILE_SIZE`)
- **Variables**: camelCase (`userName`, `isLoading`, `userProfile`)
- **Functions**: camelCase (`getUserData()`, `formatDate()`, `validateInput()`)
- **Components**: PascalCase (`UserProfile`, `LoginForm`, `Dashboard`)
- **Interfaces & Types**: PascalCase (`User`, `Product`, `ApiResponse`)

### TypeScript Specific
```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

// Bad
interface user {  // Should be PascalCase
  ID: string;     // Should be camelCase
  Name: string;   // Should be camelCase
}
```

## 📦 Imports & Exports

### Import Order
1. **Libraries** (React, Next.js, third-party)
2. **Local components** (from `../components`)
3. **Utilities** (from `../lib`)
4. ** Types & Interfaces** (from `./types`)
5. **Styles** (CSS modules or global styles)

```typescript
// Good
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatCurrency } from '@/lib/utils';
import type { Product } from './types';
import styles from './ProductCard.module.css';

// Bad
import { useState } from 'react';  // Single import
import React from 'react';         // Should be together
import { Link } from 'next/link';  // Should be with other third-party
```

### Export Best Practices
```typescript
// Default export for components
export default function MyComponent() {
  // component logic
}

// Named exports for utilities
export function formatCurrency(value: number): string {
  // formatting logic
}

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// Barrel exports for cleaner imports
// components/index.ts
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';
export { default as HeroSection } from './sections/HeroSection';
```

## 🎨 TypeScript Best Practices

### Type Safety
```typescript
// Good - specific types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Bad - any type
function greet(name: any): any {
  return `Hello, ${name}!`;
}

// Good - interfaces for props
interface UserProps {
  id: string;
  name: string;
  email: string;
  avatar?: string; // Optional property
}

// Bad - no type checking
function UserProfile(props: any) {
  // No type safety
}
```

### Optional Chaining & Nullish Coalescing
```typescript
// Good - safe property access
const username = user?.profile?.name ?? 'Guest';

// Bad - potential runtime error
const username = user.profile.name; // Error if user is null/undefined

// Good - default values
const count = items?.length ?? 0;

// Bad - undefined might cause errors
const count = items.length; // Error if items is undefined
```

### Type Guards & Narrowing
```typescript
// Good - type narrowing
function processValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase(); // TypeScript knows value is string
  }
  return value.toString(); // TypeScript knows value is number
}

// Bad - no type narrowing
function processValue(value: string | number): string {
  return value.toUpperCase(); // TypeScript error: number has no toUpperCase()
}
```

## ⚛️ React & Next.js Conventions

### Component Structure
```typescript
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { formatCurrency } from '@/lib/utils';

// Interfaces
interface ComponentProps {
  id: string;
  name: string;
  price: number;
  description?: string;
}

// Component
export default function ProductCard({ id, name, price, description }: ComponentProps) {
  // State
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Refs
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Effects
  useEffect(() => {
    // Component did mount logic
    console.log('ProductCard mounted:', id);
    
    // Cleanup
    return () => {
      console.log('ProductCard unmounted:', id);
    };
  }, [id]);
  
  // Helper functions
  const formattedPrice = formatCurrency(price);
  
  // Render
  return (
    <div ref={cardRef} className="product-card">
      {/* Component content */}
    </div>
  );
}
```

### Hooks Usage
```typescript
// Good - custom hooks for reusable logic
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Good - multiple useEffect for separate concerns
useEffect(() => {
  // Data fetching
}, [dependency]);

useEffect(() => {
  // Event listeners
}, []);

// Bad - multiple concerns in one useEffect
useEffect(() => {
  // Data fetching
  // Event listeners
  // Cleanup
}, []);
```

### Next.js Specific
```typescript
// Page components
export default function HomePage() {
  return (
    <main>
      {/* Page content */}
    </main>
  );
}

// With getStaticProps (Static Generation)
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
  };
}

// With getServerSideProps (Server-side Rendering)
export async function getServerSideProps(context) {
  const data = await fetchData(context.req);
  return {
    props: { data },
  };
}

// With fallback (Dynamic Routes)
export default function ProductPage({ params }) {
  return <h1>Product: {params.id}</h1>;
}

export async function getStaticPaths() {
  return {
    paths: [{ id: '1' }, { id: '2' }],
    fallback: 'blocking',
  };
}
```

## 🎨 Tailwind CSS Best Practices

### Utility Class Strategy
```typescript
// Good - use semantic class names
<div className="card">
  <h2 className="card-title">Title</h2>
  <p className="card-body">Content</p>
</div>

// In globals.css or component CSS
.card {
  @apply bg-white rounded-lg p-6 border border-gray-200;
}
.card-title {
  @apply text-xl font-bold mb-2;
}
.card-body {
  @apply text-gray-600;
}

// Bad - too many utility classes
<div className="bg-white rounded-lg p-6 border border-gray-200">
  <h2 className="text-xl font-bold mb-2">Title</h2>
  <p className="text-gray-600">Content</p>
</div>
```

### Responsive Design
```typescript
// Good - mobile-first approach
<div className="text-base md:text-lg lg:text-xl">
  Responsive text size
</div>

// Bad - desktop-first approach
<div className="lg:text-xl md:text-lg text-base">
  Responsive text size
</div>
```

### Custom Styles & Overrides
```typescript
// Good - extend Tailwind with custom classes
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'fd-primary': '#0a0e1a',
        'fd-violet': '#8b5cf6',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
};

// Use custom classes
<div className="fd-primary-text animate-fade-in">
  Custom styled content
</div>

// Bad - inline styles for presentation
<div style={{ backgroundColor: '#0a0e1a', color: '#f1f5f9' }}>
  Inline styles (hard to maintain)
</div>
```

## 🧪 Testing Conventions

### Test File Structure
```typescript
// Component.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard id="1" name="Test Product" price={19.99} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
  });

  it('handles expand/collapse functionality', () => {
    render(<ProductCard id="1" name="Test Product" price={19.99} description="Test description" />);
    
    const expandButton = screen.getByRole('button', { name: /expand/i });
    fireEvent.click(expandButton);
    
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
});
```

### Test Types
- **Unit tests**: Test individual components and utilities
- **Integration tests**: Test component interactions
- **E2E tests**: Test complete user flows (Cypress, Playwright)
- **Snapshot tests**: Catch unintended UI changes

## 📝 Documentation Standards

### Component Documentation
```typescript
/**
 * ProductCard component displays product information with expand/collapse functionality.
 * 
 * @component
 * @example
 * <ProductCard
 *   id="1"
 *   name="Premium Subscription"
 *   price={29.99}
 *   description="Get access to all premium features"
 * />
 */
export default function ProductCard({ id, name, price, description }: ComponentProps) {
  // Component implementation
}
```

### Function Documentation
```typescript
/**
 * Formats a number as currency with the specified currency symbol.
 * 
 * @param {number} value - The numeric value to format
 * @param {string} [currency='$'] - The currency symbol to use (default: $)
 * @returns {string} Formatted currency string
 * @example
 * formatCurrency(19.99); // "$19.99"
 * formatCurrency(1999.99, '€'); // "€1,999.99"
 */
export function formatCurrency(value: number, currency: string = '$'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency === '$' ? 'USD' : 'EUR',
  }).format(value);
}
```

## 🛠️ Development Workflow

### Git Workflow
```bash
# Feature branch naming
git checkout -b feature/add-payment-integration
git checkout -b fix/header-styling-issue

# Commit messages (Conventional Commits)
git commit -m "feat: add payment integration with Stripe"
git commit -m "fix: header styling on mobile devices"
git commit -m "docs: update component documentation"
git commit -m "test: add unit tests for payment component"
git commit -m "chore: update dependencies"

# Pull request template
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

### Code Review Checklist
- [ ] TypeScript types are properly used
- [ ] No `any` types (except in special circumstances)
- [ ] Component follows project conventions
- [ ] Proper error handling
- [ ] Accessibility considerations addressed
- [ ] Performance implications considered
- [ ] Tests added or updated
- [ ] Documentation updated
- [ ] No console logs in production code

## 🚨 Error Handling & Debugging

### Error Boundaries
```typescript
'use client';

import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="error-boundary">
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

export default function SafeComponent({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
```

### Logging Strategy
```typescript
// Development logging
if (process.env.NODE_ENV === 'development') {
  console.log('Development log:', data);
}

// Production logging (use a proper logger)
import logger from '@/lib/logger';

logger.info('User logged in', { userId, timestamp });
logger.error('Payment processing failed', { error, orderId });
```

### Debugging Tools
- **React DevTools**: Component inspection, hooks debugging
- **Redux DevTools**: State management debugging (if Redux is used)
- **Chrome DevTools**: Network, performance, accessibility testing
- **VS Code Debugger**: Breakpoints, step-through debugging

## 📦 Dependency Management

### Package.json Best Practices
```json
{
  "name": "farkusdynamics-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "test": "jest"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.0.0",
    "jest": "^29.0.0"
  }
}
```

### Dependency Updates
```bash
# Update all dependencies
npm update

# Update specific dependency
npm install package-name@latest

# Check for outdated dependencies
npm outdated

# Audit for security vulnerabilities
npm audit
```

## 🔒 Security Considerations

### Input Validation
```typescript
// Good - validate and sanitize inputs
function createUser(input: CreateUserInput) {
  // Validate email format
  if (!isValidEmail(input.email)) {
    throw new Error('Invalid email format');
  }
  
  // Sanitize inputs
  const sanitizedInput = {
    name: sanitizeInput(input.name),
    email: input.email.toLowerCase().trim(),
  };
  
  // Proceed with creation
}

// Bad - trust all inputs
function createUser(input: any) {
  // No validation, vulnerable to attacks
  database.users.insert(input);
}
```

### Authentication & Authorization
```typescript
// Protect routes with middleware
export default async function handler(req: NextRequest) {
  // Check authentication
  const token = req.headers.get('Authorization');
  if (!token || !isValidToken(token)) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  // Check authorization
  const user = await getUserFromToken(token);
  if (!user.hasPermission('access-admin')) {
    return new Response('Forbidden', { status: 403 });
  }
  
  // Process request
}
```

### Environment Variables
```typescript
// .env.local (never commit this file)
DATABASE_URL=your-database-url
NEXT_PUBLIC_API_KEY=your-public-api-key

// .env.example (commit this for reference)
DATABASE_URL=
NEXT_PUBLIC_API_KEY=

// Access in code
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
```

## 📈 Performance Optimization

### Code Splitting
```typescript
// Good - dynamic imports for code splitting
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'));

// Bad - all code loaded upfront
import HeavyComponent from '../components/HeavyComponent';

// Good - route-based splitting (Next.js does this automatically)
// Each page is its own bundle
```

### Image Optimization
```typescript
// Use Next.js Image component for automatic optimization
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="Company logo"
  width={200}
  height={200}
  priority
/>

// Good - proper sizing and formats
<img src="image.webp" alt="Description" width="800" height="600" />
```

### Caching Strategies
```typescript
// Static generation (default in Next.js)
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    // Revalidate every 5 minutes
    revalidate: 300,
  };
}

// Server-side rendering
export async function getServerSideProps(context) {
  const data = await fetchData(context.req);
  return {
    props: { data },
  };
}
```

## 🧰 Tooling & Configuration

### ESLint Configuration
```javascript
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```

### Prettier Configuration
```json
// .prettierrc
{
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "printWidth": 100
}
```

### VS Code Workspace Settings
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source": "fixAll"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "files.autoSave": "onFocusChange",
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

*This coding conventions document is a living document and should be updated as the project evolves and new best practices emerge.*</think>