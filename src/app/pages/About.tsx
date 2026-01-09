import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen pt-24 md:pt-32">
      {/* Hero */}
      <div className="relative h-[60vh] mb-24">
        <img
          src="https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-6xl md:text-8xl tracking-[0.05em] font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 pb-32">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <section>
            <h2
              className="text-4xl tracking-[0.05em] font-light mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Timeless Elegance
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 tracking-wide mb-6">
              Since our founding, we have been dedicated to creating exceptional pieces that
              transcend fleeting trends. Each item in our collection is a testament to
              meticulous craftsmanship, carefully selected materials, and an unwavering
              commitment to quality.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 tracking-wide">
              Our artisans bring decades of experience and passion to every piece, ensuring
              that each creation meets our exacting standards of excellence.
            </p>
          </section>

          <section>
            <h2
              className="text-4xl tracking-[0.05em] font-light mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Craftsmanship
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 tracking-wide mb-6">
              We believe in the art of slow fashion, where quality takes precedence over
              quantity. Every garment and accessory is crafted with attention to the finest
              details, using traditional techniques passed down through generations.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 tracking-wide">
              From the initial design sketch to the final stitch, each step is carefully
              considered to create pieces that will become treasured parts of your wardrobe
              for years to come.
            </p>
          </section>

          <section>
            <h2
              className="text-4xl tracking-[0.05em] font-light mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sustainability
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 tracking-wide">
              We are committed to sustainable practices that respect both our planet and the
              people who create our products. We work exclusively with suppliers who share
              our values, using responsibly sourced materials and ethical production methods.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
