import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Feature = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [activeGender, setActiveGender] = useState('men');
  
  const categories = {
    men: [
      {
        id: 1,
        title: "BOXER SHORTS",
        tagline: "Comfort Meets Style",
        description: "Premium cotton, Perfect fit",
        image: "/path/to/boxer-image.jpg",
        icon: "👔",
        link: "/boxers",
        bgColor: "bg-red-50"
      },
      {
        id: 2,
        title: "TANK TOPS",
        tagline: "Summer Essential",
        description: "Breathable & Stylish",
        image: "/path/to/tank-image.jpg",
        icon: "🎽",
        link: "/tanks",
        bgColor: "bg-rose-50"
      },
      {
        id: 3,
        title: "SHORTS",
        tagline: "Move Freely",
        description: "Athletic & Casual Wear",
        image: "/path/to/shorts-image.jpg",
        icon: "🩳",
        link: "/shorts",
        bgColor: "bg-pink-50"
      },
      {
        id: 4,
        title: "T-SHIRTS",
        tagline: "Everyday Comfort",
        description: "Classic & Contemporary Designs",
        image: "/path/to/tshirt-image.jpg",
        icon: "👕",
        link: "/tshirts",
        bgColor: "bg-red-100"
      }
    ],
    women: [
      {
        id: 5,
        title: "SPORTS BRA",
        tagline: "Active Support",
        description: "Perfect for every workout",
        image: "/path/to/sports-bra-image.jpg",
        icon: "👚",
        link: "/sports-bra",
        bgColor: "bg-rose-100"
      },
      {
        id: 6,
        title: "LEGGINGS",
        tagline: "Move with Confidence",
        description: "Stretch & Style Combined",
        image: "/path/to/leggings-image.jpg",
        icon: "👖",
        link: "/leggings",
        bgColor: "bg-red-50"
      },
      {
        id: 7,
        title: "TANK TOPS",
        tagline: "Effortless Style",
        description: "Versatile & Comfortable",
        image: "/path/to/women-tank-image.jpg",
        icon: "👚",
        link: "/women-tanks",
        bgColor: "bg-pink-50"
      },
      {
        id: 8,
        title: "YOGA WEAR",
        tagline: "Mindful Movement",
        description: "Flexible & Breathable",
        image: "/path/to/yoga-image.jpg",
        icon: "🧘‍♀️",
        link: "/yoga-wear",
        bgColor: "bg-rose-50"
      }
    ]
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const getButtonStyles = (isActive) => `
    px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500
    ${isActive 
      ? 'bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white shadow-lg shadow-red-200'
      : 'text-gray-600 hover:bg-gray-100 hover:shadow-md'
    }
  `;

  return (
    <section className="px-4 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-transparent bg-clip-text">
                FEATURED
              </span>{' '}
              <span className="text-gray-800">CATEGORIES</span>
            </h2>
            <p className="text-gray-500 max-w-lg">
              Discover our curated collection of premium clothing essentials
            </p>
          </div>
          
          <div className="bg-white rounded-full p-1.5 shadow-xl shadow-red-100/50">
            {['men', 'women'].map((gender) => (
              <button
                key={gender}
                onClick={() => setActiveGender(gender)}
                className={getButtonStyles(activeGender === gender)}
              >
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'bg-red-500 w-6',
              bulletClass: 'inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 transition-all duration-300',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-16"
          >
            {categories[activeGender].map((category) => (
              <SwiperSlide key={category.id}>
                <div 
                  className={`${category.bgColor} rounded-3xl overflow-hidden shadow-xl group h-[450px] 
                    transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  <div className="relative h-full">
                    {!loadedImages[category.id] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                    )}
                    <img 
                      src={category.image}
                      alt={category.title}
                      onLoad={() => handleImageLoad(category.id)}
                      className={`
                        w-full h-full object-cover transition-all duration-700 group-hover:scale-110
                        ${loadedImages[category.id] ? 'opacity-100' : 'opacity-0'}
                      `}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                    
                    {/* Updated Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                      <span className="text-4xl mb-6 block filter drop-shadow-lg">{category.icon}</span>
                      <h3 className="text-3xl font-bold text-white mb-3 tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-white/90 text-lg mb-2 font-medium">
                        {category.tagline}
                      </p>
                      <p className="text-white/70 text-sm mb-6">
                        {category.description}
                      </p>
                      <a 
                        href={category.link}
                        className="group/button inline-flex items-center gap-3 bg-white/95 text-black px-8 py-3 rounded-xl
                          text-sm font-semibold transition-all duration-500 backdrop-blur-sm
                          hover:bg-gradient-to-r hover:from-red-500 hover:via-rose-500 hover:to-pink-500 
                          hover:text-white hover:shadow-xl hover:shadow-red-500/20"
                      >
                        EXPLORE NOW
                        <svg 
                          className="w-5 h-5 transition-transform duration-500 group-hover/button:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Updated Navigation Buttons */}
          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
            bg-white/90 backdrop-blur-sm shadow-lg shadow-black/5 flex items-center justify-center z-10 
            transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500 
            hover:text-white group">
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full 
            bg-white/90 backdrop-blur-sm shadow-lg shadow-black/5 flex items-center justify-center z-10 
            transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500 
            hover:text-white group">
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
