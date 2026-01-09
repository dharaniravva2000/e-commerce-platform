import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';
import { products } from '../lib/data';
import { useState } from 'react';

export function Shop() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Outerwear', 'Evening Wear', 'Tailoring', 'Accessories', 'Knitwear', 'Footwear'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const productImages = [
    'https://images.unsplash.com/photo-1746207067456-a6a2fcd22b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1621735320171-a682f45d7172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1695857596080-a15b7d35c35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1631541909061-71e349d1f203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1746207067456-a6a2fcd22b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1762843354674-adabdd6c4072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1
            className="text-5xl md:text-7xl tracking-[0.05em] font-light mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shop
          </h1>
          <p className="text-lg tracking-[0.15em] font-light text-foreground/70">
            Discover our curated collection of luxury pieces
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center gap-4">
          <button
            className="flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm tracking-[0.15em] font-light hover:bg-accent hover:border-accent transition-all"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full text-sm tracking-[0.15em] font-light whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-accent border border-accent'
                      : 'border border-border hover:bg-secondary'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm tracking-[0.15em] font-light hover:bg-secondary transition-all">
            Sort
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-24"
          layout
        >
          {filteredProducts.map((product, index) => (
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
        </motion.div>

        {/* Load More */}
        {filteredProducts.length > 6 && (
          <motion.div
            className="text-center pb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button className="px-10 py-4 border border-border rounded-full text-sm tracking-[0.2em] font-light hover:bg-accent hover:border-accent transition-all">
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
