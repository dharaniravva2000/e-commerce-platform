import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  tag?: string;
  index?: number;
}

export function ProductCard({ id, name, price, imageUrl, tag, index = 0 }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/product/${id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-card mb-4">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImageWithFallback
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Tag */}
          {tag && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full">
              <span className="text-xs tracking-[0.15em] font-light">{tag}</span>
            </div>
          )}

          {/* Wishlist Button */}
          <motion.button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart
              className={`w-5 h-5 transition-all ${
                isWishlisted ? 'fill-accent text-accent' : 'text-foreground'
              }`}
            />
          </motion.button>

          {/* Quick View Overlay */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          >
            <motion.div
              className="px-6 py-3 border border-border rounded-full text-sm tracking-[0.15em] font-light hover:bg-accent hover:border-accent transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Quick View
            </motion.div>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3
            className="text-sm md:text-base tracking-[0.1em] font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {name}
          </h3>
          <p className="text-sm tracking-[0.15em] font-light text-muted-foreground">
            ${price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
