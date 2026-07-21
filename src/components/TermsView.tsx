import React from 'react';
import { motion } from 'motion/react';
import { Scale, ShieldCheck, Sprout } from 'lucide-react';
import Logo from './Logo';

export default function TermsView() {
  return (
    <div className="bg-background min-h-screen py-16 px-6 md:px-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <Logo className="h-16 w-16 md:h-20 md:w-20" />
          </div>
          <h1 className="font-serif text-4xl text-primary font-bold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-secondary font-sans font-bold text-xs uppercase tracking-widest">
            Agreement of botanical purity and client trust
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Content Card */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-secondary/15 shadow-sm space-y-8 font-sans text-sm text-on-surface-variant leading-relaxed">
          <div className="flex items-center gap-3 bg-secondary/5 p-4 rounded-xl border border-secondary/20">
            <Scale className="h-5 w-5 text-secondary shrink-0" />
            <span className="font-bold text-primary text-xs uppercase tracking-wider">Draft Agreement Placeholder (Updated in 2 Days)</span>
          </div>

          <div className="space-y-6">
            <p>
              Welcome to <strong>Aranya Organic</strong> (Modern Botanical Wellness). By accessing, viewing, or purchasing from our platform, you agree to adhere to and be bound by the general terms, conditions, and notices described herein.
            </p>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">1. Product Purity & Handcrafted Nature</h3>
              <p>
                Each Aranya Organic formula is handmade in micro-batches with pure botanical and natural ingredients. Due to this raw and handcrafted process, subtle variances in color, aroma, and consistency may occur between production batches. These organic fluctuations are entirely normal and serve as signatures of genuine biological authenticity.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">2. Medical Disclaimer & Safety</h3>
              <p>
                While our formulas are natural, skin-friendly, and quality-tested, we recommend that all clients perform a standard 24-hour patch test before introducing new routines. Our products and consultations do not constitute formal medical diagnoses or prescriptions. Please consult with a board dermatologist for persistent skin pathologies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">3. Intellectual Property</h3>
              <p>
                All brand identity, trade secrets, botanical formulation names, logos, media, and copy assets are protected under registered intellectual property regulations and belong exclusively to the creators of Aranya Organic.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
