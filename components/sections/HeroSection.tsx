'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '100%', label: 'Client Focus', desc: 'Every project is bespoke' },
  { value: '24/7', label: 'System Uptime', desc: 'Always-on infrastructure' },
  { value: 'AI', label: 'Powered', desc: 'Intelligent by design' },
  { value: 'ZA', label: 'Proudly South African', desc: 'Cape Town-based' },
];

const taglines = [
  'intelligent automation',
  'AI-powered analytics',
  'smart infrastructure',
  'future-ready systems',
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineVisible, setTaglineVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Rotating tagline
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineVisible(false);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setTaglineVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fd-violet/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fd-cyan/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-fd-violet/3 rounded-full blur-3xl animate-float" />

      {/* Floating Logo Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-[0.04] animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          >
            <img
              src="/images/fd-logo.png"
              alt=""
              width={60 + i * 20}
              height={60 + i * 20}
              className="object-contain"
            />
          </div>
        ))}
      </div>

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

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 animate-float" style={{ animationDuration: '4s' }}>
            <img
              src="/images/fd-logo.png"
              alt="FarkusDynamics"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
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

        {/* Rotating Tagline */}
        <div className="h-10 mb-8">
          <span
            className={`inline-block text-lg sm:text-xl text-fd-cyan font-medium transition-all duration-500 ${
              taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {taglines[taglineIndex]}
          </span>
        </div>

        {/* Subtitle */}
        <p className={`text-lg sm:text-xl text-fd-text-2 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          From AI-powered analytics to custom automation, we craft technology
          solutions that transform how modern businesses work — making operations
          <span className="text-fd-text font-medium"> faster, smarter, and more efficient.</span>
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl bg-fd-violet hover:bg-fd-violet-light text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-fd-violet/25 hover:-translate-y-0.5"
          >
            Start a Project
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-fd-border-2 hover:border-fd-violet/30 text-fd-text hover:text-white font-semibold text-base transition-all duration-300 hover:bg-white/5"
          >
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div className={`mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center group cursor-default" style={{ transitionDelay: `${i * 100 + 700}ms` }}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-sm font-medium text-fd-text-2 mb-0.5">{stat.label}</div>
              <div className="text-xs text-fd-text-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{stat.desc}</div>
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
