import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, ChevronRight } from 'lucide-react';
import { products } from '../lib/data';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const similarProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const productImages = [
    'https://images.unsplash.com/photo-1746207067456-a6a2fcd22b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1621735320171-a682f45d7172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
          {/* Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-card">
              <img
                src={productImages[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.slice(1).map((img, index) => (
                <div key={index} className="aspect-[3/4] rounded-xl overflow-hidden bg-card">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {product.tag && (
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-xs tracking-[0.15em]">
                {product.tag}
              </span>
            )}

            <div>
              <h1
                className="text-4xl md:text-5xl tracking-[0.05em] font-light mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {product.name}
              </h1>
              <p className="text-2xl tracking-[0.15em] font-light">
                ${product.price.toLocaleString()}
              </p>
            </div>

            <p className="text-foreground/70 leading-relaxed tracking-wide">
              {product.description}. Meticulously crafted with the finest materials and
              exceptional attention to detail. Each piece represents our commitment to
              timeless elegance and superior quality.
            </p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm tracking-[0.15em] mb-4">Select Size</label>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded-full border transition-all ${
                      selectedSize === size
                        ? 'border-accent bg-accent'
                        : 'border-border hover:border-foreground'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm tracking-[0.15em] mb-4">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  className="w-12 h-12 rounded-full border border-border hover:border-foreground transition-all"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  className="w-12 h-12 rounded-full border border-border hover:border-foreground transition-all"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Link
                to="/cart"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-accent rounded-full text-sm tracking-[0.2em] font-light hover:bg-accent/90 transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </Link>
              <button className="w-16 h-16 rounded-full border border-border hover:bg-secondary transition-all flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Details */}
            <div className="border-t border-border pt-8 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Material</span>
                <span>Premium Quality</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Care</span>
                <span>Dry Clean Only</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Similar Products */}
        <div className="pb-24">
          <h2
            className="text-3xl md:text-4xl tracking-[0.05em] font-light mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {similarProducts.map((p, index) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                imageUrl={productImages[index % productImages.length]}
                tag={p.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
