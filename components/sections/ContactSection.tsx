'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-sm font-medium text-fd-violet tracking-wider uppercase mb-4 block">Get in Touch</span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s build
              <br />
              <span className="text-gradient">something great</span>
            </h2>
            <p className="text-lg text-fd-text-2 leading-relaxed mb-10">
              Have a project in mind? We&apos;d love to hear about it. Drop us a message
              and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-fd-violet/10 flex items-center justify-center">
                  <Mail size={18} className="text-fd-violet" />
                </div>
                <div>
                  <div className="text-sm text-fd-text-3">Email</div>
                  <a href="mailto:hello@farkusdynamics.co.za" className="text-fd-text hover:text-fd-violet transition-colors">
                    hello@farkusdynamics.co.za
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-fd-cyan/10 flex items-center justify-center">
                  <MapPin size={18} className="text-fd-cyan" />
                </div>
                <div>
                  <div className="text-sm text-fd-text-3">Location</div>
                  <span className="text-fd-text">South Africa (Remote-First)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {submitted ? (
              <div className="h-full flex items-center justify-center p-12 rounded-2xl border border-fd-border bg-fd-surface/50">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Message Sent!</h3>
                  <p className="text-fd-text-2">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl border border-fd-border bg-fd-surface/50 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-fd-text-2 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-fd-primary border border-fd-border text-fd-text placeholder-fd-text-3 focus:outline-none focus:border-fd-violet/50 focus:ring-1 focus:ring-fd-violet/25 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-fd-text-2 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-fd-primary border border-fd-border text-fd-text placeholder-fd-text-3 focus:outline-none focus:border-fd-violet/50 focus:ring-1 focus:ring-fd-violet/25 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-fd-text-2 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-fd-primary border border-fd-border text-fd-text placeholder-fd-text-3 focus:outline-none focus:border-fd-violet/50 focus:ring-1 focus:ring-fd-violet/25 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-fd-violet hover:bg-fd-violet-light text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-fd-violet/25"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
