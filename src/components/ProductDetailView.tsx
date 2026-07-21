import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Heart, Minus, Plus, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { Product } from '../types';

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
  const [added, setAdded] = useState(false);
  const isFav = favorites.includes(product.id);

  useEffect(() => {
    setSelectedVariant(product.variants?.[0] || '');
    setQuantity(1);
    setAdded(false);
  }, [product]);

  const addToCart = () => {
    onAddToCart(product, quantity, selectedVariant || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

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
          <div className="bg-white border-2 border-luxury-gold rounded-2xl overflow-hidden shadow-md">
            <div className="aspect-square bg-surface-container-low">
              <img
                alt={product.name}
                className="w-full h-full object-cover"
                src={product.image || null}
              />
            </div>
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
                <button
                  onClick={() => onToggleFavorite(product.id)}
                  className="w-11 h-11 rounded-full bg-white border border-secondary/20 shadow-sm flex items-center justify-center text-primary hover:text-red-500 transition-colors cursor-pointer shrink-0"
                  aria-label="Add to wishlist"
                >
                  <Heart className={`h-5 w-5 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                </button>
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
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-24 h-10 rounded-xl border-2 border-secondary/20 bg-white text-center font-bold text-primary outline-none focus:border-secondary"
                />
                <button
                  onClick={() => setQuantity((qty) => qty + 1)}
                  className="w-10 h-10 rounded-full border border-secondary/25 bg-background hover:bg-secondary/10 flex items-center justify-center cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4 text-primary" />
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
