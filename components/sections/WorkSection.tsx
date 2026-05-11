'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'FD-DAB',
    subtitle: 'Discord Analytics Bot',
    description: 'A comprehensive Discord bot providing server analytics, user tracking, and moderation tools. Built with Python and discord.py, featuring real-time dashboards and automated reporting.',
    tags: ['Python', 'Discord.py', 'PostgreSQL', 'Docker'],
    status: 'Live',
    color: 'from-fd-violet to-fd-violet-dark',
  },
  {
    title: 'FDDash',
    subtitle: 'Operations Dashboard',
    description: 'A real-time operations dashboard for monitoring services, tracking KPIs, and managing infrastructure. Built with React, Node.js, and WebSocket for live updates.',
    tags: ['React', 'Node.js', 'WebSocket', 'Tailwind'],
    status: 'Live',
    color: 'from-fd-cyan to-blue-500',
  },
  {
    title: 'Prometheus AI',
    subtitle: 'AI Agent Platform',
    description: 'An autonomous AI agent system capable of research, code generation, and task orchestration. Integrates with multiple LLM providers and tools.',
    tags: ['AI/LLM', 'Python', 'Automation', 'MCP'],
    status: 'In Development',
    color: 'from-fd-violet-light to-fd-cyan',
  },
];

export default function WorkSection() {
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
    <section id="work" ref={sectionRef} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fd-cyan/3 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-medium text-fd-violet tracking-wider uppercase mb-4 block">Our Work</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Built to{' '}
            <span className="text-gradient">perform</span>
          </h2>
          <p className="text-lg text-fd-text-2 max-w-2xl mx-auto">
            A selection of projects that showcase our approach to building
            robust, intelligent systems.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative p-8 sm:p-10 rounded-2xl border border-fd-border bg-fd-surface/50 hover:bg-fd-surface hover:border-fd-violet/20 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Project Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {project.title.charAt(0)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      project.status === 'Live'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-fd-violet/10 text-fd-violet-light border border-fd-violet/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-fd-cyan mb-3">{project.subtitle}</p>
                  <p className="text-fd-text-2 leading-relaxed mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-fd-surface-2 text-fd-text-2 border border-fd-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fd-violet/5 to-fd-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
