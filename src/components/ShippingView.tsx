import React from 'react';
import { motion } from 'motion/react';
import { Truck, ShieldCheck, HelpCircle } from 'lucide-react';
import Logo from './Logo';

export default function ShippingView() {
  return (
    <div className="bg-background min-h-screen py-16 px-6 md:px-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <Logo className="h-16 w-16 md:h-20 md:w-20" />
          </div>
          <h1 className="font-serif text-4xl text-primary font-bold tracking-tight">
            Shipping & Dispatch Policy
          </h1>
          <p className="text-secondary font-sans font-bold text-xs uppercase tracking-widest">
            Carefully packaged to protect botanical active ingredients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Content Card */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-secondary/15 shadow-sm space-y-8 font-sans text-sm text-on-surface-variant leading-relaxed">
          <div className="flex items-center gap-3 bg-secondary/5 p-4 rounded-xl border border-secondary/20">
            <Truck className="h-5 w-5 text-secondary shrink-0" />
            <span className="font-bold text-primary text-xs uppercase tracking-wider">Shipping Methods & Processing Times</span>
          </div>

          <div className="space-y-6">
            <p>
              Thank you for trusting <strong>Aranya Organic</strong>. Because our organic botanical blends do not rely on heavy synthetic preservatives, we package and ship our formulas under temperature-sensitive and hygienic conditions.
            </p>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">1. Processing & Laboratory Crafting Times</h3>
              <p>
                To maintain optimum freshness, we do not warehouse massive static inventories. Most products are freshly prepared to order or sourced from very recent micro-batches.
              </p>
              <p>
                Orders are processed and dispatched within <strong>1 to 3 business days</strong>.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">2. Shipping Rates & Delivery Timeframes</h3>
              <p>
                We offer premium pan-India shipping to your doorstep:
              </p>
              <ul className="list-disc pl-5 space-y-2 font-semibold text-primary text-xs">
                <li>Standard Shipping (Metro Cities): 3–5 Business Days.</li>
                <li>Standard Shipping (Rest of India): 5–8 Business Days.</li>
                <li>Complimentary shipping is automatically applied to orders over ₹1,500.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">3. Transit Care & Sustainable Packaging</h3>
              <p>
                We package your orders in highly recyclable, biodegradable corrugated boxes, wrapped in eco-friendly paper buffer instead of plastic bubble sheets. We prioritize the preservation of raw organic oils, active serums, and floral waters.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
