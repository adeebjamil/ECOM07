import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Trends = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  const slides = [
    {
      id: 1,
      title: 'PLAYFUL PANTIES',
      subtitle: 'For the little girls',
      image: '/path/to/panties-image.jpg',
      bgColor: 'bg-[#F5DEB3]',
      textColor: 'text-gray-800'
    },
    {
      id: 2,
      title: 'GYM VESTS',
      subtitle: 'Geared To Perform',
      image: '/path/to/gym-vest-image.jpg',
      bgColor: 'bg-gray-800',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'MOVE EASY JACKETS',
      subtitle: 'Ultimate Companion',
      image: '/path/to/jacket-image.jpg',
      bgColor: 'bg-[#F5DEB3]',
      textColor: 'text-gray-800'
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Get visible slides (previous, current, next)
  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let offset of [-1, 0, 1]) {
      const index = (currentSlide + offset + slides.length) % slides.length;
      visibleSlides.push({ ...slides[index], offset });
    }
    return visibleSlides;
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStart(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-1 sm:px-4 py-4 sm:py-8">
      {/* Header - Further reduced spacing for mobile */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-3 sm:mb-8"
      >
        <h2 className="text-xl sm:text-3xl md:text-5xl mb-0.5 sm:mb-2">
          <span className="text-gray-600 font-light">ON-TREND</span>{' '}
          <span className="font-bold text-gray-800">PICKS</span>
        </h2>
        <p className="text-[10px] sm:text-sm md:text-base text-gray-600">Explore Our Promising Line-up</p>
      </motion.div>

      {/* Carousel - Optimized for mobile */}
      <div className="relative">
        {/* Slides Container - Adjusted for better mobile view */}
        <div className="overflow-hidden px-0 sm:px-12 py-1 sm:py-8">
          <div className="flex justify-center items-center gap-0.5 sm:gap-6">
            {getVisibleSlides().map((slide) => (
              <motion.div
                key={slide.id}
                className={`w-[200px] sm:w-[280px] md:w-[400px] h-[140px] sm:h-[220px] md:h-[300px] 
                  rounded-lg sm:rounded-2xl overflow-hidden ${slide.offset === 0 ? 'z-10' : 'z-0'}`}
                initial={{ scale: slide.offset === 0 ? 1.05 : 0.9, opacity: 0.5 }}
                animate={{ 
                  scale: slide.offset === 0 ? 1.05 : 0.9,
                  opacity: slide.offset === 0 ? 1 : 0.5
                }}
                transition={{ duration: 0.4 }}
              >
                <div className={`${slide.bgColor} h-full relative group cursor-pointer`}>
                  <div className="h-full p-2 sm:p-4 md:p-8 flex items-center justify-between">
                    <div className="space-y-1 sm:space-y-2 md:space-y-4">
                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-[10px] sm:text-sm md:text-lg ${slide.textColor}`}
                      >
                        {slide.subtitle}
                      </motion.p>
                      <motion.h3 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`text-sm sm:text-xl md:text-3xl font-bold max-w-[80px] sm:max-w-[140px] 
                          md:max-w-[200px] leading-tight ${slide.textColor}`}
                      >
                        {slide.title}
                      </motion.h3>
                      <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`px-2 sm:px-4 md:px-6 py-0.5 md:py-2 text-[10px] sm:text-sm md:text-base 
                          border border-current sm:border-2 rounded-md hover:bg-black hover:text-white 
                          transition-colors duration-300 ${slide.textColor}`}
                      >
                        EXPLORE NOW
                      </motion.button>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="w-[45%] sm:w-1/2"
                    >
                      <img 
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-auto object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Touch Controls */}
        <div className="sm:hidden absolute inset-0" 
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd}
        />

        {/* Navigation Arrows - Mobile hidden remains */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center 
            justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center 
            justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-600" />
        </motion.button>

        {/* Controls - Further optimized for mobile */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mt-2 sm:mt-8">
          <div className="flex gap-1 sm:gap-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => goToSlide(index)}
                className={`h-0.5 sm:h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-2 sm:w-4 md:w-6 bg-black' 
                    : 'w-0.5 sm:w-1.5 md:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-0.5 sm:p-1.5 md:p-2 rounded-full hover:bg-gray-100"
          >
            {isAutoPlaying ? (
              <PauseIcon className="w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 text-gray-600" />
            ) : (
              <PlayIcon className="w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Icon Components
const ChevronLeftIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const PlayIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
  </svg>
);

const PauseIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
  </svg>
);

export default Trends;
