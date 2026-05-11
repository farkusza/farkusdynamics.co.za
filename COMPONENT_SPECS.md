# FarkusDynamics Component Specifications

*Detailed technical documentation for each React component in the FarkusDynamics website. This guide provides specifications, props, state management, and implementation details for AI agents working on the project.*

## 📋 Component Overview

### Core Components
1. **Navbar** - Primary navigation header
2. **HeroSection** - Main landing page hero banner
3. **ServicesSection** - Services overview
4. **AboutSection** - Company information
5. **WorkSection** - Portfolio showcase
6. **ContactSection** - Contact form and information
7. **Footer** - Page footer

## 🔧 Navbar Component

### Location
`components/Navbar.tsx`

### Purpose
Primary navigation header that provides site navigation and branding. Features sticky positioning, glassmorphism effect on scroll, and mobile responsiveness.

### Props
```typescript
interface NavbarProps {
  // No props - component manages its own state
}
```

### State Management
```typescript
const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);
```

### Effects & Event Listeners
```typescript
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Structure
```typescript
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
    {/* Logo */}
    <Link href="/" className="flex items-center gap-3 group">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fd-violet to-fd-cyan flex items-center justify-center font-bold text-white text-sm group-hover:shadow-lg group-hover:shadow-fd-violet/25 transition-shadow">
        FD
      </div>
      <span className="text-lg font-semibold tracking-tight">
        Farkus<span className="text-gradient">Dynamics</span>
      </span>
    </Link>
    
    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className="text-sm text-fd-text-2 hover:text-fd-text transition-colors duration-200">
          {link.label}
        </Link>
      ))}
      <Link href="#contact" className="text-sm px-5 py-2.5 rounded-lg bg-fd-violet hover:bg-fd-violet-light text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-fd-violet/25">
        Get in Touch
      </Link>
    </div>
    
    {/* Mobile Toggle */}
    <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Toggle menu">
      <div className="w-5 h-4 flex flex-col justify-between">
        <span className={`block h-0.5 bg-fd-text rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block h-0.5 bg-fd-text rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 bg-fd-text rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </div>
    </button>
  </div>
  
  {/* Mobile Menu */}
  {mobileOpen && (
    <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 animate-fade-in">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 px-4 text-fd-text-2 hover:text-fd-text hover:bg-white/5 rounded-lg transition-colors">
          {link.label}
        </Link>
      ))}
      <Link href="#contact" onClick={() => setMobileOpen(false)} className="block mt-2 text-center py-3 px-4 rounded-lg bg-fd-violet hover:bg-fd-violet-light text-white font-medium transition-colors">
        Get in Touch
      </Link>
    </div>
  )}
</nav>
```

### Key Features
- **Sticky Navigation**: Becomes sticky on scroll
- **Glassmorphism**: `bg-opacity-60 backdrop-blur-md border-white/10` on scroll
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Smooth Transitions**: All interactive elements have smooth transitions

## 🚀 HeroSection Component

### Location
`components/sections/HeroSection.tsx`

### Purpose
Main hero banner that creates a strong first impression with animated background effects, gradient text, and clear CTAs.

### Props
```typescript
interface HeroSectionProps {
  // No props - self-contained component
}
```

### State Management
```typescript
const [visible, setVisible] = useState(false);
const sectionRef = useRef<HTMLElement>(null);
```

### Effects
```typescript
useEffect(() => {
  const timer = setTimeout(() => setVisible(true), 100);
  return () => clearTimeout(timer);
}, []);
```

### Structure
```typescript
<section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
  <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fd-violet/20 bg-fd-violet/5 mb-8">
      <span className="w-2 h-2 rounded-full bg-fd-cyan animate-pulse" />
      <span className="text-sm text-fd-text-2">AI-Augmented Operations — South Africa</span>
    </div>
    
    {/* Headline */}
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
      We build{' '}
      <span className="text-gradient">intelligent systems</span>
      <br />
      that help businesses
      <br />
      <span className="text-gradient">operate smarter</span>
    </h1>
    
    {/* Subtitle */}
    <p className="text-lg sm:text-xl text-fd-text-2 max-w-2xl mx-auto mb-10 leading-relaxed">
      From AI-powered analytics to custom automation, we craft technology
      solutions that transform how modern businesses work — making operations
      faster, smarter, and more efficient.
    </p>
    
    {/* CTAs */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#contact" className="px-8 py-4 rounded-xl bg-fd-violet hover:bg-fd-violet-light text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-fd-violet/25 hover:-translate-y-0.5">
        Start a Project
      </a>
      <a href="#services" className="px-8 py-4 rounded-xl border border-fd-border-2 hover:border-fd-violet/30 text-fd-text hover:text-white font-semibold text-base transition-all duration-300 hover:bg-white/5">
        Explore Services
      </a>
    </div>
    
    {/* Stats */}
    <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
      {[
        { value: '100%', label: 'Client Focus' },
        { value: '24/7', label: 'System Uptime' },
        { value: 'AI', label: 'Powered' },
        { value: 'ZA', label: 'Based' },
      ].map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
          <div className="text-sm text-fd-text-3">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
  
  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 rounded-full border-2 border-fd-border-2 flex items-start justify-center p-1.5">
      <div className="w-1.5 h-3 rounded-full bg-fd-violet animate-pulse" />
    </div>
  </div>
</section>
```

### Key Features
- **Full-Screen Layout**: `min-h-screen` for complete viewport coverage
- **Animated Background**: Multiple gradient orbs with pulse animations
- **Grid Pattern**: Subtle grid overlay for texture
- **Entry Animation**: Fade-in and slide-up effect on load
- **Gradient Text**: Key phrases use gradient text effect
- **Stats Grid**: Animated statistics at bottom

## 📋 ServicesSection Component

### Location
`components/sections/ServicesSection.tsx`

### Purpose
Displays the services offered by FarkusDynamics with icons, descriptions, and hover effects.

### Props
```typescript
interface ServicesSectionProps {
  // No props - self-contained component
}
```

### Structure
```typescript
<section id="services" className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gradient">Our Services</h2>
      <p className="text-lg text-fd-text-2 max-w-2xl mx-auto">
        Comprehensive AI and automation solutions tailored to your business needs.
      </p>
    </div>
    
    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.id} className="bg-fd-surface border border-fd-border rounded-xl p-6 hover:border-fd-violet/30 transition-all duration-300 group">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-fd-violet/20 to-fd-cyan/20 flex items-center justify-center mb-6 group-hover:from-fd-violet/30 group-hover:to-fd-cyan/30 transition-all">
            <span className="text-2xl">{service.icon}</span>
          </div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-fd-text-2 mb-4">{service.description}</p>
          <a href="#" className="inline-flex items-center text-fd-violet font-semibold hover:text-fd-violet-light transition-colors">
            Learn more <span className="ml-2">→</span>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Key Features
- **3-Column Grid**: Responsive layout (1 col mobile, 2 tablet, 3 desktop)
- **Hover Effects**: Card borders change color on hover
- **Gradient Icons**: Circular gradient backgrounds for service icons
- **Smooth Transitions**: All hover states have smooth transitions

## 🏢 AboutSection Component

### Location
`components/sections/AboutSection.tsx`

### Purpose
Provides information about FarkusDynamics, including company mission, history, and team information.

### Props
```typescript
interface AboutSectionProps {
  // No props - self-contained component
}
```

### Structure
```typescript
<section id="about" className="py-24 bg-fd-surface-2">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left Column: Text Content */}
      <div>
        <h2 className="text-4xl font-bold mb-6 text-gradient">About FarkusDynamics</h2>
        <p className="text-lg text-fd-text-2 mb-6 leading-relaxed">
          Founded in 2024, FarkusDynamics is a South African technology company specializing in AI-powered automation and business intelligence solutions. We help businesses operate smarter, faster, and more efficiently through intelligent technology.
        </p>
        <p className="text-lg text-fd-text-2 leading-relaxed">
          Our team of expert engineers and data scientists work closely with clients to understand their unique challenges and develop custom solutions that drive real business results.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-sm text-fd-text-3">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">12</div>
            <div className="text-sm text-fd-text-3">Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">99%</div>
            <div className="text-sm text-fd-text-3">Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Right Column: Visual/Timeline */}
      <div>
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-fd-border-2"></div>
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative mb-8 pl-12">
              <div className="absolute -left-1 top-0 w-3 h-3 rounded-full bg-fd-violet"></div>
              <h4 className="text-xl font-bold mb-2">{event.year}</h4>
              <p className="text-fd-text-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
```

### Key Features
- **Two-Column Layout**: Text on left, visual/timeline on right (desktop)
- **Timeline Visualization**: Vertical timeline with milestone events
- **Statistics Display**: Key company metrics in grid format
- **Background Contrast**: Uses `bg-fd-surface-2` for visual separation

## 💼 WorkSection Component

### Location
`components/sections/WorkSection.tsx`

### Purpose
Showcases FarkusDynamics' portfolio of work with project highlights, case studies, and testimonials.

### Props
```typescript
interface WorkSectionProps {
  // No props - self-contained component
}
```

### Structure
```typescript
<section id="work" className="py-24">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gradient">Selected Work</h2>
      <p className="text-lg text-fd-text-2 max-w-2xl mx-auto">
        Explore our portfolio of innovative AI and automation solutions.
      </p>
    </div>
    
    {/* Project Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="group">
          <div className="bg-fd-surface rounded-lg overflow-hidden mb-4">
            <div className="aspect-video bg-gradient-to-br from-fd-violet/20 to-fd-cyan/20 flex items-center justify-center">
              <span className="text-4xl">📊</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-fd-violet transition-colors">{project.title}</h3>
          <p className="text-fd-text-2 mb-3">{project.description}</p>
          <div className="flex items-center text-sm text-fd-text-3">
            <span className="bg-fd-border-2 px-3 py-1 rounded-full mr-2">{project.category}</span>
            <span>{project.year}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Key Features
- **3-Column Project Grid**: Responsive portfolio display
- **Category Tags**: Visual categorization of projects
- **Hover Effects**: Project titles change color on hover
- **Aspect Ratio**: Consistent video/placeholder aspect ratio

## 📞 ContactSection Component

### Location
`components/sections/ContactSection.tsx`

### Purpose
Provides contact information and a form for potential clients to get in touch.

### Props
```typescript
interface ContactSectionProps {
  // No props - self-contained component
}
```

### Structure
```typescript
<section id="contact" className="py-24 bg-fd-surface-2">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
      <p className="text-lg text-fd-text-2">
        Ready to transform your business with AI? Contact us today to discuss your project.
      </p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-fd-text-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-fd-primary border border-fd-border-2 focus:border-fd-violet focus:ring-2 focus:ring-fd-violet/20 outline-none transition-all" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-fd-text-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-fd-primary border border-fd-border-2 focus:border-fd-violet focus:ring-2 focus:ring-fd-violet/20 outline-none transition-all" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-fd-text-2">Message</label>
            <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg bg-fd-primary border border-fd-border-2 focus:border-fd-violet focus:ring-2 focus:ring-fd-violet/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
          </div>
          <button type="submit" className="w-full md:w-auto px-8 py-4 rounded-xl bg-fd-violet hover:bg-fd-violet-light text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-fd-violet/25">
            Send Message
          </button>
        </form>
      </div>
      
      {/* Contact Info */}
      <div>
        <div className="bg-fd-primary rounded-xl p-8 border border-fd-border-2">
          <h3 className="text-xl font-bold mb-6 text-gradient">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fd-violet/20 to-fd-cyan/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-fd-text-2">Cape Town, South Africa</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fd-violet/20 to-fd-cyan/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">✉️</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-fd-text-2">hello@farkusdynamics.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fd-violet/20 to-fd-cyan/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📞</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-fd-text-2">+27 21 123 4567</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Office Hours */}
        <div className="mt-8 p-6 rounded-xl border border-fd-border-2 bg-fd-surface">
          <h4 className="font-semibold mb-3">Office Hours</h4>
          <div className="space-y-2 text-fd-text-2">
            <div className="flex justify-between">
              <span>Monday-Friday</span>
              <span>8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>9:00 AM - 1:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Key Features
- **Two-Column Layout**: Form on left, contact info on right (desktop)
- **Form Validation**: Visual feedback on focus states
- **Contact Cards**: Icon-based contact information
- **Office Hours**: Clear display of availability

## 👣 Footer Component

### Location
`components/Footer.tsx`

### Purpose
Page footer with copyright information, navigation links, and social media icons.

### Props
```typescript
interface FooterProps {
  // No props - self-contained component
}
```

### Structure
```typescript
<footer className="py-12 bg-fd-surface-2 border-t border-fd-border">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-6 md:mb-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fd-violet to-fd-cyan flex items-center justify-center font-bold text-white text-sm">
          FD
        </div>
        <span className="text-lg font-semibold tracking-tight">
          Farkus<span className="text-gradient">Dynamics</span>
        </span>
      </div>
      
      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
        <Link href="#home" className="text-fd-text-2 hover:text-fd-text transition-colors">Home</Link>
        <Link href="#services" className="text-fd-text-2 hover:text-fd-text transition-colors">Services</Link>
        <Link href="#about" className="text-fd-text-2 hover:text-fd-text transition-colors">About</Link>
        <Link href="#work" className="text-fd-text-2 hover:text-fd-text transition-colors">Work</Link>
        <Link href="#contact" className="text-fd-text-2 hover:text-fd-text transition-colors">Contact</Link>
      </div>
      
      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="#" className="w-10 h-10 rounded-full bg-fd-border-2 flex items-center justify-center hover:bg-fd-violet hover:text-white transition-all">
          <span className="text-lg">🐦</span>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-fd-border-2 flex items-center justify-center hover:bg-fd-violet hover:text-white transition-all">
          <span className="text-lg">🔗</span>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-fd-border-2 flex items-center justify-center hover:bg-fd-violet hover:text-white transition-all">
          <span className="text-lg">📸</span>
        </a>
      </div>
    </div>
    
    {/* Copyright */}
    <div className="text-center text-fd-text-3 mt-8 pt-8 border-t border-fd-border-2">
      <p>© 2024 FarkusDynamics. All rights reserved. | <Link href="/privacy" className="hover:text-fd-text">Privacy Policy</Link> | <Link href="/terms" className="hover:text-fd-text">Terms of Service</Link></p>
    </div>
  </div>
</footer>
```

### Key Features
- **Three-Column Layout**: Logo/links, navigation, social icons (desktop)
- **Social Icons**: Circular hoverable social media links
- **Copyright Info**: Legal links and copyright notice
- **Responsive**: Stack columns on mobile

## 🔄 Component Interactions

### Navigation Flow
1. **Navbar** provides navigation links to page sections
2. **Smooth scrolling** to section IDs (`#services`, `#about`, etc.)
3. **Active state highlighting** based on scroll position (optional enhancement)

### Page Flow
1. **HeroSection** creates first impression
2. **ServicesSection** explains offerings
3. **AboutSection** builds credibility
4. **WorkSection** showcases results
5. **ContactSection** drives conversions

### State Management Patterns
- **Local state**: Each component manages its own state
- **Scroll effects**: `useState` + `useEffect` for scroll-based animations
- **Entry animations**: `setTimeout` for staggered animations
- **Responsive design**: CSS media queries via Tailwind

## 🧪 Testing Guidelines

### Component Testing
- **Snapshot testing**: Ensure component structure remains consistent
- **Unit tests**: Test individual component functionality
- **Integration tests**: Test component interactions

### Visual Regression
- Compare component renders across changes
- Ensure design consistency
- Catch unintended styling changes

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation
- Color contrast ratios
- ARIA attribute usage

## 📝 Implementation Notes

### Performance Considerations
- **Memoization**: Use `React.memo` for expensive components
- **Code splitting**: Lazy load non-critical components
- **Image optimization**: Use `next/image` for automatic optimization
- **Bundle analysis**: Monitor bundle size with `webpack-bundle-analyzer`

### SEO Best Practices
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Meta tags**: Unique titles and descriptions
- **Structured data**: Schema.org markup where appropriate
- **Sitemap**: Auto-generated XML sitemap

### Accessibility Standards
- **WCAG 2.1 AA**: Target compliance level
- **Screen readers**: Test with NVDA, VoiceOver, JAWS
- **Keyboard navigation**: Full tab navigation support
- **Color contrast**: Minimum 4.5:1 for normal text

### Mobile-First Design
- **Base styles**: Target mobile devices first
- **Progressive enhancement**: Add features for larger screens
- **Touch targets**: Minimum 44×44px for interactive elements
- **Performance**: Optimize for mobile network conditions

---

*This component specification document is maintained by the FarkusDynamics AI team and updated as the project evolves.*