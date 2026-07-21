import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Sparkles, CheckCircle, RefreshCw, MessageSquare, Star, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ConsultationViewProps {
  onAddToCart: (product: Product, quantity?: number, selectedVariant?: string) => void;
  onOpenProductDetail: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function ConsultationView({
  onAddToCart,
  onOpenProductDetail,
  favorites,
  onToggleFavorite,
}: ConsultationViewProps) {
  // Consultation Type
  const [consultationType, setConsultationType] = useState<'skincare' | 'haircare' | 'both'>('skincare');

  // Skincare Inputs
  const [skinType, setSkinType] = useState<string>('');
  const [skinTypeOther, setSkinTypeOther] = useState<string>('');
  const [skinConcern, setSkinConcern] = useState<string>('');
  const [skinConcernOther, setSkinConcernOther] = useState<string>('');

  // Haircare Inputs
  const [hairType, setHairType] = useState<string>('');
  const [hairTypeOther, setHairTypeOther] = useState<string>('');
  const [hairConcern, setHairConcern] = useState<string>('');
  const [hairConcernOther, setHairConcernOther] = useState<string>('');

  // Submission State
  const [submitted, setSubmitted] = useState(false);
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const handleConsultationSubmit = () => {
    const recs: Product[] = [];

    // Skincare Recommendation Logic
    if (consultationType === 'skincare' || consultationType === 'both') {
      const concern = skinConcern === 'Other' ? 'Other' : skinConcern;
      let skincareRec: Product | undefined;
      
      if (concern === 'Acne') {
        skincareRec = PRODUCTS.find(p => p.id === 'anti-acne-face-wash') || PRODUCTS.find(p => p.id === 'anti-acne-gel') || PRODUCTS[0];
      } else if (concern === 'Pigmentation') {
        skincareRec = PRODUCTS.find(p => p.id === 'anti-pigment-gel') || PRODUCTS.find(p => p.id === 'anti-pigment-serum') || PRODUCTS[1];
      } else if (concern === 'Dryness') {
        skincareRec = PRODUCTS.find(p => p.id === 'rose-coconut-body-butter') || PRODUCTS.find(p => p.id === 'day-cream-with-spf') || PRODUCTS[4];
      } else {
        // "Other" or default skincare
        skincareRec = PRODUCTS.find(p => p.id === 'all-purpose-serum') || PRODUCTS.find(p => p.id === 'pure-kannauj-rose-water') || PRODUCTS[1];
      }
      if (skincareRec) recs.push(skincareRec);
    }

    // Haircare Recommendation Logic
    if (consultationType === 'haircare' || consultationType === 'both') {
      const concern = hairConcern === 'Other' ? 'Other' : hairConcern;
      let haircareRec: Product | undefined;

      if (concern === 'Hair Fall') {
        haircareRec = PRODUCTS.find(p => p.id === 'hair-fall-control-oil') || PRODUCTS.find(p => p.id === 'hair-fall-control-serum') || PRODUCTS[3];
      } else if (concern === 'Dandruff') {
        haircareRec = PRODUCTS.find(p => p.id === 'anti-dandruff-shampoo') || PRODUCTS.find(p => p.id === 'anti-dandruff-oil') || PRODUCTS[10];
      } else if (concern === 'Premature Greying') {
        haircareRec = PRODUCTS.find(p => p.id === '35-herbs-shampoo') || PRODUCTS.find(p => p.id === 'rosemary-hair-oil') || PRODUCTS[104];
      } else {
        // "Other" or default haircare
        haircareRec = PRODUCTS.find(p => p.id === 'hair-revive-kit') || PRODUCTS.find(p => p.id === 'rosemary-vetiver-hair-tonic') || PRODUCTS[3];
      }
      if (haircareRec) recs.push(haircareRec);
    }

    setRecommendations(recs);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSkinType('');
    setSkinTypeOther('');
    setSkinConcern('');
    setSkinConcernOther('');
    setHairType('');
    setHairTypeOther('');
    setHairConcern('');
    setHairConcernOther('');
    setSubmitted(false);
    setRecommendations([]);
  };

  const openWhatsAppExpert = () => {
    let message = `Hello Aranya Organic, I would like a personalized consultation summary! 🌿\n\n`;
    message += `📋 *Consultation Type:* ${consultationType.toUpperCase()}\n`;
    
    if (consultationType === 'skincare' || consultationType === 'both') {
      const actualSkinType = skinType === 'Other' ? `Other (${skinTypeOther})` : skinType;
      const actualConcern = skinConcern === 'Other' ? `Other (${skinConcernOther})` : skinConcern;
      message += `✨ *Skincare details:*\n- Skin Type: ${actualSkinType || 'Not specified'}\n- Concern: ${actualConcern || 'Not specified'}\n`;
    }
    
    if (consultationType === 'haircare' || consultationType === 'both') {
      const actualHairType = hairType === 'Other' ? `Other (${hairTypeOther})` : hairType;
      const actualConcern = hairConcern === 'Other' ? `Other (${hairConcernOther})` : hairConcern;
      message += `💇 *Haircare details:*\n- Hair/Scalp Type: ${actualHairType || 'Not specified'}\n- Concern: ${actualConcern || 'Not specified'}\n`;
    }

    message += `\nPlease guide me with the recommended organic routines! 🌱`;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encoded}`, '_blank');
  };

  // Validations
  const isFormValid = () => {
    if (consultationType === 'skincare') {
      return skinType && (skinType !== 'Other' || skinTypeOther.trim() !== '') &&
             skinConcern && (skinConcern !== 'Other' || skinConcernOther.trim() !== '');
    }
    if (consultationType === 'haircare') {
      return hairType && (hairType !== 'Other' || hairTypeOther.trim() !== '') &&
             hairConcern && (hairConcern !== 'Other' || hairConcernOther.trim() !== '');
    }
    if (consultationType === 'both') {
      return skinType && (skinType !== 'Other' || skinTypeOther.trim() !== '') &&
             skinConcern && (skinConcern !== 'Other' || skinConcernOther.trim() !== '') &&
             hairType && (hairType !== 'Other' || hairTypeOther.trim() !== '') &&
             hairConcern && (hairConcern !== 'Other' || hairConcernOther.trim() !== '');
    }
    return false;
  };

  return (
    <div className="bg-background min-h-screen py-16 px-6 md:px-16 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-secondary/40 shadow-sm">
            <Sprout className="h-4 w-4 text-secondary" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Ayurvedic Skin Intelligence</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-primary font-bold tracking-tight">
            Personalized Consultation
          </h1>
          <p className="text-on-surface-variant font-sans text-sm font-medium max-w-lg mx-auto">
            Discover a tailored organic regimen aligned with your unique biology. Our experts translate traditional botanical recipes into precise routines.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-primary to-secondary mx-auto rounded-full mt-4" />
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div 
              key="quiz-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 md:p-12 rounded-3xl border-2 border-luxury-gold shadow-md space-y-8"
            >
              {/* Step 1: Select Consultation Type */}
              <div className="space-y-4">
                <label className="text-sm font-extrabold tracking-wider uppercase text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Select Consultation Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'skincare', label: 'Skincare Consultation' },
                    { id: 'haircare', label: 'Haircare Consultation' },
                    { id: 'both', label: 'Both' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setConsultationType(item.id as any)}
                      className={`px-5 py-4 rounded-2xl text-xs font-extrabold border-2 transition-all cursor-pointer ${
                        consultationType === item.id
                          ? 'bg-primary text-white border-primary shadow-md scale-102 font-black'
                          : 'bg-transparent border-secondary/15 text-primary/80 hover:bg-secondary/5 hover:border-secondary/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Sections rendering with smooth fading */}
              <div className="space-y-8 pt-6 border-t border-secondary/15">
                
                {/* SKINCARE SECTION */}
                {(consultationType === 'skincare' || consultationType === 'both') && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6 bg-secondary/5 p-6 rounded-2xl border border-secondary/20"
                  >
                    <h3 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
                      <Sprout className="h-5 w-5 text-secondary" />
                      Skincare Consultation Parameters
                    </h3>

                    {/* Skin Type selector */}
                    <div className="space-y-3">
                      <p className="text-xs font-extrabold tracking-wider uppercase text-primary">
                        1. What is your skin type?
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Oily', 'Dry', 'Combination', 'Other'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSkinType(type)}
                            className={`px-4 py-2.5 rounded-full text-xs font-bold border-2 transition-all cursor-pointer ${
                              skinType === type
                                ? 'bg-secondary text-white border-secondary shadow-sm font-extrabold'
                                : 'bg-white border-secondary/10 text-primary/80 hover:bg-secondary/5'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>

                      {/* Other Skin Type text input */}
                      {skinType === 'Other' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-2"
                        >
                          <input
                            type="text"
                            placeholder="Please specify your skin type..."
                            value={skinTypeOther}
                            onChange={(e) => setSkinTypeOther(e.target.value)}
                            className="w-full bg-white border-2 border-secondary/20 rounded-xl px-4 py-2.5 text-xs font-bold text-primary focus:border-secondary outline-none shadow-inner"
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Primary Concern selector */}
                    <div className="space-y-3">
                      <p className="text-xs font-extrabold tracking-wider uppercase text-primary">
                        2. What is your primary skincare concern?
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Acne', 'Pigmentation', 'Dryness', 'Other'].map((concern) => (
                          <button
                            key={concern}
                            type="button"
                            onClick={() => setSkinConcern(concern)}
                            className={`px-4 py-2.5 rounded-full text-xs font-bold border-2 transition-all cursor-pointer ${
                              skinConcern === concern
                                ? 'bg-secondary text-white border-secondary shadow-sm font-extrabold'
                                : 'bg-white border-secondary/10 text-primary/80 hover:bg-secondary/5'
                            }`}
                          >
                            {concern}
                          </button>
                        ))}
                      </div>

                      {/* Other Skin Concern text input */}
                      {skinConcern === 'Other' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-2"
                        >
                          <input
                            type="text"
                            placeholder="Please specify your skincare concern..."
                            value={skinConcernOther}
                            onChange={(e) => setSkinConcernOther(e.target.value)}
                            className="w-full bg-white border-2 border-secondary/20 rounded-xl px-4 py-2.5 text-xs font-bold text-primary focus:border-secondary outline-none shadow-inner"
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* HAIRCARE SECTION */}
                {(consultationType === 'haircare' || consultationType === 'both') && (
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6 bg-primary/5 p-6 rounded-2xl border border-primary/10"
                  >
                    <h3 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
                      <Sprout className="h-5 w-5 text-secondary" />
                      Haircare Consultation Parameters
                    </h3>

                    {/* Scalp/Hair Type selector */}
                    <div className="space-y-3">
                      <p className="text-xs font-extrabold tracking-wider uppercase text-primary">
                        1. What is your hair / scalp type?
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Oily Scalp', 'Dry Scalp', 'Sensitive Scalp', 'Other'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setHairType(type)}
                            className={`px-4 py-2.5 rounded-full text-xs font-bold border-2 transition-all cursor-pointer ${
                              hairType === type
                                ? 'bg-secondary text-white border-secondary shadow-sm font-extrabold'
                                : 'bg-white border-primary/10 text-primary/80 hover:bg-primary/5'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>

                      {/* Other Scalp/Hair Type text input */}
                      {hairType === 'Other' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-2"
                        >
                          <input
                            type="text"
                            placeholder="Please specify your scalp / hair type..."
                            value={hairTypeOther}
                            onChange={(e) => setHairTypeOther(e.target.value)}
                            className="w-full bg-white border-2 border-secondary/20 rounded-xl px-4 py-2.5 text-xs font-bold text-primary focus:border-secondary outline-none shadow-inner"
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Primary Concern selector */}
                    <div className="space-y-3">
                      <p className="text-xs font-extrabold tracking-wider uppercase text-primary">
                        2. What is your primary haircare concern?
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Hair Fall', 'Dandruff', 'Premature Greying', 'Other'].map((concern) => (
                          <button
                            key={concern}
                            type="button"
                            onClick={() => setHairConcern(concern)}
                            className={`px-4 py-2.5 rounded-full text-xs font-bold border-2 transition-all cursor-pointer ${
                              hairConcern === concern
                                ? 'bg-secondary text-white border-secondary shadow-sm font-extrabold'
                                : 'bg-white border-primary/10 text-primary/80 hover:bg-primary/5'
                            }`}
                          >
                            {concern}
                          </button>
                        ))}
                      </div>

                      {/* Other Hair Concern text input */}
                      {hairConcern === 'Other' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-2"
                        >
                          <input
                            type="text"
                            placeholder="Please specify your haircare concern..."
                            value={hairConcernOther}
                            onChange={(e) => setHairConcernOther(e.target.value)}
                            className="w-full bg-white border-2 border-secondary/20 rounded-xl px-4 py-2.5 text-xs font-bold text-primary focus:border-secondary outline-none shadow-inner"
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Submit CTA */}
              <button
                type="button"
                onClick={handleConsultationSubmit}
                disabled={!isFormValid()}
                className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                  isFormValid()
                    ? 'bg-primary text-white hover:bg-secondary border-2 border-transparent shadow-lg cursor-pointer uppercase tracking-wider text-xs font-extrabold'
                    : 'bg-outline-variant/20 text-on-surface-variant/40 cursor-not-allowed border-2 border-transparent text-xs uppercase tracking-wider font-extrabold'
                }`}
              >
                <Sparkles className="h-4.5 w-4.5 text-secondary animate-pulse" />
                <span>Formulate Personalized Regimen</span>
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="recommendation-results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl border-2 border-luxury-gold shadow-md space-y-6">
                
                {/* Result Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-secondary/15">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-secondary uppercase bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/25">
                      Your Customized Routine
                    </span>
                    <h2 className="font-serif text-3xl font-bold mt-3 text-primary">
                      Therapeutic Botanical Plan
                    </h2>
                  </div>
                  <button 
                    onClick={handleReset}
                    className="px-5 py-2 hover:bg-secondary/10 text-secondary hover:text-primary rounded-full transition-all cursor-pointer border border-secondary/20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                    title="Take quiz again"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Retake Consultation</span>
                  </button>
                </div>

                {/* Narrative summary based on selected options */}
                <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/20 space-y-3">
                  <p className="text-on-surface-variant text-sm font-medium leading-relaxed font-sans">
                    Based on your biological diagnostic inputs, our herbal experts have formulated a tailored holistic treatment.
                  </p>
                  <ul className="text-xs text-on-surface-variant space-y-1.5 font-bold font-sans">
                    {(consultationType === 'skincare' || consultationType === 'both') && (
                      <li className="flex items-center gap-2 text-primary">
                        <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                        <span>Skincare Routine: Optimized for {skinType === 'Other' ? skinTypeOther : skinType} skin targeting {skinConcern === 'Other' ? skinConcernOther : skinConcern}.</span>
                      </li>
                    )}
                    {(consultationType === 'haircare' || consultationType === 'both') && (
                      <li className="flex items-center gap-2 text-primary">
                        <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                        <span>Haircare Routine: Optimized for {hairType === 'Other' ? hairTypeOther : hairType} scalp targeting {hairConcern === 'Other' ? hairConcernOther : hairConcern}.</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Recommended Products Grid */}
                <div className="space-y-4">
                  <h3 className="text-xs font-extrabold tracking-widest uppercase text-primary">
                    Recommended Therapeutic Formulations:
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendations.map((prod) => {
                      const isFav = favorites.includes(prod.id);
                      return (
                        <div 
                          key={prod.id}
                          className="bg-background rounded-2xl overflow-hidden border border-secondary/15 p-5 flex gap-4 hover:border-secondary hover:shadow-md transition-all group cursor-pointer"
                          onClick={() => onOpenProductDetail(prod)}
                        >
                          <img 
                            alt={prod.name} 
                            className="w-24 h-24 object-cover rounded-xl border border-secondary/10 group-hover:scale-102 transition-transform duration-300 shrink-0" 
                            src={prod.image || null} 
                          />
                          <div className="flex flex-col justify-between flex-grow min-w-0">
                            <div>
                              <div className="flex justify-between items-start gap-1">
                                <h4 className="font-bold text-sm text-primary truncate group-hover:text-secondary transition-colors">
                                  {prod.name}
                                </h4>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleFavorite(prod.id);
                                  }}
                                  className="text-on-surface-variant hover:text-red-500 transition-colors p-0.5 shrink-0"
                                >
                                  <Heart className={`h-4 w-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                                </button>
                              </div>
                              <p className="text-on-surface-variant font-sans text-xs mt-1 line-clamp-2">
                                {prod.description}
                              </p>
                            </div>
                            
                            <div className="flex justify-between items-center mt-3 pt-2 border-t border-secondary/10">
                              <span className="font-serif font-bold text-sm text-primary">
                                ₹{prod.price}
                              </span>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onAddToCart(prod, 1);
                                }}
                                className="px-3 py-1.5 bg-primary hover:bg-secondary text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-1 cursor-pointer"
                              >
                                <ShoppingBag className="h-3 w-3 text-secondary" />
                                <span>Add to Cart</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Final Checkout actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-secondary/15">
                  <button
                    onClick={openWhatsAppExpert}
                    className="flex-1 py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="h-4.5 w-4.5" />
                    <span>Discuss Regimen with Expert</span>
                  </button>
                  <button
                    onClick={() => {
                      recommendations.forEach((r) => onAddToCart(r, 1));
                    }}
                    className="flex-1 py-4 bg-primary text-white hover:bg-secondary rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-4.5 w-4.5 text-secondary" />
                    <span>Add All Recommendations to Cart</span>
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
