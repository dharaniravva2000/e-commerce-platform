import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  cta: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 40 },
            opacity: { duration: 0.6 }
          }}
          className="absolute inset-0"
        >
          {/* Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={slides[current].imageUrl}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] font-light leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {slides[current].title}
                </h1>
                <p className="text-lg md:text-xl tracking-[0.2em] font-light text-foreground/80">
                  {slides[current].subtitle}
                </p>
                <motion.button
                  className="inline-block mt-8 px-10 py-4 border border-border rounded-full text-sm tracking-[0.2em] font-light hover:bg-accent hover:border-accent transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slides[current].cta}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
        onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
        onClick={() => goToSlide((current + 1) % slides.length)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-1 rounded-full transition-all ${
              index === current ? 'w-12 bg-accent' : 'w-6 bg-border'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
