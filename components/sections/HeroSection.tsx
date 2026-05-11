'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fd-violet/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fd-cyan/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

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
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-fd-violet hover:bg-fd-violet-light text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-fd-violet/25 hover:-translate-y-0.5"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-fd-border-2 hover:border-fd-violet/30 text-fd-text hover:text-white font-semibold text-base transition-all duration-300 hover:bg-white/5"
          >
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
  );
}
