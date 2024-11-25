import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Reusing the same component structures but with accessories content
const CategoryCard = ({ category }) => (
  <div className="group cursor-pointer perspective">
    <div className="relative overflow-hidden rounded-xl transform transition-all duration-500 group-hover:rotate-y-12">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <img 
        src={category.image} 
        alt={`${category.name} Category`}
        className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <p className="text-white text-xl font-medium transform transition-all duration-300 group-hover:translate-y-[-8px]">
          {category.name}
        </p>
        <span className="text-white/80 text-sm mt-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          View Collection →
        </span>
      </div>
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="relative overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <button 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 
                 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300
                 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white"
        aria-label={`Quick view ${product.name}`}
      >
        Quick View
      </button>
    </div>
    <div className="p-6">
      <p className="text-sm text-gray-500 font-medium">{product.code}</p>
      <h3 className="text-lg font-medium mt-2 line-clamp-1">{product.name}</h3>
      <p className="text-xl font-bold mt-2">₹{product.price}</p>
      <button 
        className="w-full mt-4 bg-black text-white py-3 rounded-lg transform transition-all duration-300
                 hover:bg-gray-900 active:scale-95"
        aria-label={`Add ${product.name} to bag`}
      >
        Add to Bag
      </button>
    </div>
  </div>
);

const Accessories = () => {
  const [featuredProducts] = useState([
    {
      id: 1,
      name: "Premium Sports Water Bottle",
      price: "499.00",
      image: "/path/to/accessories-product1.webp",
      code: "AC01"
    },
    {
      id: 2,
      name: "Fitness Training Gloves",
      price: "699.00",
      image: "/path/to/accessories-product2.webp",
      code: "AC02"
    },
    {
      id: 3,
      name: "Gym Duffle Bag",
      price: "1499.00",
      image: "/path/to/accessories-product3.webp",
      code: "AC03"
    },
    {
      id: 4,
      name: "Resistance Bands Set",
      price: "899.00",
      image: "/path/to/accessories-product4.webp",
      code: "AC04"
    }
  ]);

  const categories = [
    { name: "Water Bottles", image: "/path/to/water-bottles.jpg" },
    { name: "Gym Bags", image: "/path/to/gym-bags.jpg" },
    { name: "Training Gloves", image: "/path/to/gloves.jpg" },
    { name: "Fitness Equipment", image: "/path/to/equipment.jpg" },
    { name: "Yoga Accessories", image: "/path/to/yoga-acc.jpg" },
    { name: "Sports Gear", image: "/path/to/sports-gear.jpg" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-[80vh] overflow-hidden"
        role="banner"
      >
        {/* Mobile Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ 
            backgroundImage: 'url("src/assets/accessories-banner1-mobile.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Desktop Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center hidden md:block bg-fixed"
          style={{ 
            backgroundImage: 'url("src/assets/accessories-banner1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/70">
          <div className="h-full flex flex-col items-center justify-center animate-fadeIn px-4 md:px-0">
            <h1 className="text-center text-white">
              <span className="block text-4xl md:text-6xl font-bold tracking-tight mb-2 animate-slideUp">
                ENHANCE YOUR
              </span>
              <span className="block text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-slideUp animation-delay-200">
                PERFORMANCE
              </span>
            </h1>
            <p className="text-center text-white text-lg md:text-xl mt-6 md:mt-8 font-light tracking-wide animate-slideUp animation-delay-300">
              Essential Gear for Every Workout
            </p>
            <button className="mt-8 md:mt-10 group relative px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-md overflow-hidden animate-slideUp animation-delay-400">
              <span className="relative z-10 font-medium tracking-wider">SHOP NOW</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="absolute inset-0 z-10 text-white font-medium tracking-wider flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                EXPLORE
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="max-w-7xl mx-auto py-24 px-4" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-4xl font-bold text-center mb-4">
          GEAR UP FOR SUCCESS
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Essential accessories to enhance your workout experience
        </p>
        
        {/* Mobile Slider for Categories */}
        <div className="lg:hidden relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-categories',
              prevEl: '.swiper-button-prev-categories',
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
            }}
            className="!pb-12"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.name}>
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-categories absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="swiper-button-next-categories absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="products-heading" className="text-4xl font-bold text-center mb-4">
            BEST SELLERS
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Top-rated accessories chosen by our fitness community
          </p>

          {/* Mobile Slider for Products */}
          <div className="lg:hidden relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={true}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next-products',
                prevEl: '.swiper-button-prev-products',
              }}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                768: { slidesPerView: 2.5 },
              }}
              className="!pb-12"
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-products absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="swiper-button-next-products absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collection Banner */}
      <section 
        className="relative h-[500px] my-24 bg-fixed bg-cover bg-center" 
        style={{ backgroundImage: 'url("/path/to/accessories-collection-banner.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl">
              <span className="text-sm font-medium tracking-wider">NEW ARRIVAL</span>
              <h2 className="text-5xl font-bold mt-4 leading-tight">
                ELEVATE YOUR
                <span className="block bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
                  WORKOUT GEAR
                </span>
              </h2>
              <p className="text-lg mt-6 mb-8 text-gray-100">
                Discover our latest collection of premium fitness accessories.
                Designed for performance, built to last.
              </p>
              <button className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-md">
                <span className="relative z-10 font-medium tracking-wider group-hover:text-white transition-colors duration-300">
                  Shop Collection
                </span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Accessories;
