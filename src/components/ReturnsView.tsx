import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, PackageX, Heart } from 'lucide-react';
import Logo from './Logo';

export default function ReturnsView() {
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
            Return & Cancellation Policy
          </h1>
          <p className="text-secondary font-sans font-bold text-xs uppercase tracking-widest">
            Nurturing your journey with honesty and care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Content Card */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-secondary/15 shadow-sm space-y-8 font-sans text-sm text-on-surface-variant leading-relaxed">
          <div className="flex items-center gap-3 bg-secondary/5 p-4 rounded-xl border border-secondary/20">
            <PackageX className="h-5 w-5 text-secondary shrink-0" />
            <span className="font-bold text-primary text-xs uppercase tracking-wider">Returns & Exchanges Guidelines</span>
          </div>

          <div className="space-y-6">
            <p>
              At <strong>Aranya Organic</strong>, we take utmost care and pride in formulating and preparing each micro-batch. Our goal is to ensure you feel supported throughout your natural wellness routine.
            </p>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">1. Replacement & Refund Eligibility</h3>
              <p>
                Due to the strictly fresh, organic, and sanitary nature of our skincare and haircare blends, we are unable to accept returns or offer refunds on opened or used products.
              </p>
              <p>
                However, if you receive a package that was damaged during transit, or if an incorrect formula was delivered, we will expedite a complimentary replacement to you immediately. Please share photographic details with our team within <strong>48 hours</strong> of package arrival.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">2. Cancellation Policy</h3>
              <p>
                You may request an order cancellation at any time before the product is dispatched from our micro-laboratory. Once a botanical order has been packed and handed over to our transit partners, cancellations cannot be processed.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-primary">3. Raising a Claim</h3>
              <p>
                To initiate a damage or replacement claim, simply contact our botanical experts directly via our WhatsApp support line, sharing your order summary, name, and images of the shipping box and container. We commit to resolving all claims within 24 business hours.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
