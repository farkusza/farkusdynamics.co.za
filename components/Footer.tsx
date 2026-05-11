import Link from 'next/link';
import { Github, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'AI & Machine Learning', href: '#services' },
    { label: 'Data Analytics', href: '#services' },
    { label: 'Process Automation', href: '#services' },
    { label: 'Cloud Infrastructure', href: '#services' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-fd-border bg-fd-surface/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/images/fd-logo.png"
                alt="FarkusDynamics"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-lg font-semibold">
                Farkus<span className="text-gradient">Dynamics</span>
              </span>
            </Link>
            <p className="text-sm text-fd-text-2 leading-relaxed mb-6">
              AI-augmented operations for modern businesses. Based in South Africa, serving clients globally.
            </p>
            <div className="flex items-center gap-3">
              <a href="mailto:hello@farkusdynamics.co.za" className="w-9 h-9 rounded-lg border border-fd-border hover:border-fd-violet/30 flex items-center justify-center text-fd-text-2 hover:text-fd-violet transition-colors">
                <Mail size={16} />
              </a>
              <a href="https://github.com/farkusza" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-fd-border hover:border-fd-violet/30 flex items-center justify-center text-fd-text-2 hover:text-fd-violet transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-fd-text mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-fd-text-2 hover:text-fd-text transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-fd-text mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-fd-text-2 hover:text-fd-text transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-fd-text mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-fd-text-2">
              <li>
                <a href="mailto:hello@farkusdynamics.co.za" className="hover:text-fd-violet transition-colors">
                  hello@farkusdynamics.co.za
                </a>
              </li>
              <li>South Africa</li>
              <li>Remote-First</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-fd-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-fd-text-3">
            © {new Date().getFullYear()} FarkusDynamics. All rights reserved.
          </p>
          <p className="text-sm text-fd-text-3">
            Designed & built with <span className="text-fd-violet">🧠</span> in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
