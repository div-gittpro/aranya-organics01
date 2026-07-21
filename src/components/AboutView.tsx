import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Sparkles, Sprout, Heart, ShieldCheck, ExternalLink, Users, Eye, X } from 'lucide-react';
import Logo from './Logo';
import bhumikaFounder from '../assests/bhumika_founder.png';
import nidhiFounder from '../assests/nidhi_founder.png';
import bhumikaCertificateSoapWorkshop from '../assests/bhumika_certificate_soap_workshop.jpg';
import bhumikaCertificateBathSpecial from '../assests/bhumika_certificate_bath_special.jpg';
import bhumikaCertificateFacePackScrubUbtan from '../assests/bhumika_certificate_face_pack_scrub_ubtan.jpg';
import bhumikaCertificateFruitHaircare from '../assests/bhumika_certificate_fruit_haircare.png';
import bhumikaCertificateLipCare from '../assests/bhumika_certificate_lip_care.jpg';
import bhumikaCertificateHairOil from '../assests/bhumika_certificate_hair_oil.jpg';
import bhumikaCertificateLiquidBase from '../assests/bhumika_certificate_liquid_base.jpg';
import bhumikaCertificateSoapFormulation from '../assests/bhumika_certificate_soap_formulation.png';
import bhumikaCertificateThemedSoap from '../assests/bhumika_certificate_themed_soap.jpg';
import nidhiCertificateAyurvedicCosmetics from '../assests/nidhi_certificate_ayurvedic_cosmetics.jpg';
import nidhiCertificateWhiteningCream from '../assests/nidhi_certificate_whitening_cream.jpg';
import companyCertificateUdyamRegistration from '../assests/company_certificate_udyam_registration.png';
import companyCertificateShopEstablishment from '../assests/company_certificate_shop_establishment.png';
import companyCertificateIso9001 from '../assests/company_certificate_iso_9001.jpg';

const bhumikaCertificates = [
  { src: bhumikaCertificateSoapWorkshop, alt: 'Bhumika soap making workshop certificate' },
  { src: bhumikaCertificateBathSpecial, alt: 'Bhumika bath special workshop certificate' },
  { src: bhumikaCertificateFacePackScrubUbtan, alt: 'Bhumika face pack scrub and ubtan workshop certificate' },
  { src: bhumikaCertificateFruitHaircare, alt: 'Bhumika fruit-based haircare certificate' },
  { src: bhumikaCertificateLipCare, alt: 'Bhumika lip care workshop certificate' },
  { src: bhumikaCertificateHairOil, alt: 'Bhumika organic hair oil making certificate' },
  { src: bhumikaCertificateLiquidBase, alt: 'Bhumika liquid base workshop certificate' },
  { src: bhumikaCertificateSoapFormulation, alt: 'Bhumika soap making formulation course certificate' },
  { src: bhumikaCertificateThemedSoap, alt: 'Bhumika themed soap workshop certificate' },
];

const nidhiCertificates = [
  { src: nidhiCertificateAyurvedicCosmetics, alt: 'Nidhi ayurvedic cosmetics diploma certificate' },
  { src: nidhiCertificateWhiteningCream, alt: 'Nidhi whitening cream workshop certificate' },
];

const companyCertificates = [
  { src: companyCertificateUdyamRegistration, alt: 'Aranya Organic Udyam registration certificate' },
  { src: companyCertificateShopEstablishment, alt: 'Aranya Organic shop and establishment intimation receipt' },
  { src: companyCertificateIso9001, alt: 'Aranya Organic ISO 9001 quality management certificate' },
];

export default function AboutView() {
  const [showBhumikaCertificates, setShowBhumikaCertificates] = useState(false);
  const [showNidhiCertificates, setShowNidhiCertificates] = useState(false);
  const [showCompanyCertificates, setShowCompanyCertificates] = useState(false);
  const [activeBhumikaCertificateIndex, setActiveBhumikaCertificateIndex] = useState(0);
  const [activeNidhiCertificateIndex, setActiveNidhiCertificateIndex] = useState(0);
  const [activeCompanyCertificateIndex, setActiveCompanyCertificateIndex] = useState(0);

  const showPreviousCertificate = () => {
    setActiveBhumikaCertificateIndex((current) =>
      current === 0 ? bhumikaCertificates.length - 1 : current - 1
    );
  };

  const showNextCertificate = () => {
    setActiveBhumikaCertificateIndex((current) =>
      current === bhumikaCertificates.length - 1 ? 0 : current + 1
    );
  };

  const showPreviousNidhiCertificate = () => {
    setActiveNidhiCertificateIndex((current) =>
      current === 0 ? nidhiCertificates.length - 1 : current - 1
    );
  };

  const showNextNidhiCertificate = () => {
    setActiveNidhiCertificateIndex((current) =>
      current === nidhiCertificates.length - 1 ? 0 : current + 1
    );
  };

  const showPreviousCompanyCertificate = () => {
    setActiveCompanyCertificateIndex((current) =>
      current === 0 ? companyCertificates.length - 1 : current - 1
    );
  };

  const showNextCompanyCertificate = () => {
    setActiveCompanyCertificateIndex((current) =>
      current === companyCertificates.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="bg-background min-h-screen py-16 px-6 md:px-16 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-fixed-dim rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-secondary-fixed rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <Logo className="h-16 w-16 md:h-20 md:w-20" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-primary font-bold tracking-tight">
            About Aranya Organic
          </h1>
          <p className="text-secondary font-sans font-bold text-xs uppercase tracking-widest">
            Nature • Quality • Purpose
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Our Belief & Purpose Section */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-secondary/15 shadow-sm space-y-6">
          <p className="text-primary font-serif text-lg md:text-xl font-semibold leading-relaxed text-center italic">
            "At Aranya Organic, we believe that true wellness begins with conscious choices."
          </p>
          
          <div className="space-y-6 text-on-surface-variant font-sans text-base leading-relaxed">
            <p>
              Our products are thoughtfully crafted using carefully selected organic ingredients, bringing together nature, quality, and purpose in every bottle.
            </p>
            <p>
              We don’t believe in unnecessary fillers or exaggerated promises. Instead, we focus on creating products that are simple, effective, and made with integrity—using ingredients chosen for their purity and carefully formulated to become a part of your daily self-care ritual.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-outline-variant/20">
            <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-xl border border-primary/10">
              <Sprout className="h-5 w-5 text-secondary shrink-0" />
              <span className="font-sans text-xs font-bold text-primary">Organic & naturally sourced</span>
            </div>
            <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-xl border border-primary/10">
              <Sparkles className="h-5 w-5 text-secondary shrink-0" />
              <span className="font-sans text-xs font-bold text-primary">Crafted in small batches</span>
            </div>
            <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-xl border border-primary/10">
              <Heart className="h-5 w-5 text-secondary shrink-0" />
              <span className="font-sans text-xs font-bold text-primary">Cruelty-free & skin-friendly</span>
            </div>
          </div>
        </section>

        {/* Co-Founders Profiles & Verified Certificates */}
        <section className="space-y-16">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl text-primary font-bold">Our Leadership</h2>
            <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">The minds behind the craft</p>
          </div>

          <div className="space-y-16">
            
            {/* --- Founder 1 Section --- */}
            <div className="space-y-8">
              {/* Founder 1 Profile Card */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-luxury-gold shadow-md flex flex-col md:flex-row gap-8 items-start hover:shadow-xl hover:border-secondary transition-all duration-300">
                {/* Founder Portrait */}
                <div className="w-32 h-40 rounded-2xl border-2 border-secondary bg-secondary-container/30 flex-shrink-0 relative overflow-hidden group hover:shadow-lg hover:border-primary transition-all duration-300 shadow-md mx-auto md:mx-0">
                  <img
                    src={bhumikaFounder}
                    alt="Bhumika Gaglani"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                
                {/* Profile Text */}
                <div className="flex-grow space-y-4">
                  <div className="text-center md:text-left space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-primary">Bhumika Gaglani</h3>
                    <p className="text-sm text-secondary font-bold">Co-Founder & Skincare Expert</p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-2xl border-l-4 border-secondary">
                    <p className="font-serif italic text-primary text-sm leading-relaxed">
                      “When passion meets purpose, positive change follows”
                    </p>
                  </div>

                  <div className="text-on-surface-variant font-sans text-sm leading-relaxed space-y-3">
                    <p>
                      With a strong foundation in the beauty industry, she developed a deep understanding of what truly works and what people seek—products that are both effective and rooted in authenticity. Guided by a passion for natural wellness and a desire to create something meaningful, she co-founded Aranya Organic to bring that vision to life.
                    </p>
                    <p>
                      Today, Aranya Organic reflects her commitment to blending nature, knowledge, and purpose. Through every product, she hopes to inspire a more conscious approach to beauty—one that celebrates confidence, authenticity, and lasting well-being.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder 1 Certificates */}
              <div className="flex justify-center md:justify-start">
                <button
                  type="button"
                  onClick={() => {
                    setActiveBhumikaCertificateIndex(0);
                    setShowBhumikaCertificates(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
                >
                  <Eye className="h-4 w-4" />
                  View Certificates
                </button>
              </div>
            </div>

            {/* --- Founder 2 Section --- */}
            <div className="space-y-8 pt-6">
              {/* Founder 2 Profile Card */}
              <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-luxury-gold shadow-md flex flex-col md:flex-row gap-8 items-start hover:shadow-xl hover:border-secondary transition-all duration-300">
                {/* Founder Portrait */}
                <div className="w-32 h-40 rounded-2xl border-2 border-secondary bg-secondary-container/30 flex-shrink-0 relative overflow-hidden group hover:shadow-lg hover:border-primary transition-all duration-300 shadow-md mx-auto md:mx-0">
                  <img
                    src={nidhiFounder}
                    alt="Nidhi Jani"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                
                {/* Profile Text */}
                <div className="flex-grow space-y-4">
                  <div className="text-center md:text-left space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-primary">Nidhi Jani</h3>
                    <p className="text-sm text-secondary font-bold">Co-Founder & Formulation Chemist</p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-2xl border-l-4 border-secondary">
                    <p className="font-serif italic text-primary text-sm leading-relaxed">
                      “Driven by the belief that wellness should uplift everyone”
                    </p>
                  </div>

                  <div className="text-on-surface-variant font-sans text-sm leading-relaxed space-y-3">
                    <p>
                      Years of experience in the beauty industry shaped her understanding of what truly works. Driven by a deep passion for natural care, she co-founded Aranya Organic to transform that knowledge into something meaningful.
                    </p>
                    <p>
                      Today, Aranya Organic stands as a reflection of her vision—where expertise, nature, and purpose come together in perfect harmony. Committed to creating beauty that is pure, effective, and enduring, she believes that true wellness begins with thoughtful choices. Every product is crafted with care, inspired by nature’s finest ingredients, and designed to nurture healthy, confident living. Through Aranya Organic, she aspires to inspire a more mindful and sustainable approach to beauty, one that celebrates authenticity, well-being, and the timeless power of nature.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder 2 Certificates */}
              <div className="flex justify-center md:justify-start">
                <button
                  type="button"
                  onClick={() => {
                    setActiveNidhiCertificateIndex(0);
                    setShowNidhiCertificates(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
                >
                  <Eye className="h-4 w-4" />
                  View Certificates
                </button>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  type="button"
                  onClick={() => {
                    setActiveCompanyCertificateIndex(0);
                    setShowCompanyCertificates(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
                >
                  <Eye className="h-4 w-4" />
                  View Company Certificates
                </button>
              </div>
            </div>

          </div>
        </section>

        {showBhumikaCertificates && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl rounded-2xl border border-secondary/30 bg-white p-4 pt-14 shadow-2xl md:p-6 md:pt-16">
              <div className="absolute right-4 top-4 flex items-center gap-3">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
                  Bhumika
                </span>
                <button
                  type="button"
                  onClick={() => setShowBhumikaCertificates(false)}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-secondary/30 bg-white px-3 font-sans text-xs font-bold uppercase tracking-wider text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Close certificates"
                >
                  <X className="h-4 w-4" />
                  Close
                </button>
              </div>

              <div className="flex items-center gap-3 md:gap-5">
                <button
                  type="button"
                  onClick={showPreviousCertificate}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-white text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Previous certificate"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">&lsaquo;</span>
                </button>

                <div className="flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-background/70 md:min-h-[460px]">
                  <img
                    src={bhumikaCertificates[activeBhumikaCertificateIndex].src}
                    alt={bhumikaCertificates[activeBhumikaCertificateIndex].alt}
                    className="max-h-[65vh] w-full object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={showNextCertificate}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-white text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Next certificate"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">&rsaquo;</span>
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-5">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
                  {activeBhumikaCertificateIndex + 1} / {bhumikaCertificates.length}
                </p>
                <button
                  type="button"
                  onClick={() => setShowBhumikaCertificates(false)}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-primary/90"
                >
                  <X className="h-4 w-4" />
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {showNidhiCertificates && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl rounded-2xl border border-secondary/30 bg-white p-4 pt-14 shadow-2xl md:p-6 md:pt-16">
              <div className="absolute right-4 top-4 flex items-center gap-3">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
                  Nidhi
                </span>
                <button
                  type="button"
                  onClick={() => setShowNidhiCertificates(false)}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-secondary/30 bg-white px-3 font-sans text-xs font-bold uppercase tracking-wider text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Close certificates"
                >
                  <X className="h-4 w-4" />
                  Close
                </button>
              </div>

              <div className="flex items-center gap-3 md:gap-5">
                <button
                  type="button"
                  onClick={showPreviousNidhiCertificate}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-white text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Previous certificate"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">&lsaquo;</span>
                </button>

                <div className="flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-background/70 md:min-h-[460px]">
                  <img
                    src={nidhiCertificates[activeNidhiCertificateIndex].src}
                    alt={nidhiCertificates[activeNidhiCertificateIndex].alt}
                    className="max-h-[65vh] w-full object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={showNextNidhiCertificate}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-white text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Next certificate"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">&rsaquo;</span>
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-5">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
                  {activeNidhiCertificateIndex + 1} / {nidhiCertificates.length}
                </p>
                <button
                  type="button"
                  onClick={() => setShowNidhiCertificates(false)}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-primary/90"
                >
                  <X className="h-4 w-4" />
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {showCompanyCertificates && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-primary/70 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl rounded-2xl border border-secondary/30 bg-white p-4 pt-14 shadow-2xl md:p-6 md:pt-16">
              <div className="absolute right-4 top-4 flex items-center gap-3">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
                  Company
                </span>
                <button
                  type="button"
                  onClick={() => setShowCompanyCertificates(false)}
                  className="inline-flex h-9 items-center gap-1.5 rounded-full border border-secondary/30 bg-white px-3 font-sans text-xs font-bold uppercase tracking-wider text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Close certificates"
                >
                  <X className="h-4 w-4" />
                  Close
                </button>
              </div>

              <div className="flex items-center gap-3 md:gap-5">
                <button
                  type="button"
                  onClick={showPreviousCompanyCertificate}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-white text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Previous certificate"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">&lsaquo;</span>
                </button>

                <div className="flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-background/70 md:min-h-[460px]">
                  <img
                    src={companyCertificates[activeCompanyCertificateIndex].src}
                    alt={companyCertificates[activeCompanyCertificateIndex].alt}
                    className="max-h-[65vh] w-full object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={showNextCompanyCertificate}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-white text-primary shadow-sm transition-colors hover:bg-secondary/10"
                  aria-label="Next certificate"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">&rsaquo;</span>
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-5">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
                  {activeCompanyCertificateIndex + 1} / {companyCertificates.length}
                </p>
                <button
                  type="button"
                  onClick={() => setShowCompanyCertificates(false)}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition-colors hover:bg-primary/90"
                >
                  <X className="h-4 w-4" />
                  Close
                </button>
              </div>
            </div>
          </div>
        )}


        {/* Thank You Note */}
        <section className="text-center pt-8 border-t border-outline-variant/20 space-y-4">
          <p className="font-serif italic text-primary text-base">
            "Thank you for being a part of our organic and sustainable beauty journey."
          </p>
          <div className="flex justify-center gap-3 text-xs text-on-surface-variant font-bold">
            <span>Pure Ingredients</span>
            <span>•</span>
            <span>Made with Care</span>
            <span>•</span>
            <span>Sustainable Choices</span>
          </div>
        </section>

      </div>
    </div>
  );
}
