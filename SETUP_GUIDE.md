# FarkusDynamics Website — Setup Guide

*Complete setup instructions for developers and AI agents working on the FarkusDynamics website. This guide covers prerequisites, installation, configuration, and development workflow.*

## 📋 Prerequisites

### System Requirements
- **Operating System**: Linux, macOS, or Windows (WSL2 recommended)
- **Memory**: 4GB+ RAM recommended
- **Storage**: 2GB+ free disk space
- **Internet**: Required for package installation and updates

### Software Requirements
- **Node.js**: v18.x or higher
  - Verify: `node --version`
  - Download: https://nodejs.org/
- **npm** or **Yarn**: Package manager
  - npm comes with Node.js
  - Yarn: `npm install -g yarn`
- **Git**: Version control
  - Verify: `git --version`
  - Download: https://git-scm.com/
- **Code Editor**: VS Code recommended
  - Extensions: TypeScript, Prettier, ESLint, Tailwind CSS

### Development Tools
- **Terminal**: Bash, Zsh, or Fish shell
- **Browser**: Chrome, Firefox, or Edge with DevTools
- **API Client**: Postman or Insomnia (for API testing)
- **Database Tool**: TablePlus or DBeaver (if using databases)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
# Using HTTPS
git clone https://github.com/farkusza/farkusdynamics-website.git

# Using SSH (if configured)
git clone git@github.com:farkusza/farkusdynamics-website.git

cd farkusdynamics-website
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Using Yarn (recommended for consistency)
yarn install

# Using pnpm
pnpm install
```

**Note**: If you encounter permission issues on Linux/macOS, avoid using `sudo npm install`. Instead, fix permissions:
```bash
# Create a directory for global installations
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to your shell profile
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc  # or ~/.zshrc
source ~/.bashrc
```

### 3. Environment Configuration
```bash
# Copy environment example file
cp .env.example .env.local

# Edit the .env.local file with your configuration
# Common variables to set:
# - NEXT_PUBLIC_API_URL=your-api-url
# - DATABASE_URL=your-database-url (if applicable)
# - NEXTAUTH_SECRET=your-secret-key (for authentication)

# Generate a secret key (example)
openssl rand -base64 32
```

### 4. Start Development Server
```bash
# Using npm
npm run dev

# Using Yarn
yarn dev

# Using pnpm
pnpm dev
```

**Default URL**: http://localhost:3000

### 5. Build for Production
```bash
# Create production build
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start

# Test production build locally
npm run build
npm start
```

## 🔧 Development Tools & Scripts

### Available npm Scripts
```json
{
  "scripts": {
    "dev": "next dev",           // Development server
    "build": "next build",       // Production build
    "start": "next start",       // Start production server
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx", // Linting
    "type-check": "tsc --noEmit", // TypeScript type checking
    "test": "jest",              // Run tests
    "test:watch": "jest --watch", // Watch tests
    "test:coverage": "jest --coverage", // Test coverage
    "analyze": "webpack-bundle-analyzer dist/stats.json" // Bundle analysis
  }
}

# Run scripts
npm run <script-name>
# or
yarn run <script-name>
```

### Common Development Commands
```bash
# Check for outdated dependencies
npm outdated
# or
yarn outdated

# Update dependencies
npm update
# or
yarn upgrade

# Install a new package
npm install package-name
# or
yarn add package-name

# Install as development dependency
npm install --save-dev package-name
# or
yarn add --dev package-name

# Remove a package
npm uninstall package-name
# or
yarn remove package-name

# Run type checking
npm run type-check
# or
yarn type-check

# Run ESLint
npm run lint
# or
yarn lint

# Fix linting issues automatically
npm run lint -- --fix
# or
yarn lint --fix
```

## 📁 Project Structure Deep Dive

### App Router (app/)
```typescript
// app/layout.tsx - Root layout with metadata
export const metadata = {
  title: 'FarkusDynamics',
  description: 'AI-Augmented Operations for Modern Businesses',
  // ... other metadata
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}

// app/page.tsx - Main page component
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
```

### Components (components/)
```typescript
// components/Navbar.tsx - Navigation component
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      {/* Navbar content */}
    </nav>
  );
}
```

### Utilities (lib/)
```typescript
// lib/utils.ts - Utility functions
export function formatCurrency(value: number, currency: string = '$'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency === '$' ? 'USD' : 'EUR',
  }).format(value);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '').trim();
}
```

## 🎨 Tailwind CSS Configuration

### Custom Theme
```typescript
// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fd-primary': '#0a0e1a',
        'fd-surface': '#0f1423',
        'fd-surface-2': '#151b2d',
        'fd-violet': '#8b5cf6',
        'fd-violet-light': '#a78bfa',
        'fd-violet-dark': '#7c3aed',
        'fd-cyan': '#06b6d4',
        'fd-cyan-light': '#22d3ee',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent)',
      },
    },
  },
  plugins: [],
};
```

### Global CSS
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --fd-primary: #0a0e1a;
  --fd-surface: #0f1423;
  --fd-surface-2: #151b2d;
  --fd-border: rgba(255, 255, 255, 0.06);
  --fd-border-2: rgba(255, 255, 255, 0.1);
  --fd-violet: #8b5cf6;
  --fd-violet-light: #a78bfa;
  --fd-violet-dark: #7c3aed;
  --fd-cyan: #06b6d4;
  --fd-cyan-light: #22d3ee;
  --fd-text: #f1f5f9;
  --fd-text-2: #94a3b8;
  --fd-text-3: #64748b;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--fd-primary);
  color: var(--fd-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background-color: rgba(139, 92, 246, 0.3);
  color: #fff;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--fd-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--fd-surface-2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--fd-border-2);
}

@layer utilities {
  .text-gradient {
    background: linear-gradient(135deg, var(--fd-violet) 0%, var(--fd-cyan) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glow-violet {
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.15), 0 0 80px rgba(139, 92, 246, 0.05);
  }

  .glow-cyan {
    box-shadow: 0 0 40px rgba(6, 182, 212, 0.15), 0 0 80px rgba(6, 182, 212, 0.05);
  }

  .border-glow {
    border: 1px solid rgba(139, 92, 246, 0.2);
    box-shadow: inset 0 0 20px rgba(139, 92, 246, 0.05);
  }

  .glass {
    background: rgba(15, 20, 35, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes gradient {
  0% { backgroundPosition: 0% 50%; }
  50% { backgroundPosition: 100% 50%; }
  100% { backgroundPosition: 0% 50%; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## 🔍 Debugging & Troubleshooting

### Common Issues & Solutions

#### 1. Build Failures
```bash
# Problem: Build fails with missing dependencies
# Solution: Clean install
rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml
npm install
# or
yarn install

# Problem: TypeScript errors
# Solution: Run type checking
npm run type-check
# or
yarn type-check

# Problem: Tailwind not generating classes
# Solution: Ensure proper configuration
# Check that content paths include your source files
```

#### 2. Development Server Issues
```bash
# Problem: Server won't start or crashes
# Solution: Check port availability
# Find and kill process on port 3000
sudo lsof -i :3000
kill -9 <PID>

# Problem: Hangs on startup
# Solution: Clear caches
rm -rf .next
npm run dev

# Problem: Hot reload not working
# Solution: Check for syntax errors
npm run lint
```

#### 3. Package Manager Issues
```bash
# Problem: npm install permissions
# Solution: Use Node Version Manager (NVM)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Problem: Yarn installation
# Solution: Install via npm
npm install -g yarn

# Verify installation
yarn --version
```

#### 4. Git Issues
```bash
# Problem: Merge conflicts
# Solution: Resolve conflicts
git status  # See conflicted files
# Edit conflicted files, resolve conflicts
git add <file>
git rebase --continue

# Problem: Accidentally committed sensitive data
# Solution: Remove from history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch your-file.txt" \
  --prune-empty --tag-name-filter cat -- --all
git push origin --force --all
```

### Debugging Tools

#### React DevTools
```bash
# Install React DevTools extension
# Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

# Use in development
# - Inspect component hierarchy
# - View props and state
# - Debug hooks
# - Profile component performance
```

#### Chrome DevTools
```bash
# Access via:
# - Right-click page → Inspect
# - Menu → More Tools → Developer Tools
# - Keyboard shortcut: Ctrl+Shift+I (Windows) or Cmd+Option+I (Mac)

# Useful tabs:
# - Elements: Inspect DOM structure
# - Console: Run JavaScript, view errors
# - Sources: Debug JavaScript, set breakpoints
# - Network: Monitor HTTP requests
# - Performance: Profile page load and runtime
# - Lighthouse: Audit performance, accessibility, SEO
```

#### VS Code Debugging
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Next.js: Docker",
      "preLaunchTask": "npm: build",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["start"],
      "cwd": "${workspaceFolder}"
    }
  ]
}
```

## 🧪 Testing Setup

### Unit Testing with Jest
```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @types/jest

# Configure Jest
// jest.config.js
module.exports = {
  preset: 'next/babel',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**.d.ts',
    '!jest.config.js',
    '!next.config.js',
    '!{test,lib}/**/*',
  ],
};

// jest.setup.js
import '@testing-library/jest-dom';
```

### Integration Testing
```bash
# Install Cypress for E2E testing
npm install --save-dev cypress

# Configure Cypress
// cypress.config.js
module.exports = {
  e2e: {
    specDir: 'e2e/specs',
    supportDir: 'e2e/support',
    baseUrl: 'http://localhost:3000',
  },
};

# Run Cypress
npx cypress open
# or
npx cypress run
```

## 📚 Learning Resources

### Official Documentation
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev/learn
- **TypeScript**: https://www.typescriptlang.org/
- **Tailwind CSS**: https://tailwindcss.com/docs

### Community & Support
- **Stack Overflow**: https://stackoverflow.com/questions/tagged/nextjs
- **GitHub Discussions**: https://github.com/vercel/next.js/discussions
- **Discord**: https://discord.com/invite/nextjs
- **Twitter**: https://twitter.com/nextjs

### Video Tutorials
- **Next.js YouTube Channel**: https://www.youtube.com/@nextjs
- **Traversy Media**: https://www.youtube.com/c/TraversyMedia
- **Web Dev Simplified**: https://www.youtube.com/c/WebDevSimplified

## 🔄 Updating the Project

### Keeping Dependencies Current
```bash
# Check for outdated dependencies
npm outdated
# or
yarn outdated

# Update to latest versions
npm update
# or
yarn upgrade

# Update to specific version
npm install package-name@latest
# or
yarn add package-name@latest

# Update dev dependencies
npm update --dev
# or
yarn upgrade --dev
```

### Version Compatibility
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0",
    "yarn": ">=1.22.0"
  }
}
```

## 📝 Best Practices Summary

### Development
- ✅ Use TypeScript for type safety
- ✅ Follow component structure conventions
- ✅ Write tests for critical components
- ✅ Keep dependencies updated
- ✅ Use environment variables for configuration

### Performance
- ✅ Implement code splitting with dynamic imports
- ✅ Optimize images with Next.js Image component
- ✅ Use static generation where possible
- ✅ Implement proper caching strategies
- ✅ Monitor bundle size

### Security
- ✅ Validate and sanitize all inputs
- ✅ Use environment variables for secrets
- ✅ Implement proper error handling
- ✅ Keep dependencies updated for security patches
- ✅ Use HTTPS in production

### Maintenance
- ✅ Write clear documentation
- ✅ Follow consistent naming conventions
- ✅ Keep commit history clean
- ✅ Use meaningful commit messages
- ✅ Regular code reviews

---

*This setup guide is designed to get you up and running quickly while following best practices for the FarkusDynamics website project. For additional help, consult the project documentation or reach out to the development team.*