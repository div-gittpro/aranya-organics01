import { ShoppingCart, Search, Menu, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  cart: CartItem[];
  setIsCartOpen: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navbar({
  currentTab,
  setCurrentTab,
  cart,
  setIsCartOpen,
  searchQuery,
  setSearchQuery,
}: NavbarProps) {
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-background/95 backdrop-blur-md sticky top-0 left-0 right-0 z-50 border-b-2 border-secondary/20 transition-all duration-300 shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 max-w-7xl mx-auto">
        {/* Brand Logo & Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setCurrentTab('home')}
        >
          <Logo className="h-10 w-10 md:h-12 md:w-12" />
          <span className="font-serif text-2xl md:text-3xl text-primary font-bold tracking-tight italic select-none group-hover:text-secondary transition-colors">
            Aranya Organic
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'products', label: 'Products' },
            { id: 'about', label: 'About Us' },
            { id: 'consultation', label: 'Consultation' },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setCurrentTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-sans text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer pb-1 border-b-2 ${
                  currentTab === item.id
                    ? 'text-primary border-secondary font-extrabold'
                    : 'text-on-surface-variant border-transparent hover:text-primary hover:border-secondary/40'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Quick Search Input */}
          <div className="hidden lg:flex items-center bg-surface-container px-4 py-1.5 rounded-full border border-outline-variant/10 focus-within:border-primary/30 focus-within:bg-white transition-all duration-300">
            <Search className="text-outline h-4 w-4" />
            <input 
              className="bg-transparent border-none outline-none text-sm ml-2 placeholder-outline/70 w-44 text-primary focus:ring-0" 
              placeholder="Search botanical blends..." 
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentTab !== 'products') {
                  setCurrentTab('products');
                }
              }}
            />
          </div>

          {/* Cart Icon trigger */}
          <button 
            onClick={setIsCartOpen}
            className="relative p-2 text-primary hover:bg-surface-container rounded-full transition-all duration-300 scale-100 hover:scale-105 active:scale-95 group cursor-pointer"
            aria-label="Open Shopping Cart"
          >
            <ShoppingCart className="h-6 w-6 transition-colors duration-300 group-hover:text-secondary" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-secondary text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu trigger */}
          <button 
            onClick={() => setCurrentTab('products')}
            className="md:hidden p-2 text-primary hover:bg-surface-container rounded-full transition-all"
            aria-label="Products Page"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
