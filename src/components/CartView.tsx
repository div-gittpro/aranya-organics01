import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, MessageSquare, Check } from 'lucide-react';
import { CartItem } from '../types';
import { getWhatsAppUrl } from '../companyInfo';

interface CartViewProps {
  cart: CartItem[];
  onUpdateQty: (productId: string, qty: number, selectedVariant?: string) => void;
  onRemoveItem: (productId: string, selectedVariant?: string) => void;
  onClose: () => void;
  clearCart: () => void;
}

export default function CartView({
  cart,
  onUpdateQty,
  onRemoveItem,
  onClose,
  clearCart,
}: CartViewProps) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  // Generate WhatsApp order message
  const generateOrderMessage = () => {
    let msg = `I would like to place an order:\n\n`;
    cart.forEach((item) => {
      const variantStr = item.selectedVariant ? ` (${item.selectedVariant})` : '';
      msg += `- ${item.product.name}${variantStr} - Qty: ${item.quantity}\n`;
    });
    msg += `\nKindly share the payment and delivery details.\n\n`;
    msg += `Thank you.`;
    return msg;
  };

  const handleCheckoutSubmit = () => {
    const textMsg = generateOrderMessage();
    // Open in new tab redirecting to merchant WhatsApp number
    window.open(getWhatsAppUrl(textMsg), '_blank');
    
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      
      {/* Dark overlay backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
      />

      {/* Cart side pane drawer */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-lg h-full bg-background shadow-2xl flex flex-col z-10 overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-primary text-white">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-secondary-fixed" />
            <div>
              <h2 className="font-serif text-2xl font-bold">Your Botanical Cart</h2>
              <p className="text-[10px] text-primary-fixed/80 uppercase font-semibold tracking-wider">
                {cart.length} unique blends selected
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-all text-white/80 hover:text-white font-bold cursor-pointer"
            aria-label="Close cart panel"
          >
            ✕
          </button>
        </div>

        {/* Scrollable list area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {cart.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="h-64 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary">Your cart is empty</h3>
                  <p className="text-xs text-on-surface-variant max-w-xs mt-1">
                    Select from our exquisite, handcrafted organic formulations to begin.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-full cursor-pointer hover:bg-primary-container hover:text-on-primary-container transition-all"
                >
                  View Products
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <motion.div 
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-4 p-4 bg-white rounded-2xl border border-secondary/10 shadow-sm items-center hover:shadow-md transition-shadow"
                  >
                    <img 
                      alt={item.product.name} 
                      className="w-16 h-16 object-cover rounded-lg border border-outline-variant/15" 
                      src={item.product.image || null} 
                    />
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h4 className="font-bold text-sm text-primary truncate">
                            {item.product.name}
                          </h4>
                          {item.selectedVariant && (
                            <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded-full border border-secondary/20">
                              {item.selectedVariant}
                            </span>
                          )}
                        </div>
                        <button 
                          onClick={() => onRemoveItem(item.product.id, item.selectedVariant)}
                          className="text-outline hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex justify-start items-center mt-3">
                        {/* Custom increment / decrement */}
                        <div className="flex items-center border border-outline-variant rounded-full overflow-hidden bg-surface-container-low">
                          <button 
                            onClick={() => onUpdateQty(item.product.id, item.quantity - 1, item.selectedVariant)}
                            className="p-1.5 hover:bg-outline-variant/20 text-primary cursor-pointer"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-xs font-bold text-primary select-none">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => onUpdateQty(item.product.id, item.quantity + 1, item.selectedVariant)}
                            className="p-1.5 hover:bg-outline-variant/20 text-primary cursor-pointer"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Elegant direct order checkout when items are present */}
          {cart.length > 0 && (
            <div className="pt-6 border-t border-secondary/20 space-y-4">
              <div className="p-4 bg-secondary/5 rounded-2xl border-2 border-luxury-gold text-center">
                <p className="text-sm text-primary font-bold">
                  Your artisanal order is ready!
                </p>
                <p className="text-xs text-on-surface-variant mt-1.5 font-medium">
                  We formulate and dispatch your handmade blends immediately. Click below to share your cart list with us directly via WhatsApp to coordinate delivery and secure your order.
                </p>
              </div>

              <button 
                onClick={handleCheckoutSubmit}
                className="w-full py-4 bg-primary hover:bg-secondary text-white hover:text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 gold-glow-hover hover:scale-102 active:scale-95 cursor-pointer uppercase text-xs tracking-widest border border-transparent shadow-lg"
              >
                <MessageSquare className="h-4 w-4 text-secondary" />
                <span>Confirm Order via WhatsApp</span>
              </button>
            </div>
          )}
        </div>

        {/* Success Feedback Modal overlays */}
        <AnimatePresence>
          {orderPlaced && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/95 flex flex-col items-center justify-center text-center p-6 text-white z-50"
            >
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 animate-bounce shadow-xl">
                <Check className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-2">Order Confirmed!</h3>
              <p className="text-sm text-primary-fixed/80 max-w-xs">
                Your order message has been prepared and WhatsApp has been initiated. Thank you for choosing Aranya Organic!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
