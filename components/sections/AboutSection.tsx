'use client';

import { useEffect, useRef, useState } from 'react';

const values = [
  {
    title: 'Build with Purpose',
    description: 'Every line of code serves a business outcome. We don\'t build technology for technology\'s sake — we solve real problems.',
  },
  {
    title: 'Relentless Quality',
    description: 'From architecture to UI, we hold ourselves to the highest standards. Clean code, thoughtful design, thorough testing.',
  },
  {
    title: 'Transparent Partnership',
    description: 'No black boxes. We communicate clearly, deliver on time, and treat your business goals as our own.',
  },
  {
    title: 'Future-Ready',
    description: 'We build systems that scale. Today\'s solution is designed to grow with your business tomorrow.',
  },
];

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-sm font-medium text-fd-cyan tracking-wider uppercase mb-4 block">Who We Are</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Engineering excellence
              <br />
              <span className="text-gradient">meets business strategy</span>
            </h2>
            <p className="text-lg text-fd-text-2 leading-relaxed mb-8">
              FarkusDynamics is a South African technology company focused on building
              intelligent systems that help businesses operate more efficiently. We combine
              expertise in AI, data analytics, and cloud infrastructure to deliver solutions
              that create real, measurable value.
            </p>
            <p className="text-fd-text-2 leading-relaxed">
              Whether you&apos;re a startup looking to automate your operations or an
              enterprise seeking data-driven insights, we bring the technical depth and
              strategic thinking to make it happen.
            </p>
          </div>

          {/* Right — Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`p-6 rounded-2xl border border-fd-border bg-fd-surface/30 hover:border-fd-cyan/20 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="w-8 h-0.5 bg-gradient-to-r from-fd-violet to-fd-cyan rounded-full mb-4" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-fd-text-2 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
