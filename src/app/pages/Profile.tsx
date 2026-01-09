import { motion } from 'motion/react';
import { User, Package, Heart, Settings } from 'lucide-react';

export function Profile() {
  const orders = [
    { id: '1', date: '2026-01-05', total: 4800, status: 'Delivered', items: 2 },
    { id: '2', date: '2025-12-20', total: 2850, status: 'In Transit', items: 1 },
    { id: '3', date: '2025-11-15', total: 6200, status: 'Delivered', items: 3 }
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.h1
          className="text-5xl md:text-7xl tracking-[0.05em] font-light mb-16"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Account
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {[
              { icon: User, label: 'Profile', active: false },
              { icon: Package, label: 'Orders', active: true },
              { icon: Heart, label: 'Wishlist', active: false },
              { icon: Settings, label: 'Settings', active: false }
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all ${
                  item.active ? 'bg-accent text-accent-foreground' : 'hover:bg-secondary'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="tracking-[0.1em] font-light">{item.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Orders */}
          <div className="lg:col-span-3">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2
                className="text-3xl tracking-[0.05em] font-light mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Order History
              </h2>
              <p className="text-muted-foreground tracking-wide">
                Track and manage your orders
              </p>
            </motion.div>

            <div className="space-y-6">
              {orders.map((order, index) => (
                <motion.div
                  key={order.id}
                  className="border border-border rounded-2xl p-6 md:p-8 hover:border-foreground/20 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Order #{order.id}</p>
                      <p className="text-sm tracking-wide">{order.date}</p>
                    </div>
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-xs tracking-[0.15em] ${
                        order.status === 'Delivered'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-secondary text-foreground'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{order.items} items</p>
                      <p className="text-lg tracking-[0.15em]">${order.total.toLocaleString()}</p>
                    </div>
                    <button className="px-6 py-3 border border-border rounded-full text-sm tracking-[0.15em] font-light hover:bg-secondary transition-all">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
