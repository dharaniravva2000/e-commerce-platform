import { motion } from 'motion/react';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cart() {
  const cartItems = [
    {
      id: '1',
      name: 'Cashmere Overcoat',
      price: 2850,
      quantity: 1,
      size: 'M',
      image: 'https://images.unsplash.com/photo-1746207067456-a6a2fcd22b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    {
      id: '2',
      name: 'Leather Briefcase',
      price: 1950,
      quantity: 1,
      size: 'One Size',
      image: 'https://images.unsplash.com/photo-1621735320171-a682f45d7172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.h1
          className="text-5xl md:text-7xl tracking-[0.05em] font-light mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex gap-6 pb-8 border-b border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-32 aspect-[3/4] rounded-xl overflow-hidden bg-card flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-xl tracking-[0.05em] font-light mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">Size: {item.size}</p>
                  <p className="text-lg tracking-[0.15em]">${item.price.toLocaleString()}</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button className="p-2 hover:text-destructive transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-3 border border-border rounded-full px-4 py-2">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            className="lg:sticky lg:top-32 h-fit"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="border border-border rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl tracking-[0.05em] font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Order Summary
              </h2>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg pt-4 border-t border-border">
                <span>Total</span>
                <span className="tracking-[0.15em]">${total.toLocaleString()}</span>
              </div>

              <button className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-accent rounded-full text-sm tracking-[0.2em] font-light hover:bg-accent/90 transition-all">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
