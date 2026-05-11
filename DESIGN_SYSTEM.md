# FarkusDynamics Design System

*Comprehensive design specifications for AI agents working on the FarkusDynamics website. This document details the visual language, components, and patterns that define our brand identity.*

## 🎨 Color System

### Primary Palette

#### Deep Space Background
- **Name**: `--fd-primary`
- **Hex**: `#0a0e1a`
- **Usage**: Main page background, primary surfaces
- **Characteristics**: Deep, rich, professional

#### Secondary Surface
- **Name**: `--fd-surface`
- **Hex**: `#0f1423`
- **Usage**: Cards, secondary backgrounds, navigation
- **Characteristics**: Slightly lighter than primary

#### Tertiary Surface
- **Name**: `--fd-surface-2`
- **Hex**: `#151b2d`
- **Usage**: Borders, tertiary backgrounds, hover states
- **Characteristics**: Accent surface

### Accent Palette

#### Brand Violet
- **Name**: `--fd-violet`
- **Hex**: `#8b5cf6`
- **Usage**: Primary brand color, CTAs, highlights
- **Characteristics**: Vibrant, modern, energetic

#### Light Violet
- **Name**: `--fd-violet-light`
- **Hex**: `#a78bfa`
- **Usage**: Hover states, light accents
- **Characteristics**: Softer, complementary

#### Dark Violet
- **Name**: `--fd-violet-dark`
- **Hex**: `#7c3aed`
- **Usage**: Active states, borders
- **Characteristics**: Deeper shade

#### Cyan Accent
- **Name**: `--fd-cyan`
- **Hex**: `#06b6d4`
- **Usage**: Secondary accents, progress indicators
- **Characteristics**: Fresh, tech-oriented

#### Light Cyan
- **Name**: `--fd-cyan-light`
- **Hex**: `#22d3ee`
- **Usage**: Hover states, light accents
- **Characteristics**: Bright, eye-catching

### Text Palette

#### Primary Text
- **Name**: `--fd-text`
- **Hex**: `#f1f5f9`
- **Usage**: Main content text
- **Characteristics**: Off-white for readability

#### Secondary Text
- **Name**: `--fd-text-2`
- **Hex**: `#94a3b8`
- **Usage**: Subheadings, secondary content
- **Characteristics**: Muted for hierarchy

#### Tertiary Text
- **Name**: `--fd-text-3`
- **Hex**: `#64748b`
- **Usage**: Muted text, captions
- **Characteristics**: Very subtle

### Border Colors
- **Standard Border**: `rgba(255, 255, 255, 0.06)` (`--fd-border`)
- **Secondary Border**: `rgba(255, 255, 255, 0.1)` (`--fd-border-2`)

## 🔤 Typography System

### Font Families
- **Primary**: Inter
  - Weights: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold), 800 (extra-bold)
  - Usage: All body text and headings
- **Monospace**: JetBrains Mono
  - Usage: Code snippets, technical data

### Heading Hierarchy
- **H1**: `text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight`
  - Usage: Main page title, hero headlines
- **H2**: `text-3xl sm:text-4xl font-bold mb-6`
  - Usage: Section titles
- **H3**: `text-2xl font-semibold mb-4`
  - Usage: Subheadings, feature titles
- **H4**: `text-xl font-medium mb-3`
  - Usage: Card titles, sub-subheadings
- **H5**: `text-lg font-semibold`
  - Usage: Small headings, list items

### Body Text
- **Standard**: `text-base leading-relaxed text-fd-text-2`
  - Usage: Paragraph text
- **Large**: `text-lg leading-relaxed`
  - Usage: Subheadings, emphasis text
- **Small**: `text-sm text-fd-text-3`
  - Usage: Captions, metadata, muted text

### Text Effects
- **Gradient Text**: `text-gradient` class
  - Usage: Key phrases, brand words
  - CSS: `background: linear-gradient(135deg, var(--fd-violet) 0%, var(--fd-cyan) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- **Muted Text**: `text-fd-text-2` or `text-fd-text-3`
  - Usage: Secondary information
- **Emphasis**: `font-semibold` or `font-bold`

## 📐 Layout & Spacing

### Container Widths
- **Full Width**: `w-full` (100% width)
- **Max Content Width**: `max-w-7xl` (1200px-1400px)
- **Section Width**: `max-w-5xl` (1000px-1200px)
- **Card Width**: `max-w-sm` (384px) or `max-w-md` (448px)

### Spacing Scale
- **None**: `p-0`, `m-0`
- **Extra Small**: `p-1`, `m-1` (4px)
- **Small**: `p-2`, `m-2` (8px)
- **Medium**: `p-4`, `m-4` (16px)
- **Large**: `p-6`, `m-6` (24px)
- **Extra Large**: `p-8`, `m-8` (32px)
- **Jumbo**: `p-12`, `m-12` (48px)
- **Massive**: `p-16`, `m-16` (64px)

### Responsive Breakpoints
- **Mobile**: `< 640px` (default)
- **Tablet**: `≥ 640px` (`sm:` prefix)
- **Laptop**: `≥ 768px` (`md:` prefix)
- **Desktop**: `≥ 1024px` (`lg:` prefix)
- **Large Desktop**: `≥ 1280px` (`xl:` prefix)

### Grid Systems
- **Standard Grid**: `grid-cols-1` (mobile) → `grid-cols-2` (tablet) → `grid-cols-3` (laptop) → `grid-cols-4` (desktop)
- **Feature Grid**: `grid-cols-1` → `grid-cols-2` for feature comparison
- **Stats Grid**: `grid-cols-2 sm:grid-cols-4` for even distribution

## 🧩 Component Library

### Buttons
```html
<!-- Primary CTA -->
<a className="px-8 py-4 rounded-xl bg-fd-violet hover:bg-fd-violet-light text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-fd-violet/25 hover:-translate-y-0.5">
  Start a Project
</a>

<!-- Secondary Button -->
<a className="px-8 py-4 rounded-xl border border-fd-border-2 hover:border-fd-violet/30 text-fd-text hover:text-white font-semibold text-base transition-all duration-300 hover:bg-white/5">
  Explore Services
</a>

<!-- Small Button -->
<button className="px-4 py-2 rounded-lg bg-fd-violet/20 hover:bg-fd-violet/30 text-fd-violet font-medium transition-colors">
  Learn More
</button>
```

### Cards
```html
<div className="bg-fd-surface border border-fd-border rounded-xl p-6 hover:border-fd-violet/30 transition-all duration-300 group">
  <div className="h-48 bg-gradient-to-br from-fd-violet/10 to-fd-cyan/10 rounded-lg mb-4 flex items-center justify-center">
    <span className="text-4xl">🚀</span>
  </div>
  <h3 className="text-xl font-bold mb-2">Service Name</h3>
  <p className="text-fd-text-2 mb-4">Service description text goes here.</p>
  <a href="#" className="text-fd-violet font-semibold hover:text-fd-violet-light transition-colors">Read more →</a>
</div>
```

### Navigation
```html
<!-- Desktop Navigation -->
<nav className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="text-sm text-fd-text-2 hover:text-fd-text transition-colors duration-200"
    >
      {link.label}
    </Link>
  ))}
</nav>

<!-- Mobile Navigation -->
<button className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Toggle menu">
  <div className="w-5 h-4 flex flex-col justify-between">
    <span className="block h-0.5 bg-fd-text rounded transition-all duration-300" />
    <span className="block h-0.5 bg-fd-text rounded transition-all duration-300" />
    <span className="block h-0.5 bg-fd-text rounded transition-all duration-300" />
  </div>
</button>
```

### Sections
```html
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-hero-glow" />
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fd-violet/5 rounded-full blur-3xl animate-pulse-slow" />
  <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fd-cyan/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
  
  {/* Grid Pattern */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
    backgroundSize: '60px 60px',
  }} />
  
  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fd-violet/20 bg-fd-violet/5 mb-8">
      <span className="w-2 h-2 rounded-full bg-fd-cyan animate-pulse" />
      <span className="text-sm text-fd-text-2">AI-Augmented Operations — South Africa</span>
    </div>
    
    {/* Headline */}
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
      We build<span className="text-gradient">intelligent systems</span>
      <br />
      that help businesses
      <br />
      <span className="text-gradient">operate smarter</span>
    </h1>
    
    {/* CTAs */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#contact" className="px-8 py-4 rounded-xl bg-fd-violet hover:bg-fd-violet-light text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-fd-violet/25 hover:-translate-y-0.5">
        Start a Project
      </a>
      <a href="#services" className="px-8 py-4 rounded-xl border border-fd-border-2 hover:border-fd-violet/30 text-fd-text hover:text-white font-semibold text-base transition-all duration-300 hover:bg-white/5">
        Explore Services
      </a>
    </div>
  </div>
</section>
```

## ✨ Visual Effects

### Glassmorphism
```css
.glass {
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
```

### Glow Effects
```css
.glow-violet {
  box-shadow: 0 0 40px rgba(139, 92, 246, 0.15), 0 0 80px rgba(139, 92, 246, 0.05);
}

.glow-cyan {
  box-shadow: 0 0 40px rgba(6, 182, 212, 0.15), 0 0 80px rgba(6, 182, 212, 0.05);
}
```

### Animations
```css
/* Keyframes defined in globals.css */
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

## 📱 Responsive Design

### Mobile-First Approach
- Base styles target mobile devices
- Use `sm:`, `md:`, `lg:`, `xl:` prefixes for larger screens
- Mobile styles are default, desktop styles are overrides

### Breakpoint Strategy
```css
/* Mobile (default) */
.text-base {
  font-size: 1rem;
  line-height: 1.5;
}

/* Tablet */
@media (min-width: 640px) {
  .sm\:text-lg {
    font-size: 1.125rem;
  }
}

/* Laptop */
@media (min-width: 768px) {
  .md\:text-xl {
    font-size: 1.25rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .lg\:text-2xl {
    font-size: 1.5rem;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .xl\:text-3xl {
    font-size: 1.875rem;
  }
}
```

### Touch-Friendly Design
- Minimum tap target size: 44×44 pixels
- Adequate spacing between clickable elements
- Swipe-friendly carousels and sliders
- Visual feedback on touch

## ♿ Accessibility

### Color Contrast
- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text (18pt+ or 14pt+ bold)
- Avoid color as the sole means of conveying information

### Semantic HTML
- Use proper heading hierarchy (`h1` → `h2` → `h3`)
- Landmark elements (`header`, `nav`, `main`, `section`, `footer`)
- ARIA landmarks where appropriate
- Skip navigation links for keyboard users

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Keyboard trap prevention

### Screen Reader Optimization
- Descriptive link text (avoid "click here")
- Alt text for meaningful images
- ARIA labels for complex components
- Live regions for dynamic content

## 🔍 SEO Best Practices

### Metadata
- Unique title tags for each page
- Descriptive meta descriptions
- Proper heading hierarchy
- Semantic HTML structure

### Performance
- Image optimization with `next/image`
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Efficient JavaScript execution

### Structured Data
- Schema.org markup for organization
- JSON-LD format for structured data
- Rich snippets for products/services
- FAQ and how-to markup where applicable

### Technical SEO
- XML sitemap generation
- Robots.txt configuration
- Canonical URL tags
- Hreflang tags for multilingual content
- Clean URL structure

## 🎯 Quality Assurance

### Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- iOS Safari, Chrome Mobile
- Last 2 versions of major browsers
- Graceful degradation for older browsers

### Device Testing
- Mobile (320px width)
- Tablet (768px width)
- Laptop (1024px width)
- Desktop (1440px width)
- Large Desktop (1920px width)

### Performance Metrics
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Time to Interactive < 3s

### Accessibility Testing
- WCAG 2.1 AA compliance
- Screen reader testing (NVDA, VoiceOver)
- Keyboard-only navigation
- Color contrast checkers

---

*This design system is maintained by the FarkusDynamics AI team and updated regularly to reflect evolving design standards and brand guidelines.*