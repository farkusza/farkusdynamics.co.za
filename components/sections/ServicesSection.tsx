'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, BarChart3, Shield, Zap, Brain, Server } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions — from intelligent chatbots to predictive analytics — tailored to your business needs.',
    gradient: 'from-fd-violet to-fd-violet-dark',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    description: 'Transform raw data into actionable insights with dashboards, reporting, and real-time analytics pipelines.',
    gradient: 'from-fd-cyan to-blue-500',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Eliminate repetitive tasks with intelligent automation that streamlines workflows and boosts productivity.',
    gradient: 'from-fd-violet-light to-fd-cyan',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Build secure systems from the ground up with modern security practices and regulatory compliance built in.',
    gradient: 'from-emerald-500 to-fd-cyan',
  },
  {
    icon: Brain,
    title: 'Discord & Community Bots',
    description: 'Engage your community with feature-rich Discord bots — analytics, moderation, and custom integrations.',
    gradient: 'from-fd-violet to-pink-500',
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    description: 'Scalable, reliable cloud architecture on Hetzner, AWS, or Vercel — optimized for performance and cost.',
    gradient: 'from-fd-cyan to-fd-violet',
  },
];

export default function ServicesSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fd-violet/3 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-medium text-fd-violet tracking-wider uppercase mb-4 block">What We Do</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Services that{' '}
            <span className="text-gradient">drive results</span>
          </h2>
          <p className="text-lg text-fd-text-2 max-w-2xl mx-auto">
            We combine deep technical expertise with strategic thinking to deliver
            solutions that make a measurable impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative p-8 rounded-2xl border border-fd-border bg-fd-surface/50 hover:bg-fd-surface hover:border-fd-violet/20 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-fd-violet-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-fd-text-2 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fd-violet/5 to-fd-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
