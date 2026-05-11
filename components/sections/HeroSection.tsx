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
            <svg viewBox="-1.1 -1.1 2.2 2.2" width={60 + i * 20} height={60 + i * 20} fill="currentColor" className="text-fd-violet">
              <path d="M -0.176 -0.327 L -0.234 -0.323 L -0.248 -0.320 L -0.250 -0.316 L -0.254 -0.312 L -0.257 -0.309 L -0.261 -0.305 L -0.265 -0.302 L -0.268 -0.298 L -0.270 -0.294 L -0.275 -0.291 L -0.279 -0.287 L -0.283 -0.283 L -0.284 -0.280 L -0.290 -0.276 L -0.292 -0.273 L -0.295 -0.269 L -0.299 -0.265 L -0.302 -0.262 L -0.306 -0.258 L -0.310 -0.255 L -0.313 -0.251 L -0.317 -0.247 L -0.320 -0.244 L -0.324 -0.240 L -0.328 -0.237 L -0.331 -0.233 L -0.335 -0.229 L -0.339 -0.226 L -0.340 -0.222 L -0.344 -0.218 L -0.348 -0.215 L -0.351 -0.211 L -0.355 -0.208 L -0.358 -0.204 L -0.362 -0.200 L -0.366 -0.197 L -0.369 -0.193 L -0.373 -0.190 L -0.376 -0.186 L -0.380 -0.182 L -0.384 -0.179 L -0.387 -0.175 L -0.387 -0.172 L -0.387 -0.168 L -0.387 -0.164 L -0.387 -0.161 L -0.387 -0.157 L -0.387 -0.153 L -0.387 -0.150 L -0.387 -0.146 L -0.387 -0.143 L -0.387 -0.139 L -0.387 -0.135 L -0.387 -0.132 L -0.387 -0.128 L -0.387 -0.125 L -0.387 -0.121 L -0.387 -0.117 L -0.387 -0.114 L -0.387 -0.110 L -0.387 -0.107 L -0.387 -0.103 L -0.387 -0.099 L -0.387 -0.096 L -0.387 -0.092 L -0.387 -0.088 L -0.387 -0.085 L -0.387 -0.081 L -0.387 -0.078 L -0.389 -0.074 L -0.387 -0.070 L -0.387 -0.067 L -0.389 -0.063 L -0.389 -0.060 L -0.389 -0.056 L -0.389 -0.052 L -0.328 -0.049 L -0.331 -0.045 L -0.335 -0.042 L -0.339 -0.038 L -0.342 -0.034 L -0.344 -0.031 L -0.348 -0.027 L -0.351 -0.023 L -0.355 -0.020 L -0.358 -0.016 L -0.362 -0.013 L -0.364 -0.009 L -0.367 -0.005 L -0.371 -0.002 L -0.375 0.002 L -0.378 0.005 L -0.380 0.009 L -0.384 0.013 L -0.387 0.016 L -0.389 0.020 L -0.387 0.023 L -0.387 0.027 L -0.387 0.031 L -0.387 0.034 L -0.387 0.038 L -0.387 0.042 L -0.387 0.045 L -0.387 0.049 L -0.387 0.052 L -0.387 0.056 L -0.387 0.060 L -0.387 0.063 L -0.387 0.067 L -0.387 0.070 L -0.387 0.074 L -0.387 0.078 L -0.387 0.081 L -0.387 0.085 L -0.387 0.088 L -0.387 0.092 L -0.387 0.096 L -0.387 0.099 L -0.387 0.103 L -0.387 0.107 L -0.387 0.110 L -0.387 0.114 L -0.387 0.117 L -0.387 0.121 L -0.387 0.125 L -0.387 0.128 L -0.387 0.132 L -0.909 0.240 L -0.909 0.244 L -0.909 0.247 L -0.909 0.251 L -0.909 0.255 L -0.909 0.258 L -0.909 0.262 L -0.909 0.265 L -0.909 0.269 L -0.909 0.273 L -0.909 0.276 L -0.909 0.280 L -0.909 0.283 L -0.909 0.287 L -0.909 0.291 L -0.909 0.294 L -0.909 0.298 L -0.909 0.302 L -0.909 0.305 L -0.909 0.309 L -0.909 0.312 L -0.909 0.316 L -0.909 0.320 L -0.909 0.323 L -0.909 0.327 L 0.893 0.327 L 0.900 0.323 L 0.904 0.320 L 0.905 0.316 L 0.907 0.312 L 0.909 0.309 L 0.909 0.305 L 0.909 0.302 L 0.909 0.298 L 0.907 0.294 L 0.907 0.291 L 0.905 0.287 L 0.902 0.283 L 0.898 0.280 L 0.891 0.276 L 0.828 0.273 L 0.821 0.269 L 0.821 0.265 L 0.821 0.262 L 0.822 0.258 L 0.824 0.255 L 0.904 0.251 L 0.904 0.247 L 0.904 0.244 L 0.904 0.240 L -0.387 0.132 L -0.385 0.128 L -0.382 0.125 L -0.380 0.121 L 0.286 0.117 L 0.304 0.114 L 0.319 0.110 L 0.330 0.107 L 0.339 0.103 L 0.348 0.099 L 0.355 0.096 L 0.362 0.092 L 0.367 0.088 L 0.373 0.085 L 0.378 0.081 L 0.384 0.078 L 0.387 0.074 L 0.393 0.070 L 0.396 0.067 L 0.400 0.063 L 0.404 0.060 L 0.407 0.056 L 0.411 0.052 L 0.414 0.049 L 0.418 0.045 L 0.422 0.042 L 0.425 0.038 L 0.427 0.034 L 0.429 0.031 L 0.432 0.027 L 0.434 0.023 L 0.436 0.020 L 0.438 0.016 L 0.440 0.013 L 0.441 0.009 L 0.441 0.005 L 0.443 0.002 L 0.445 -0.002 L 0.447 -0.005 L 0.447 -0.009 L 0.449 -0.013 L 0.450 -0.016 L 0.450 -0.020 L 0.450 -0.023 L 0.452 -0.027 L 0.452 -0.031 L 0.454 -0.034 L 0.454 -0.038 L 0.454 -0.042 L 0.454 -0.045 L 0.454 -0.049 L 0.454 -0.052 L 0.454 -0.056 L 0.454 -0.060 L 0.454 -0.063 L 0.454 -0.067 L 0.454 -0.070 L 0.454 -0.074 L 0.454 -0.078 L 0.454 -0.081 L 0.454 -0.085 L 0.452 -0.088 L 0.452 -0.092 L 0.450 -0.096 L 0.450 -0.099 L 0.449 -0.103 L 0.449 -0.107 L 0.447 -0.110 L 0.445 -0.114 L 0.445 -0.117 L 0.443 -0.121 L 0.441 -0.125 L 0.440 -0.128 L 0.438 -0.132 L 0.436 -0.135 L 0.434 -0.139 L 0.432 -0.143 L 0.431 -0.146 L 0.427 -0.150 L 0.425 -0.153 L 0.422 -0.157 L 0.420 -0.161 L 0.416 -0.164 L 0.414 -0.168 L 0.411 -0.172 L 0.407 -0.175 L 0.404 -0.179 L 0.400 -0.182 L 0.396 -0.186 L 0.391 -0.190 L 0.385 -0.193 L 0.382 -0.197 L 0.376 -0.200 L 0.369 -0.204 L 0.364 -0.208 L 0.357 -0.211 L 0.349 -0.215 L 0.339 -0.218 L 0.324 -0.222 L 0.311 -0.226 L -0.225 -0.229 L -0.221 -0.233 L -0.219 -0.237 L -0.216 -0.240 L -0.212 -0.244 L -0.209 -0.247 L -0.207 -0.251 L 0.140 -0.255 L 0.144 -0.258 L 0.147 -0.262 L 0.149 -0.265 L 0.153 -0.269 L 0.156 -0.273 L 0.160 -0.276 L 0.163 -0.280 L 0.167 -0.283 L 0.171 -0.287 L 0.174 -0.291 L 0.178 -0.294 L 0.181 -0.298 L 0.185 -0.302 L 0.189 -0.305 L 0.192 -0.309 L 0.196 -0.312 L 0.198 -0.316 L 0.201 -0.320 L 0.075 -0.323 L 0.073 -0.327 Z"/>
            </svg>
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
          <div className="w-20 h-20 text-fd-violet animate-float" style={{ animationDuration: '4s' }}>
            <svg viewBox="-1.1 -1.1 2.2 2.2" width="80" height="80" fill="currentColor">
              <path d="M -0.176 -0.327 L -0.234 -0.323 L -0.248 -0.320 L -0.250 -0.316 L -0.254 -0.312 L -0.257 -0.309 L -0.261 -0.305 L -0.265 -0.302 L -0.268 -0.298 L -0.270 -0.294 L -0.275 -0.291 L -0.279 -0.287 L -0.283 -0.283 L -0.284 -0.280 L -0.290 -0.276 L -0.292 -0.273 L -0.295 -0.269 L -0.299 -0.265 L -0.302 -0.262 L -0.306 -0.258 L -0.310 -0.255 L -0.313 -0.251 L -0.317 -0.247 L -0.320 -0.244 L -0.324 -0.240 L -0.328 -0.237 L -0.331 -0.233 L -0.335 -0.229 L -0.339 -0.226 L -0.340 -0.222 L -0.344 -0.218 L -0.348 -0.215 L -0.351 -0.211 L -0.355 -0.208 L -0.358 -0.204 L -0.362 -0.200 L -0.366 -0.197 L -0.369 -0.193 L -0.373 -0.190 L -0.376 -0.186 L -0.380 -0.182 L -0.384 -0.179 L -0.387 -0.175 L -0.387 -0.172 L -0.387 -0.168 L -0.387 -0.164 L -0.387 -0.161 L -0.387 -0.157 L -0.387 -0.153 L -0.387 -0.150 L -0.387 -0.146 L -0.387 -0.143 L -0.387 -0.139 L -0.387 -0.135 L -0.387 -0.132 L -0.387 -0.128 L -0.387 -0.125 L -0.387 -0.121 L -0.387 -0.117 L -0.387 -0.114 L -0.387 -0.110 L -0.387 -0.107 L -0.387 -0.103 L -0.387 -0.099 L -0.387 -0.096 L -0.387 -0.092 L -0.387 -0.088 L -0.387 -0.085 L -0.387 -0.081 L -0.387 -0.078 L -0.389 -0.074 L -0.387 -0.070 L -0.387 -0.067 L -0.389 -0.063 L -0.389 -0.060 L -0.389 -0.056 L -0.389 -0.052 L -0.328 -0.049 L -0.331 -0.045 L -0.335 -0.042 L -0.339 -0.038 L -0.342 -0.034 L -0.344 -0.031 L -0.348 -0.027 L -0.351 -0.023 L -0.355 -0.020 L -0.358 -0.016 L -0.362 -0.013 L -0.364 -0.009 L -0.367 -0.005 L -0.371 -0.002 L -0.375 0.002 L -0.378 0.005 L -0.380 0.009 L -0.384 0.013 L -0.387 0.016 L -0.389 0.020 L -0.387 0.023 L -0.387 0.027 L -0.387 0.031 L -0.387 0.034 L -0.387 0.038 L -0.387 0.042 L -0.387 0.045 L -0.387 0.049 L -0.387 0.052 L -0.387 0.056 L -0.387 0.060 L -0.387 0.063 L -0.387 0.067 L -0.387 0.070 L -0.387 0.074 L -0.387 0.078 L -0.387 0.081 L -0.387 0.085 L -0.387 0.088 L -0.387 0.092 L -0.387 0.096 L -0.387 0.099 L -0.387 0.103 L -0.387 0.107 L -0.387 0.110 L -0.387 0.114 L -0.387 0.117 L -0.387 0.121 L -0.387 0.125 L -0.387 0.128 L -0.387 0.132 L -0.909 0.240 L -0.909 0.244 L -0.909 0.247 L -0.909 0.251 L -0.909 0.255 L -0.909 0.258 L -0.909 0.262 L -0.909 0.265 L -0.909 0.269 L -0.909 0.273 L -0.909 0.276 L -0.909 0.280 L -0.909 0.283 L -0.909 0.287 L -0.909 0.291 L -0.909 0.294 L -0.909 0.298 L -0.909 0.302 L -0.909 0.305 L -0.909 0.309 L -0.909 0.312 L -0.909 0.316 L -0.909 0.320 L -0.909 0.323 L -0.909 0.327 L 0.893 0.327 L 0.900 0.323 L 0.904 0.320 L 0.905 0.316 L 0.907 0.312 L 0.909 0.309 L 0.909 0.305 L 0.909 0.302 L 0.909 0.298 L 0.907 0.294 L 0.907 0.291 L 0.905 0.287 L 0.902 0.283 L 0.898 0.280 L 0.891 0.276 L 0.828 0.273 L 0.821 0.269 L 0.821 0.265 L 0.821 0.262 L 0.822 0.258 L 0.824 0.255 L 0.904 0.251 L 0.904 0.247 L 0.904 0.244 L 0.904 0.240 L -0.387 0.132 L -0.385 0.128 L -0.382 0.125 L -0.380 0.121 L 0.286 0.117 L 0.304 0.114 L 0.319 0.110 L 0.330 0.107 L 0.339 0.103 L 0.348 0.099 L 0.355 0.096 L 0.362 0.092 L 0.367 0.088 L 0.373 0.085 L 0.378 0.081 L 0.384 0.078 L 0.387 0.074 L 0.393 0.070 L 0.396 0.067 L 0.400 0.063 L 0.404 0.060 L 0.407 0.056 L 0.411 0.052 L 0.414 0.049 L 0.418 0.045 L 0.422 0.042 L 0.425 0.038 L 0.427 0.034 L 0.429 0.031 L 0.432 0.027 L 0.434 0.023 L 0.436 0.020 L 0.438 0.016 L 0.440 0.013 L 0.441 0.009 L 0.441 0.005 L 0.443 0.002 L 0.445 -0.002 L 0.447 -0.005 L 0.447 -0.009 L 0.449 -0.013 L 0.450 -0.016 L 0.450 -0.020 L 0.450 -0.023 L 0.452 -0.027 L 0.452 -0.031 L 0.454 -0.034 L 0.454 -0.038 L 0.454 -0.042 L 0.454 -0.045 L 0.454 -0.049 L 0.454 -0.052 L 0.454 -0.056 L 0.454 -0.060 L 0.454 -0.063 L 0.454 -0.067 L 0.454 -0.070 L 0.454 -0.074 L 0.454 -0.078 L 0.454 -0.081 L 0.454 -0.085 L 0.452 -0.088 L 0.452 -0.092 L 0.450 -0.096 L 0.450 -0.099 L 0.449 -0.103 L 0.449 -0.107 L 0.447 -0.110 L 0.445 -0.114 L 0.445 -0.117 L 0.443 -0.121 L 0.441 -0.125 L 0.440 -0.128 L 0.438 -0.132 L 0.436 -0.135 L 0.434 -0.139 L 0.432 -0.143 L 0.431 -0.146 L 0.427 -0.150 L 0.425 -0.153 L 0.422 -0.157 L 0.420 -0.161 L 0.416 -0.164 L 0.414 -0.168 L 0.411 -0.172 L 0.407 -0.175 L 0.404 -0.179 L 0.400 -0.182 L 0.396 -0.186 L 0.391 -0.190 L 0.385 -0.193 L 0.382 -0.197 L 0.376 -0.200 L 0.369 -0.204 L 0.364 -0.208 L 0.357 -0.211 L 0.349 -0.215 L 0.339 -0.218 L 0.324 -0.222 L 0.311 -0.226 L -0.225 -0.229 L -0.221 -0.233 L -0.219 -0.237 L -0.216 -0.240 L -0.212 -0.244 L -0.209 -0.247 L -0.207 -0.251 L 0.140 -0.255 L 0.144 -0.258 L 0.147 -0.262 L 0.149 -0.265 L 0.153 -0.269 L 0.156 -0.273 L 0.160 -0.276 L 0.163 -0.280 L 0.167 -0.283 L 0.171 -0.287 L 0.174 -0.291 L 0.178 -0.294 L 0.181 -0.298 L 0.185 -0.302 L 0.189 -0.305 L 0.192 -0.309 L 0.196 -0.312 L 0.198 -0.316 L 0.201 -0.320 L 0.075 -0.323 L 0.073 -0.327 Z"/>
            </svg>
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
