'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* SVG Logo — using path data inline for color control */}
          <div className="w-9 h-9 flex items-center justify-center text-fd-violet group-hover:text-fd-violet-light transition-colors duration-300">
            <svg viewBox="-1.1 -1.1 2.2 2.2" width="36" height="36" fill="currentColor">
              <path d="M -0.176 -0.327 L -0.234 -0.323 L -0.248 -0.320 L -0.250 -0.316 L -0.254 -0.312 L -0.257 -0.309 L -0.261 -0.305 L -0.265 -0.302 L -0.268 -0.298 L -0.270 -0.294 L -0.275 -0.291 L -0.279 -0.287 L -0.283 -0.283 L -0.284 -0.280 L -0.290 -0.276 L -0.292 -0.273 L -0.295 -0.269 L -0.299 -0.265 L -0.302 -0.262 L -0.306 -0.258 L -0.310 -0.255 L -0.313 -0.251 L -0.317 -0.247 L -0.320 -0.244 L -0.324 -0.240 L -0.328 -0.237 L -0.331 -0.233 L -0.335 -0.229 L -0.339 -0.226 L -0.340 -0.222 L -0.344 -0.218 L -0.348 -0.215 L -0.351 -0.211 L -0.355 -0.208 L -0.358 -0.204 L -0.362 -0.200 L -0.366 -0.197 L -0.369 -0.193 L -0.373 -0.190 L -0.376 -0.186 L -0.380 -0.182 L -0.384 -0.179 L -0.387 -0.175 L -0.387 -0.172 L -0.387 -0.168 L -0.387 -0.164 L -0.387 -0.161 L -0.387 -0.157 L -0.387 -0.153 L -0.387 -0.150 L -0.387 -0.146 L -0.387 -0.143 L -0.387 -0.139 L -0.387 -0.135 L -0.387 -0.132 L -0.387 -0.128 L -0.387 -0.125 L -0.387 -0.121 L -0.387 -0.117 L -0.387 -0.114 L -0.387 -0.110 L -0.387 -0.107 L -0.387 -0.103 L -0.387 -0.099 L -0.387 -0.096 L -0.387 -0.092 L -0.387 -0.088 L -0.387 -0.085 L -0.387 -0.081 L -0.387 -0.078 L -0.389 -0.074 L -0.387 -0.070 L -0.387 -0.067 L -0.389 -0.063 L -0.389 -0.060 L -0.389 -0.056 L -0.389 -0.052 L -0.328 -0.049 L -0.331 -0.045 L -0.335 -0.042 L -0.339 -0.038 L -0.342 -0.034 L -0.344 -0.031 L -0.348 -0.027 L -0.351 -0.023 L -0.355 -0.020 L -0.358 -0.016 L -0.362 -0.013 L -0.364 -0.009 L -0.367 -0.005 L -0.371 -0.002 L -0.375 0.002 L -0.378 0.005 L -0.380 0.009 L -0.384 0.013 L -0.387 0.016 L -0.389 0.020 L -0.387 0.023 L -0.387 0.027 L -0.387 0.031 L -0.387 0.034 L -0.387 0.038 L -0.387 0.042 L -0.387 0.045 L -0.387 0.049 L -0.387 0.052 L -0.387 0.056 L -0.387 0.060 L -0.387 0.063 L -0.387 0.067 L -0.387 0.070 L -0.387 0.074 L -0.387 0.078 L -0.387 0.081 L -0.387 0.085 L -0.387 0.088 L -0.387 0.092 L -0.387 0.096 L -0.387 0.099 L -0.387 0.103 L -0.387 0.107 L -0.387 0.110 L -0.387 0.114 L -0.387 0.117 L -0.387 0.121 L -0.387 0.125 L -0.387 0.128 L -0.387 0.132 L -0.909 0.240 L -0.909 0.244 L -0.909 0.247 L -0.909 0.251 L -0.909 0.255 L -0.909 0.258 L -0.909 0.262 L -0.909 0.265 L -0.909 0.269 L -0.909 0.273 L -0.909 0.276 L -0.909 0.280 L -0.909 0.283 L -0.909 0.287 L -0.909 0.291 L -0.909 0.294 L -0.909 0.298 L -0.909 0.302 L -0.909 0.305 L -0.909 0.309 L -0.909 0.312 L -0.909 0.316 L -0.909 0.320 L -0.909 0.323 L -0.909 0.327 L 0.893 0.327 L 0.900 0.323 L 0.904 0.320 L 0.905 0.316 L 0.907 0.312 L 0.909 0.309 L 0.909 0.305 L 0.909 0.302 L 0.909 0.298 L 0.907 0.294 L 0.907 0.291 L 0.905 0.287 L 0.902 0.283 L 0.898 0.280 L 0.891 0.276 L 0.828 0.273 L 0.821 0.269 L 0.821 0.265 L 0.821 0.262 L 0.822 0.258 L 0.824 0.255 L 0.904 0.251 L 0.904 0.247 L 0.904 0.244 L 0.904 0.240 L -0.387 0.132 L -0.385 0.128 L -0.382 0.125 L -0.380 0.121 L 0.286 0.117 L 0.304 0.114 L 0.319 0.110 L 0.330 0.107 L 0.339 0.103 L 0.348 0.099 L 0.355 0.096 L 0.362 0.092 L 0.367 0.088 L 0.373 0.085 L 0.378 0.081 L 0.384 0.078 L 0.387 0.074 L 0.393 0.070 L 0.396 0.067 L 0.400 0.063 L 0.404 0.060 L 0.407 0.056 L 0.411 0.052 L 0.414 0.049 L 0.418 0.045 L 0.422 0.042 L 0.425 0.038 L 0.427 0.034 L 0.429 0.031 L 0.432 0.027 L 0.434 0.023 L 0.436 0.020 L 0.438 0.016 L 0.440 0.013 L 0.441 0.009 L 0.441 0.005 L 0.443 0.002 L 0.445 -0.002 L 0.447 -0.005 L 0.447 -0.009 L 0.449 -0.013 L 0.450 -0.016 L 0.450 -0.020 L 0.450 -0.023 L 0.452 -0.027 L 0.452 -0.031 L 0.454 -0.034 L 0.454 -0.038 L 0.454 -0.042 L 0.454 -0.045 L 0.454 -0.049 L 0.454 -0.052 L 0.454 -0.056 L 0.454 -0.060 L 0.454 -0.063 L 0.454 -0.067 L 0.454 -0.070 L 0.454 -0.074 L 0.454 -0.078 L 0.454 -0.081 L 0.454 -0.085 L 0.452 -0.088 L 0.452 -0.092 L 0.450 -0.096 L 0.450 -0.099 L 0.449 -0.103 L 0.449 -0.107 L 0.447 -0.110 L 0.445 -0.114 L 0.445 -0.117 L 0.443 -0.121 L 0.441 -0.125 L 0.440 -0.128 L 0.438 -0.132 L 0.436 -0.135 L 0.434 -0.139 L 0.432 -0.143 L 0.431 -0.146 L 0.427 -0.150 L 0.425 -0.153 L 0.422 -0.157 L 0.420 -0.161 L 0.416 -0.164 L 0.414 -0.168 L 0.411 -0.172 L 0.407 -0.175 L 0.404 -0.179 L 0.400 -0.182 L 0.396 -0.186 L 0.391 -0.190 L 0.385 -0.193 L 0.382 -0.197 L 0.376 -0.200 L 0.369 -0.204 L 0.364 -0.208 L 0.357 -0.211 L 0.349 -0.215 L 0.339 -0.218 L 0.324 -0.222 L 0.311 -0.226 L -0.225 -0.229 L -0.221 -0.233 L -0.219 -0.237 L -0.216 -0.240 L -0.212 -0.244 L -0.209 -0.247 L -0.207 -0.251 L 0.140 -0.255 L 0.144 -0.258 L 0.147 -0.262 L 0.149 -0.265 L 0.153 -0.269 L 0.156 -0.273 L 0.160 -0.276 L 0.163 -0.280 L 0.167 -0.283 L 0.171 -0.287 L 0.174 -0.291 L 0.178 -0.294 L 0.181 -0.298 L 0.185 -0.302 L 0.189 -0.305 L 0.192 -0.309 L 0.196 -0.312 L 0.198 -0.316 L 0.201 -0.320 L 0.075 -0.323 L 0.073 -0.327 Z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight hidden sm:inline">
            Farkus<span className="text-gradient">Dynamics</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-fd-text-2 hover:text-fd-text transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-fd-violet after:to-fd-cyan after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-sm px-5 py-2.5 rounded-lg bg-fd-violet hover:bg-fd-violet-light text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fd-violet/25 hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-fd-text-2 hover:text-fd-text hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 text-center py-3 px-4 rounded-lg bg-fd-violet hover:bg-fd-violet-light text-white font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
