import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../lib/data';

export function NewCollection() {
  const newProducts = products.filter(p => p.tag);

  const productImages = [
    'https://images.unsplash.com/photo-1746207067456-a6a2fcd22b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1621735320171-a682f45d7172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1762843354674-adabdd6c4072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      {/* Hero */}
      <div className="relative h-[80vh] mb-24">
        <img
          src="https://images.unsplash.com/photo-1761164920874-b3bc052f6473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="New Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm tracking-[0.15em] mb-6">
              New Arrival
            </span>
            <h1
              className="text-6xl md:text-8xl tracking-[0.05em] font-light mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Winter 2026
            </h1>
            <p className="text-xl tracking-[0.2em] font-light text-foreground/80 max-w-2xl">
              Discover our latest collection of exceptional pieces
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 pb-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2
            className="text-4xl md:text-5xl tracking-[0.05em] font-light mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Collection
          </h2>
          <p className="text-foreground/70 tracking-[0.15em] font-light">
            {newProducts.length} exclusive pieces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {newProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={productImages[index % productImages.length]}
              tag={product.tag}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
