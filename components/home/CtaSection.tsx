// components/CtaSection.tsx
"use client"
import React from 'react';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12 lg:p-16">
          {/* Subtle background pattern (optional, for premium feel) */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Ready to{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                level up
              </span>{' '}
              your store?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Join thousands of merchants who are already selling smarter with our platform.
              Get started today — no credit card required.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                Start free trial
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted">
                Contact sales
              </button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Free 14-day trial · Cancel anytime · No setup fee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}