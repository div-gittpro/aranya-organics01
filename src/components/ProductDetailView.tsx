import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Heart, MessageSquare, Minus, Pause, Play, Plus, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { Product } from '../types';
import { getBulkOrderWhatsAppUrl, MAX_RETAIL_QUANTITY } from '../companyInfo';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity?: number, selectedVariant?: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function ProductDetailView({
  product,
  onBack,
  onAddToCart,
  favorites,
  onToggleFavorite,
}: ProductDetailViewProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [bulkQuantity, setBulkQuantity] = useState('');
  const [added, setAdded] = useState(false);
  const isFav = favorites.includes(product.id);

  const [activeImage, setActiveImage] = useState(0);
  const [isImageManuallyPaused, setIsImageManuallyPaused] = useState(false);
  const [isImageHoverPaused, setIsImageHoverPaused] = useState(false);
  const isImagePaused = isImageManuallyPaused || isImageHoverPaused;
  const displayImages = product.images?.length ? product.images : [product.image];
  const hasMultipleImages = displayImages.length > 1;

  useEffect(() => {
    setSelectedVariant(product.variants?.[0] || '');
    setQuantity(1);
    setBulkQuantity('');
    setAdded(false);
    setActiveImage(0);
    setIsImageManuallyPaused(false);
    setIsImageHoverPaused(false);
  }, [product]);

  useEffect(() => {
    if (!hasMultipleImages || isImagePaused) return;

    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % displayImages.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, [displayImages.length, hasMultipleImages, isImagePaused]);

  const addToCart = () => {
    onAddToCart(product, quantity, selectedVariant || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const openBulkOrderChat = () => {
    const quantity = parseInt(bulkQuantity, 10);
    if (Number.isNaN(quantity) || quantity <= MAX_RETAIL_QUANTITY) return;

    window.open(getBulkOrderWhatsAppUrl(product.name, quantity), '_blank');
  };

  const updateQuantity = (nextQuantity: number) => {
    setQuantity(Math.min(MAX_RETAIL_QUANTITY, Math.max(1, nextQuantity)));
  };

  const updateBulkQuantity = (nextQuantity: string) => {
    setBulkQuantity(nextQuantity);
  };

  const parsedBulkQuantity = parseInt(bulkQuantity, 10);
  const canBulkOrder = !Number.isNaN(parsedBulkQuantity) && parsedBulkQuantity > MAX_RETAIL_QUANTITY;

  const variantLabel = product.name.toLowerCase().includes('lipstick')
    ? 'Select Lipstick Shade'
    : product.subCategory === 'Hair Colour'
      ? 'Select Hair Colour'
      : product.subCategory === 'Lip Balm'
        ? 'Select Flavour'
        : 'Select Variant';

  return (
    <div className="bg-background min-h-screen px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-primary hover:text-secondary font-bold text-sm transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
        >
          <div className="flex flex-col gap-4">
            <div className="bg-white border-2 border-luxury-gold rounded-2xl overflow-hidden shadow-md">
              <div
                className="relative aspect-[4/5] bg-white"
                onMouseEnter={() => setIsImageHoverPaused(true)}
                onMouseLeave={() => setIsImageHoverPaused(false)}
                onFocus={() => setIsImageHoverPaused(true)}
                onBlur={() => setIsImageHoverPaused(false)}
              >
                {displayImages.map((image, idx) => (
                  <img
                    key={`${product.id}-detail-${idx}`}
                    alt={idx === 0 ? product.name : `${product.name} view ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                      activeImage === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={image || null}
                  />
                ))}

                {hasMultipleImages && (
                  <>
                    <button
                      onClick={() => setIsImageManuallyPaused((current) => !current)}
                      className="absolute top-4 left-4 z-10 h-10 w-10 rounded-full bg-white/85 backdrop-blur text-primary shadow-sm flex items-center justify-center hover:bg-white hover:text-secondary transition-colors cursor-pointer"
                      aria-label={isImageManuallyPaused ? 'Resume product image rotation' : 'Pause product image rotation'}
                    >
                      {isImageManuallyPaused ? <Play className="h-4.5 w-4.5" /> : <Pause className="h-4.5 w-4.5" />}
                    </button>

                    <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                      {displayImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveImage(idx);
                            setIsImageManuallyPaused(true);
                          }}
                          className={`h-2.5 w-2.5 rounded-full border border-white/80 transition-all cursor-pointer ${
                            activeImage === idx ? 'bg-white scale-110' : 'bg-white/45 hover:bg-white/80'
                          }`}
                          aria-label={`Show ${product.name} image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            {displayImages.length > 1 && (
              <div className="flex gap-4">
                {displayImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveImage(idx);
                      setIsImageManuallyPaused(true);
                    }}
                    className={`w-20 h-[100px] rounded-xl overflow-hidden border-2 bg-white cursor-pointer transition-all ${
                      activeImage === idx ? 'border-secondary shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <section className="space-y-7">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] text-secondary font-extrabold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/20">
                  {product.category}
                </span>
                {product.subCategory && (
                  <span className="text-[10px] text-primary font-extrabold uppercase tracking-widest bg-primary/5 px-3.5 py-1.5 rounded-full border border-primary/10">
                    {product.subCategory}
                  </span>
                )}
              </div>

              <div className="flex items-start justify-between gap-4">
                <h1 className="font-serif text-4xl md:text-5xl text-primary font-bold leading-tight">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-xs text-on-surface-variant font-bold">
                  {product.rating} / 5.0
                </span>
              </div>

              <p className="text-on-surface-variant text-base leading-relaxed font-medium max-w-xl">
                {product.description}
              </p>
            </div>

            {product.variants && product.variants.length > 0 && (
              <div className="space-y-3 p-5 bg-white rounded-2xl border border-secondary/15 shadow-sm">
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-primary">
                  {variantLabel}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {product.variants.map((variant) => {
                    const swatch = product.variantColors?.[variant];
                    return (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`min-h-12 px-3 py-2 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-2 text-left ${
                          selectedVariant === variant
                            ? 'border-secondary bg-secondary/10 shadow-sm'
                            : 'border-secondary/15 bg-white hover:border-secondary/50'
                        }`}
                      >
                        {swatch && (
                          <span
                            className="w-6 h-6 rounded-md border border-black/10 shadow-inner shrink-0"
                            style={{ backgroundColor: swatch }}
                          />
                        )}
                        <span className="text-xs font-bold text-primary">{variant}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="space-y-3 p-5 bg-white rounded-2xl border border-secondary/15 shadow-sm">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-primary">
                Select Quantity
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((qty) => Math.max(1, qty - 1))}
                  className="w-10 h-10 rounded-full border border-secondary/25 bg-background hover:bg-secondary/10 flex items-center justify-center cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4 text-primary" />
                </button>
                <input
                  type="number"
                  min="1"
                  max={MAX_RETAIL_QUANTITY}
                  value={quantity}
                  onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                  className="w-24 h-10 rounded-xl border-2 border-secondary/20 bg-white text-center font-bold text-primary outline-none focus:border-secondary"
                />
                <button
                  onClick={() => updateQuantity(quantity + 1)}
                  disabled={quantity >= MAX_RETAIL_QUANTITY}
                  className="w-10 h-10 rounded-full border border-secondary/25 bg-background hover:bg-secondary/10 disabled:opacity-45 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4 text-primary" />
                </button>
              </div>
              <p className="text-[11px] text-on-surface-variant font-semibold">
                Max {MAX_RETAIL_QUANTITY} products per retail order.
              </p>
            </div>

            <div className="space-y-4 p-5 bg-secondary/5 rounded-2xl border-2 border-luxury-gold shadow-sm">
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-primary">
                  Bulk Order
                </h2>
                <p className="text-xs text-on-surface-variant mt-1 font-semibold">
                  Need more than {MAX_RETAIL_QUANTITY}? Enter your custom quantity and contact the manufacturer on WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <input
                  type="number"
                  min={MAX_RETAIL_QUANTITY + 1}
                  value={bulkQuantity}
                  onChange={(e) => updateBulkQuantity(e.target.value)}
                  placeholder="Enter custom quantity"
                  className="w-full sm:w-56 h-11 rounded-xl border-2 border-secondary/20 bg-white px-4 text-center font-bold text-primary outline-none focus:border-secondary placeholder:text-on-surface-variant/60 placeholder:font-semibold"
                  aria-label="Bulk order quantity"
                />
                <button
                  onClick={openBulkOrderChat}
                  disabled={!canBulkOrder}
                  className="h-11 px-6 bg-secondary hover:bg-primary text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-xs uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Bulk Order on WhatsApp</span>
                </button>
              </div>
            </div>

            {product.features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm font-bold text-primary">
                    <Check className="h-4 w-4 text-secondary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={addToCart}
              className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {added ? (
                <>
                  <Check className="h-4.5 w-4.5" />
                  <span>Added to Cart</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4.5 w-4.5 text-secondary" />
                  <span>Add to Cart</span>
                  <Sparkles className="h-4 w-4 text-secondary" />
                </>
              )}
            </button>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
