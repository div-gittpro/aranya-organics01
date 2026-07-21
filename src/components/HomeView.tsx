import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, MessageSquare, ShieldCheck, Heart, ShoppingBag, CheckCircle, Sparkles, Star, ChevronLeft, ChevronRight, RefreshCw, UserCheck } from 'lucide-react';
import { Product, Review } from '../types';
import { PRODUCTS, REVIEWS } from '../data';
const homeImages = import.meta.glob('../assests/*.{png,jpg,jpeg}', { eager: true, import: 'default' }) as Record<string, string>;
const heroProduct = homeImages['../assests/hero_product.jpeg'];
const aboutIngredients = homeImages['../assests/about_ingredients.jpeg'];
const consultationImage = homeImages['../assests/forest_path.jpeg'];

const getReviewInitials = (author: string) =>
  author
    .split('•')[0]
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const getDummyAvatar = (author: string) => {
  const initials = getReviewInitials(author);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="48" fill="#f4ead7"/>
      <circle cx="48" cy="34" r="16" fill="#c5a059"/>
      <path d="M22 82c5-20 17-30 26-30s21 10 26 30" fill="#0a3b31"/>
      <text x="48" y="91" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#ffffff">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onOpenProductDetail: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function HomeView({
  setCurrentTab,
  onAddToCart,
  onOpenProductDetail,
  favorites,
  onToggleFavorite,
}: HomeViewProps) {
  // Consultation State
  const [skinType, setSkinType] = useState<'Dry' | 'Oily' | 'Sensitive' | 'Combination' | ''>('');
  const [skinConcern, setSkinConcern] = useState<'Acne' | 'Dullness' | 'Aging' | 'Hair Fall' | ''>('');
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  // Filter the user-requested featured products for the home page
  const featuredProductKeywords = [
    'avocado cream with spf',
    'vitamin-c serum',
    '5 protein mask',
    '35 herbs shampoo',
    '35 herb shampoo',
    'rosemary hair oil',
    'rosemary hibiscus oil',
    'rosemary hibiscus hair oil',
    'korean whitening cream'
  ];

  const featuredProducts = PRODUCTS.filter(p => 
    featuredProductKeywords.includes(p.name.toLowerCase())
  );

  const handleConsultationSubmit = () => {
    if (!skinType || !skinConcern) return;
    
    // Find a recommendation based on skinConcern
    let rec: Product | null = null;
    if (skinConcern === 'Acne') {
      rec = PRODUCTS.find(p => p.id === 'aloe-neem-tulsi') || PRODUCTS[0];
    } else if (skinConcern === 'Dullness') {
      rec = PRODUCTS.find(p => p.id === 'vitamin-c') || PRODUCTS[1];
    } else if (skinConcern === 'Aging') {
      rec = PRODUCTS.find(p => p.id === 'gold-hyaluronic') || PRODUCTS[4];
    } else if (skinConcern === 'Hair Fall') {
      rec = PRODUCTS.find(p => p.id === 'hair-growth-oil') || PRODUCTS[3];
    } else {
      rec = PRODUCTS[0];
    }

    setRecommendedProduct(rec);
    setConsultationSubmitted(true);
  };

  const handleConsultationReset = () => {
    setSkinType('');
    setSkinConcern('');
    setConsultationSubmitted(false);
    setRecommendedProduct(null);
  };

  const openWhatsAppExpert = () => {
    const message = `Hello Aranya Organic, I would like a personalized skincare consultation! My details: Skin Type: ${skinType || 'Not specified'}, Concern: ${skinConcern || 'Not specified'}. Please guide me!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encoded}`, '_blank');
  };

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-6 md:px-16 bg-surface-container-low overflow-hidden py-16">
        {/* Subtle blur background decorations with gold & green highlights */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[90px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-10 w-full">
          {/* Hero Left */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary border border-secondary/40 shadow-sm">
              <Sprout className="h-4 w-4 text-secondary" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">Modern Botanical Wellness</span>
              <Sparkles className="h-3 w-3 text-secondary animate-pulse" />
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl text-primary leading-tight font-bold tracking-tight">
              Rooted in nature, <br />
              <span className="text-secondary italic">crafted for you.</span>
            </h1>
            
            <p className="text-on-surface-variant font-sans text-base md:text-lg max-w-md leading-relaxed">
              Pure. Natural. Handmade. Experience the luxury of artisanal skincare crafted with time-honored ingredients and modern botanical efficacy.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setCurrentTab('products')}
                className="px-8 py-4 bg-primary text-on-primary hover:bg-primary-container hover:border-secondary hover:text-white border-2 border-transparent rounded-full font-bold transition-all gold-glow-hover hover:scale-102 active:scale-95 flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>View Products</span>
                <Sparkles className="h-4 w-4 text-secondary" />
              </button>
              <button 
                onClick={() => {
                  const message = "Hello Aranya Organic, I would like to order some of your beautiful skincare products!";
                  window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="px-8 py-4 border-2 border-secondary bg-white/40 hover:bg-secondary/10 text-secondary hover:text-secondary-fixed-dim rounded-full font-bold transition-all hover:scale-102 active:scale-95 flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </motion.div>

          {/* Hero Right with Gold Accent Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Elegant double border for artisanal picture frame */}
            <div className="absolute -inset-3 rounded-[44px] border border-secondary/30 pointer-events-none" />
            <div className="absolute -inset-1.5 rounded-[42px] border border-primary/20 pointer-events-none" />
            <div className="relative z-10 w-full rounded-[40px] overflow-hidden shadow-2xl border-2 border-secondary/20 bg-white group">
              <img 
                alt="Artisanal Skincare Products"
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
                src={heroProduct}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating 100% Organic Badge */}
            <motion.div 
              animate={{ rotate: [12, 15, 12] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 gold-gradient-bg text-on-secondary p-6 rounded-full aspect-square flex flex-col items-center justify-center shadow-xl z-20 border-2 border-white/60 font-bold"
            >
              <span className="font-serif text-2xl font-bold leading-none text-primary">100%</span>
              <span className="text-[10px] uppercase font-extrabold tracking-widest mt-0.5 text-primary">Organic</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Badges / Why Choose Us with gold accent shadows */}
      <section className="py-20 bg-background border-b border-secondary/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Sprout className="h-8 w-8 text-primary" />,
                title: 'Natural Ingredients',
                desc: 'Sourced from the heart of the forest',
              },
              {
                icon: <Sparkles className="h-8 w-8 text-secondary" />,
                title: 'Handmade Products',
                desc: 'Crafted with artisanal care & purity',
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: '100% Organic & Vegan',
                desc: 'Zero synthetic fillers or parabens',
              },
              {
                icon: <UserCheck className="h-8 w-8 text-secondary" />,
                title: 'Skin Friendly',
                desc: 'pH balanced perfectly for all skin types',
              },
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:bg-secondary-container transition-all duration-300 shadow-md border-2 border-secondary/15 group-hover:border-secondary/60">
                  {badge.icon}
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-primary text-base group-hover:text-secondary transition-colors">{badge.title}</h3>
                  <p className="text-xs text-on-surface-variant mt-1 font-medium">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Loved by Our Customers Section (PROMOTED TO THE START ABOVE ABOUT) */}
      <section className="py-24 bg-surface-container-low border-b border-secondary/15 relative overflow-hidden">
        {/* Subtle decorative gold details */}
        <div className="absolute top-10 left-10 w-24 h-24 border border-secondary/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-36 h-36 border border-secondary/10 rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] text-secondary font-extrabold uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/30">
              Honest Feedback
            </span>
            <h2 className="font-serif text-4xl text-primary font-bold mt-2">Loved by Our Customers</h2>
            <div className="flex justify-center gap-1 text-secondary mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
            <p className="text-on-surface-variant font-sans text-sm font-medium">
              Discover how our organic botanical formulas have transformed daily self-care rituals.
            </p>
          </div>

          {/* Infinite Marquee Review Ticker */}
          <div className="w-full overflow-hidden py-4 relative">
            {/* Left and Right ambient gradients for smooth fade out at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max gap-6 animate-marquee hover:pause-marquee">
              {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="w-[300px] sm:w-[380px] bg-white p-6 sm:p-8 rounded-3xl shadow-md border-2 border-luxury-gold flex flex-col justify-between hover:shadow-xl hover:border-secondary transition-all duration-300 shrink-0 relative select-none"
                >
                  {/* Decorative big quotes */}
                  <div className="absolute top-4 right-6 font-serif text-5xl text-secondary/15 select-none font-bold">
                    “
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-secondary/10">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-secondary shadow-inner shrink-0 bg-secondary/10">
                        <img 
                          alt={review.author} 
                          className="w-full h-full object-cover" 
                          src={review.avatar || getDummyAvatar(review.author)} 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-extrabold text-primary text-xs sm:text-sm">{review.author}</h4>
                        <p className="text-[9px] text-secondary font-sans font-bold uppercase tracking-wider">Verified Botanical Patron</p>
                      </div>
                    </div>

                    <div className="flex text-secondary gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    
                    <p className="text-primary font-sans italic text-xs sm:text-sm leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Section with replacement content */}
      <section id="about-section" className="py-24 bg-surface-container-lowest organic-texture border-b border-secondary/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* About Left Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 border-2 border-secondary/35 rounded-2xl pointer-events-none" />
              <div className="absolute -inset-2 border border-primary/20 rounded-xl pointer-events-none" />
              <div className="relative z-10 overflow-hidden rounded-xl shadow-xl border-2 border-secondary/20 bg-white">
                <img 
                  alt="Raw Ayurvedic Ingredients"
                  className="w-full h-auto block" 
                  src={aboutIngredients}
                />
              </div>
              {/* Floating aesthetic leaf */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full gold-gradient-bg text-primary flex items-center justify-center shadow-md border-2 border-white z-20">
                <Sprout className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* About Right Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-1">
                <span className="text-xs text-secondary font-extrabold uppercase tracking-widest bg-secondary/10 px-3.5 py-1 rounded-full border border-secondary/20">Our Sacred Philosophy</span>
                <h2 className="font-serif text-4xl text-primary font-bold mt-2">About Aranya Organic</h2>
              </div>
              
              <p className="text-on-surface-variant font-sans leading-relaxed text-base font-semibold text-primary">
                At Aranya Organic, we believe that true wellness begins with conscious choices. Our products are thoughtfully crafted using carefully selected organic ingredients, bringing together nature, quality, and purpose in every bottle.
              </p>
              
              <p className="text-on-surface-variant font-sans leading-relaxed text-base font-semibold text-primary">
                We don’t believe in unnecessary fillers or exaggerated promises. Instead, we focus on creating products that are simple, effective, and made with integrity—using ingredients chosen for their purity and carefully formulated to become a part of your daily self-care ritual.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-secondary/15">
                <div className="flex items-center gap-3 text-primary font-sans font-bold text-sm">
                  <CheckCircle className="text-secondary h-5 w-5 shrink-0" />
                  <span>Organic & Naturally Sourced</span>
                </div>
                <div className="flex items-center gap-3 text-primary font-sans font-bold text-sm">
                  <CheckCircle className="text-secondary h-5 w-5 shrink-0" />
                  <span>Crafted in Small Batches</span>
                </div>
                <div className="flex items-center gap-3 text-primary font-sans font-bold text-sm">
                  <CheckCircle className="text-secondary h-5 w-5 shrink-0" />
                  <span>100% Vegan & Cruelty-Free</span>
                </div>
                <div className="flex items-center gap-3 text-primary font-sans font-bold text-sm">
                  <CheckCircle className="text-secondary h-5 w-5 shrink-0" />
                  <span>Quality First & Skin Friendly</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentTab('about')}
                  className="px-8 py-3 bg-primary hover:bg-secondary text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md border border-transparent hover:border-white/20 hover:scale-102"
                >
                  Read Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Botanical Essentials (Featured Products Grid) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-4xl text-primary font-bold">Botanical Essentials</h2>
              <p className="text-on-surface-variant font-sans mt-2 font-medium">Explore our most-loved formulas for radiant, healthy, and organic skin.</p>
            </div>
            <button 
              onClick={() => setCurrentTab('products')}
              className="text-primary font-bold font-sans border-b-2 border-secondary hover:text-secondary hover:border-secondary transition-all pb-1 cursor-pointer text-sm"
            >
              View All Products
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => {
              const isFav = favorites.includes(product.id);
              return (
                <div 
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border-2 border-luxury-gold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => onOpenProductDetail(product)}
                >
                  <div className="aspect-[4/5] bg-surface-container relative overflow-hidden">
                    <img 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      src={product.image || null}
                    />
                    
                    {/* Favorite Heart Trigger */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(product.id);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-primary transition-all hover:bg-white hover:text-red-500 active:scale-90 shadow-sm cursor-pointer z-10"
                      aria-label="Add to Wishlist"
                    >
                      <Heart className={`h-5 w-5 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>

                    {/* Tag badge */}
                    {product.tag && (
                      <div className="absolute bottom-4 left-4 bg-secondary text-white text-[10px] uppercase font-extrabold tracking-widest px-3.5 py-1 rounded-full shadow-md border border-white/20">
                        {product.tag}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow border-t border-secondary/15">
                    <h3 className="font-serif font-bold text-lg text-primary truncate group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-1.5 line-clamp-1 font-medium">{product.description}</p>
                    
                    <div className="flex justify-between items-center mt-6 pt-2 border-t border-secondary/15">
                      <span className="font-serif font-bold text-[10px] uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">Organic</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product, 1);
                        }}
                        className="px-4 py-2 bg-primary hover:bg-secondary text-white hover:text-white rounded-full flex items-center justify-center gap-1.5 text-xs font-bold transition-all duration-300 shadow-md cursor-pointer"
                        aria-label="Add to Cart"
                      >
                        <ShoppingBag className="h-3.5 w-3.5 text-secondary" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Personalized Skincare Consultation Section */}
      <section id="consultation-section" className="py-24 bg-primary text-white overflow-hidden relative border-t border-b border-primary-container">
        {/* Decorative gold vector elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform origin-top pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Consultation Form/Interface */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] text-secondary font-extrabold uppercase tracking-widest bg-secondary/20 px-3.5 py-1.5 rounded-full border border-secondary/30">
                  Ayurvedic Skin Intelligence
                </span>
                <h2 className="font-serif text-4xl text-white font-bold tracking-tight mt-2">
                  Personalized Skincare Consultation
                </h2>
              </div>
              <p className="text-on-primary-container text-base leading-relaxed font-medium">
                Not sure which botanical products are right for your skin? Let our smart expert guide you through a custom routine tailored precisely to your needs.
              </p>

              <AnimatePresence mode="wait">
                {!consultationSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6 bg-white/5 p-6 rounded-3xl border-2 border-secondary/20 backdrop-blur-md shadow-2xl"
                  >
                    {/* Skin Type selector */}
                    <div>
                      <h4 className="text-sm font-extrabold tracking-wider uppercase text-secondary mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                        1. Select Your Skin Type
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Dry', 'Oily', 'Sensitive', 'Combination'].map((type) => (
                          <button
                            key={type}
                            onClick={() => setSkinType(type as any)}
                            className={`px-4 py-2.5 rounded-full text-xs font-bold border-2 transition-all cursor-pointer ${
                              skinType === type
                                ? 'bg-secondary text-on-secondary border-secondary shadow-md scale-102 font-extrabold'
                                : 'bg-transparent border-white/20 text-white/80 hover:bg-white/10 hover:border-white/50'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Skin Concern selector */}
                    <div>
                      <h4 className="text-sm font-extrabold tracking-wider uppercase text-secondary mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                        2. Select Your Primary Concern
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Acne', 'Dullness', 'Aging', 'Hair Fall'].map((concern) => (
                          <button
                            key={concern}
                            onClick={() => setSkinConcern(concern as any)}
                            className={`px-4 py-2.5 rounded-full text-xs font-bold border-2 transition-all cursor-pointer ${
                              skinConcern === concern
                                ? 'bg-secondary text-on-secondary border-secondary shadow-md scale-102 font-extrabold'
                                : 'bg-transparent border-white/20 text-white/80 hover:bg-white/10 hover:border-white/50'
                            }`}
                          >
                            {concern}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleConsultationSubmit}
                      disabled={!skinType || !skinConcern}
                      className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                        skinType && skinConcern
                          ? 'bg-secondary text-on-secondary hover:bg-white hover:text-primary hover:border-secondary border-2 border-transparent shadow-lg cursor-pointer font-extrabold uppercase tracking-wider text-xs'
                          : 'bg-white/10 text-white/40 cursor-not-allowed border-2 border-transparent'
                      }`}
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Get Recommended Routine</span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white text-primary p-8 rounded-3xl space-y-5 shadow-2xl border-2 border-secondary"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/20">
                          Your Recommendation
                        </span>
                        <h4 className="font-serif text-2xl font-bold mt-3 text-primary">
                          {recommendedProduct?.name}
                        </h4>
                      </div>
                      <button 
                        onClick={handleConsultationReset}
                        className="p-1.5 hover:bg-secondary/10 rounded-full text-secondary hover:text-primary transition-all cursor-pointer border border-secondary/10"
                        title="Reset questionnaire"
                      >
                        <RefreshCw className="h-5 w-5 animate-spin-slow" />
                      </button>
                    </div>

                    <p className="text-on-surface-variant text-sm font-sans leading-relaxed">
                      Based on your <span className="font-extrabold text-primary">{skinType}</span> skin and <span className="font-extrabold text-primary">{skinConcern}</span> concerns, our herbal experts recommend integrating this therapeutic organic formula:
                    </p>

                    {recommendedProduct && (
                      <div className="flex gap-4 p-4 bg-secondary/5 rounded-2xl border-2 border-secondary/25 shadow-inner">
                        <img 
                          alt={recommendedProduct.name} 
                          className="w-16 h-16 object-cover rounded-lg border border-secondary/30" 
                          src={recommendedProduct.image || null} 
                        />
                        <div className="flex flex-col justify-center">
                          <p className="font-bold text-sm text-primary">{recommendedProduct.name}</p>
                          <p className="text-xs text-on-surface-variant font-sans line-clamp-1 mt-1">{recommendedProduct.description}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => {
                          if (recommendedProduct) {
                            onAddToCart(recommendedProduct, 1);
                          }
                        }}
                        className="flex-1 py-3 bg-primary text-white rounded-full font-bold hover:bg-secondary hover:text-on-secondary text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer border border-transparent hover:border-white/20"
                      >
                        Add Routine to Cart
                      </button>
                      <button
                        onClick={openWhatsAppExpert}
                        className="py-3 px-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                      >
                        Ask Expert
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-secondary h-6 w-6 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-base">Deep Skin Analysis</p>
                    <p className="text-sm text-on-primary-container">Understanding your skin's true needs and botanical compatibility</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-secondary h-6 w-6 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-base">Custom Routine Design</p>
                    <p className="text-sm text-on-primary-container">Step-by-step guidance for morning and night Ayurvedic care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Right Image */}
            <div className="relative">
              {/* Outer glowing ring */}
              <div className="absolute -inset-4 rounded-3xl border border-secondary/30 pointer-events-none" />
              <div className="absolute -inset-2 rounded-2xl border-2 border-primary/20 pointer-events-none" />
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-secondary p-1 rotate-2 shadow-2xl transition-transform hover:rotate-0 duration-500 bg-white/10">
                <img 
                  alt="Forest botanicals used in Aranya Organic consultations"
                  className="w-full h-full object-cover rounded-2xl" 
                  src={consultationImage}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
