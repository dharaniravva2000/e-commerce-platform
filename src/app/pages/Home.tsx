import { motion } from 'motion/react';
import { HeroSlider } from '../components/HeroSlider';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, heroSlides } from '../lib/data';

export function Home() {
  const heroSlidesWithImages = [
    {
      id: '1',
      title: 'Winter Heritage',
      subtitle: 'Timeless pieces for the season',
      imageUrl: 'https://images.unsplash.com/photo-1762843354674-adabdd6c4072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aW50ZXIlMjBmYXNoaW9uJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc2Nzk3MTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      cta: 'Explore Collection'
    },
    {
      id: '2',
      title: 'Artisan Crafted',
      subtitle: 'Limited edition handmade pieces',
      imageUrl: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcmFmdHNtYW5zaGlwJTIwYXJ0aXNhbnxlbnwxfHx8fDE3Njc5NzEwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      cta: 'Discover More'
    },
    {
      id: '3',
      title: 'Evening Elegance',
      subtitle: 'Exceptional pieces for special moments',
      imageUrl: 'https://images.unsplash.com/photo-1761164920874-b3bc052f6473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVuaW5nJTIwZmFzaGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzY3OTcxMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      cta: 'View Collection'
    }
  ];

  const productImages = [
    'https://images.unsplash.com/photo-1746207067456-a6a2fcd22b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zJTIwY29hdHxlbnwxfHx8fDE3Njc5NzEwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1763336016192-c7b62602e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVuaW5nJTIwZHJlc3MlMjBlbGVnYW50fGVufDF8fHx8MTc2Nzk3MTA4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1621735320171-a682f45d7172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwYmFnJTIwYnJpZWZjYXNlfGVufDF8fHx8MTc2Nzk3MTA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1695857596080-a15b7d35c35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zJTIwc3VpdCUyMHRhaWxvcmVkfGVufDF8fHx8MTc2Nzk3MTA4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1631541909061-71e349d1f203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MXx8fHwxNzY3OTcxMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider slides={heroSlidesWithImages} />

      {/* New Collection Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl tracking-[0.05em] font-light mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            New Arrivals
          </h2>
          <p className="text-foreground/70 tracking-[0.15em] font-light">
            Discover our latest curated collection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={productImages[index] || productImages[0]}
              tag={product.tag}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-full text-sm tracking-[0.2em] font-light hover:bg-accent hover:border-accent transition-all"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Editorial Story Block */}
      <section className="py-24 md:py-32">
        <div className="relative h-[60vh] md:h-[80vh]">
          <div className="absolute inset-0">
            <motion.img
              src="https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcmFmdHNtYW5zaGlwJTIwYXJ0aXNhbnxlbnwxfHx8fDE3Njc5NzEwODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>

          <div className="relative h-full flex items-end justify-center pb-16 md:pb-24">
            <motion.div
              className="max-w-3xl mx-auto px-6 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2
                className="text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafted with Purpose
              </h2>
              <p className="text-lg tracking-[0.15em] font-light text-foreground/80 leading-relaxed">
                Every piece tells a story of meticulous craftsmanship, timeless design, and
                unwavering attention to detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl tracking-[0.05em] font-light mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Collections
          </h2>
          <p className="text-foreground/70 tracking-[0.15em] font-light">
            Explore our curated selections
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Heritage',
              subtitle: 'Classic elegance reimagined',
              image: productImages[0]
            },
            {
              title: 'Contemporary',
              subtitle: 'Modern luxury essentials',
              image: productImages[1]
            }
          ].map((collection, index) => (
            <Link
              key={index}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3
                  className="text-3xl md:text-4xl tracking-[0.05em] font-light mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {collection.title}
                </h3>
                <p className="text-sm tracking-[0.15em] font-light text-foreground/80">
                  {collection.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
