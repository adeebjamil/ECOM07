import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      image: "src/assets/banner1.jpg",
      mobileImage: "src/assets/banner1-mobile.jpg",
      smallText: "New Collection 2024",
      title: "On-Trend Picks",
      subtitle: "Premium Essentials",
      description: "Discover comfort and style with our latest collection.",
      cta: "Shop Now",
      color: "from-blue-900/80"
    },
    {
      image: "src/assets/banner2.jpg",
      mobileImage: "src/assets/banner2-mobile.jpg",
      smallText: "Limited Edition",
      title: "Summer Styles",
      subtitle: "Exclusive Range",
      description: "Experience luxury with our premium comfort series.",
      cta: "Explore More",
      color: "from-slate-900/80"
    },
    {
      image: "src/assets/banner3.jpg",
      mobileImage: "src/assets/banner3-mobile.jpg",
      smallText: "Special Offer",
      title: "Season Sale",
      subtitle: "Up to 40% Off",
      description: "Limited time offers on selected premium collections.",
      cta: "View Offers",
      color: "from-neutral-900/80"
    }
  ];

  const categories = [
    {
      icon: "/icons/mens.png",
      title: "Men's Innerwear",
      link: "/mens",
      description: "Premium comfort essentials"
    },
    {
      icon: "/icons/womens.png",
      title: "Women's Innerwear",
      link: "/womens",
      description: "Stylish everyday basics"
    },
    {
      icon: "/icons/kids.png",
      title: "Kids Outerwear",
      link: "/kids",
      description: "Comfortable & playful designs"
    },
    {
      icon: "/icons/accessories.png",
      title: "Accessories",
      link: "/accessories",
      description: "Complete your look"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative bg-white">
      {/* Main Banner Slider */}
      <div 
        className="relative h-[60vh] sm:h-[75vh] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Banner Image with Ken Burns effect */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center md:bg-[position:50%_50%] bg-[position:65%_50%]"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 5, ease: 'easeOut' }}
              style={{
                backgroundImage: `url(${
                  window.innerWidth <= 768 && slides[currentSlide].mobileImage
                    ? slides[currentSlide].mobileImage
                    : slides[currentSlide].image
                })`
              }}
            />
            
            {/* Gradient Overlay - Strengthened for mobile */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} to-transparent md:bg-opacity-80 bg-opacity-90`} />

            {/* Content Container - Updated padding and text sizes */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-full flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-xl space-y-4 sm:space-y-6"
                >
                  <span className="inline-block text-xs sm:text-sm tracking-wider text-white/90 uppercase">
                    {slides[currentSlide].smallText}
                  </span>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white">
                      {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/90">
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-white/80 max-w-md">
                    {slides[currentSlide].description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 hover:bg-gray-100 
                             transition-colors text-xs sm:text-sm tracking-wider uppercase"
                  >
                    {slides[currentSlide].cta}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls - Updated positioning and size */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={prevSlide}
              className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
            >
              <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-white' : 'w-4 bg-white/50'
                } hover:bg-white`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Category Navigation - Updated padding and icon sizes */}
      <div className="bg-white py-6 sm:py-8 shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={category.link}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-50 p-3 sm:p-4 
                                group-hover:bg-gray-100 transition-colors duration-300">
                    <img 
                      src={category.icon} 
                      alt={category.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm sm:text-base text-gray-900 font-medium group-hover:text-blue-600 
                                 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {!isHovered && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity
          }}
        />
      )}
    </section>
  );
};

export default Hero;
