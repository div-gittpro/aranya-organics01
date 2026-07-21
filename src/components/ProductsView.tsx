import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Search, ChevronDown, ChevronRight, ShoppingCart, ArrowUpDown, SlidersHorizontal, Check, RefreshCw, Sparkles } from 'lucide-react';
import { Product, CategoryItem } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';
import { getWhatsAppUrl } from '../companyInfo';

interface ProductsViewProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  onOpenProductDetail: (product: Product) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsCartOpen: () => void;
}

export default function ProductsView({
  onAddToCart,
  onOpenProductDetail,
  favorites,
  onToggleFavorite,
  searchQuery,
  setSearchQuery,
  setIsCartOpen,
}: ProductsViewProps) {
  // Navigation & filter states
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('');
  const [expandedAccordion, setExpandedAccordion] = useState<string>('');
  
  // Sorting state
  const [sortBy, setSortBy] = useState<'Recommended' | 'PriceAsc' | 'PriceDesc' | 'Rating'>('Recommended');

  const toggleAccordion = (categoryId: string) => {
    setExpandedAccordion(expandedAccordion === categoryId ? '' : categoryId);
    setActiveCategory(categoryId);
    setActiveSubCategory(''); // Default to showing all products of this category
  };

  // Filter products based on search, main category, and subcategory
  const filteredProducts = PRODUCTS.filter((product) => {
    // 1. Search Query filter (applied in combination with category filters)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(q));
      
      if (!matchesSearch) return false;
    }

    // 2. Main Category Filter
    if (activeCategory !== 'All' && product.category !== activeCategory) {
      return false;
    }

    // 3. Sub Category Filter (if active)
    if (activeSubCategory && product.subCategory !== activeSubCategory) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'PriceAsc') {
      return a.price - b.price;
    }
    if (sortBy === 'PriceDesc') {
      return b.price - a.price;
    }
    if (sortBy === 'Rating') {
      return b.rating - a.rating;
    }
    // Default 'Recommended' sort
    return b.rating + (b.tag ? 1 : 0) - (a.rating + (a.tag ? 1 : 0));
  });

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product, 1);
  };

  const openWhatsAppOrder = () => {
    const text = "Hello Aranya Organic, I would like to place a custom order of your organic skincare products. Please assist me!";
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row gap-8 min-h-screen">
      
      {/* 1. Left SideNavBar (Product Filters) */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24 bg-surface-container-low p-6 rounded-2xl shadow-md border border-secondary/15 space-y-8">
          <div>
            <h2 className="font-serif text-3xl text-primary font-bold">Categories</h2>
            <p className="text-[10px] text-secondary uppercase tracking-widest font-bold mt-1">
              Botanical Essentials
            </p>
          </div>

          {/* Categories Accordion list */}
          <nav className="space-y-3">
            {/* All Products Option */}
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveSubCategory('');
                setExpandedAccordion('');
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                activeCategory === 'All'
                  ? 'bg-primary text-white font-bold shadow-sm'
                  : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'
              }`}
            >
              <span className="font-sans text-sm font-semibold">All Products</span>
            </button>

            {CATEGORIES.map((cat) => {
              const isExpanded = expandedAccordion === cat.id;
              const isSelected = activeCategory === cat.id;

              return (
                <div key={cat.id} className="space-y-1">
                  <button
                    onClick={() => toggleAccordion(cat.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-primary text-white font-bold shadow-sm'
                        : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-sans text-sm font-semibold">{cat.name}</span>
                    </div>
                    {cat.subCategories && cat.subCategories.length > 0 && (
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>

                  {/* Subcategories list */}
                  <AnimatePresence initial={false}>
                    {isExpanded && cat.subCategories && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-6 pr-2 py-1 flex flex-col gap-1 text-sm border-l border-secondary/25 ml-3"
                      >
                        {/* Option to see all inside this category */}
                        <button
                          onClick={() => setActiveSubCategory('')}
                          className={`text-left py-1.5 px-3 rounded-md transition-all duration-200 cursor-pointer ${
                            activeSubCategory === ''
                              ? 'text-secondary font-bold bg-secondary/10 border-r-2 border-secondary'
                              : 'text-on-surface-variant hover:text-primary hover:translate-x-0.5'
                          }`}
                        >
                          All {cat.name}
                        </button>

                        {cat.subCategories.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setActiveSubCategory(sub)}
                            className={`text-left py-1.5 px-3 rounded-md transition-all duration-200 cursor-pointer ${
                              activeSubCategory === sub
                                ? 'text-secondary font-bold bg-secondary/10 border-r-2 border-secondary'
                                : 'text-on-surface-variant hover:text-primary hover:translate-x-0.5'
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Quick Wholesale WhatsApp Trigger and shortcuts */}
          <div className="pt-6 border-t border-outline-variant/30 space-y-4">
            <button 
              onClick={openWhatsAppOrder}
              className="w-full bg-secondary text-white hover:bg-secondary/90 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 shadow-sm scale-100 hover:scale-102 active:scale-95 transition-all cursor-pointer text-xs uppercase tracking-wider"
            >
              <ShoppingCart className="h-4 w-4" />
              WhatsApp Order
            </button>
            
            <div className="flex flex-col gap-1.5 pt-2">
              <button 
                onClick={setIsCartOpen}
                className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-variant/20 rounded-lg transition-colors text-sm font-semibold text-left cursor-pointer"
              >
                <ShoppingCart className="h-4 w-4 text-outline" />
                <span>My Cart</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Product Grid Area */}
      <section className="flex-grow">
        
        {/* Banner Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="font-serif text-4xl text-primary font-bold mb-2">Our Products</h1>
          <p className="text-on-surface-variant font-sans max-w-xl text-base leading-relaxed">
            Handcrafted with organic natural ingredients for your skin, hair and daily self-care. Ayurvedic wisdom meets modern efficacy.
          </p>

          {/* Horizontal main category tags */}
          <div className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start">
            {['All Products', 'Haircare', 'Skincare', 'Personal Care'].map((cat) => {
              const isSelected = activeCategory === cat || (cat === 'All Products' && activeCategory === 'All');
              return (
                <button
                  key={cat}
                  onClick={() => {
                    const mappedCat = cat === 'All Products' ? 'All' : cat;
                    setActiveCategory(mappedCat);
                    setExpandedAccordion(mappedCat === 'All' ? '' : mappedCat);
                    setActiveSubCategory('');
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-bold shadow-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-white scale-102 font-bold border border-secondary/30'
                      : 'bg-surface-container text-on-surface-variant hover:bg-primary-fixed-dim/40 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters and sorting row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-outline-variant/10">
          <h3 className="font-serif text-2xl text-primary font-bold text-center sm:text-left capitalize">
            {activeSubCategory || (activeCategory === 'All' ? 'All Products' : activeCategory)} 
            <span className="text-on-surface-variant font-normal text-base ml-2">
              ({sortedProducts.length})
            </span>
          </h3>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
              <SlidersHorizontal className="h-3 w-3" />
              Sort by:
            </span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer outline-none"
            >
              <option value="Recommended">Recommended</option>
              <option value="Rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Dynamic products list or empty state */}
        <AnimatePresence mode="wait">
          {sortedProducts.length === 0 ? (
            <motion.div 
              key="empty-state"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="py-16 text-center space-y-4"
            >
              <p className="text-on-surface-variant font-sans text-lg">
                No organic formulas found matching your filters.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  setActiveSubCategory('');
                  setExpandedAccordion('');
                }}
                className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-xs cursor-pointer hover:bg-secondary transition-all shadow-md"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key={`${activeCategory}-${activeSubCategory}-${sortBy}-${searchQuery}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
            >
              {sortedProducts.map((product) => {
                const isFav = favorites.includes(product.id);

                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-2 border-luxury-gold hover:border-secondary flex flex-col cursor-pointer"
                    onClick={() => onOpenProductDetail(product)}
                  >
                    {/* Image frame */}
                    <div className="relative overflow-hidden aspect-square bg-surface-container-low">
                      <img 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        src={product.image || null}
                      />
                      
                      {/* Heart Wishlist Toggle */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(product.id);
                        }}
                        className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur rounded-full text-primary hover:bg-white hover:text-red-500 transition-colors shadow-sm cursor-pointer z-10"
                        aria-label="Add to Wishlist"
                      >
                        <Heart className={`h-4.5 w-4.5 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>

                      {/* Optional promo badges */}
                      {product.tag && (
                        <div className="absolute bottom-4 left-4 bg-secondary text-on-secondary text-[10px] uppercase font-extrabold tracking-widest px-3.5 py-1 rounded-full shadow-md z-10 border border-white/25">
                          {product.tag}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Sparkles className="h-3.5 w-3.5 text-secondary shrink-0" />
                        <span className="text-[10px] uppercase font-bold tracking-wider text-secondary">{product.subCategory}</span>
                      </div>
                      
                      <h4 className="font-serif font-bold text-lg text-primary mb-1 truncate group-hover:text-secondary transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-on-surface-variant text-xs mb-4 line-clamp-2 leading-relaxed h-8 font-medium">
                        {product.description}
                      </p>

                      <div className="mt-auto pt-3 border-t border-secondary/15 flex justify-end items-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuickAdd(product);
                          }}
                          className="w-full py-2.5 bg-primary hover:bg-secondary hover:text-white text-white rounded-full text-xs font-bold transition-all scale-100 hover:scale-102 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                        >
                          <ShoppingCart className="h-3.5 w-3.5 text-secondary shrink-0" />
                          <span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More pagination button */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => alert("All premium handcrafted formulas have been listed above.")}
            className="px-12 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all flex items-center gap-3 cursor-pointer text-sm"
          >
            <span>View More Products</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

      </section>

    </div>
  );
}
