import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Reuse the same CategoryCard and ProductCard components with kid-specific styling
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
        className="w-full mt-4 bg-pink-500 text-white py-3 rounded-lg transform transition-all duration-300
                 hover:bg-pink-600 active:scale-95"
        aria-label={`Add ${product.name} to bag`}
      >
        Add to Bag
      </button>
    </div>
  </div>
);

const Kids = () => {
  const [featuredProducts] = useState([
    {
      id: 1,
      name: "Cotton Dinosaur Print T-Shirt",
      price: "399.00",
      image: "/path/to/kids-product1.webp",
      code: "KC01"
    },
    {
      id: 2,
      name: "Comfortable Kids Joggers",
      price: "599.00",
      image: "/path/to/kids-product2.webp",
      code: "KC02"
    },
    {
      id: 3,
      name: "Cartoon Character Pajama Set",
      price: "799.00",
      image: "/path/to/kids-product3.webp",
      code: "KC03"
    },
    {
      id: 4,
      name: "Colorful Summer Shorts",
      price: "449.00",
      image: "/path/to/kids-product4.webp",
      code: "KC04"
    }
  ]);

  const categories = [
    { name: "T-Shirts & Tops", image: "/path/to/kids-tops.jpg" },
    { name: "Pajamas", image: "/path/to/kids-pajamas.jpg" },
    { name: "Dresses", image: "/path/to/kids-dresses.jpg" },
    { name: "Shorts & Skirts", image: "/path/to/kids-shorts.jpg" },
    { name: "School Wear", image: "/path/to/kids-school.jpg" },
    { name: "Party Wear", image: "/path/to/kids-party.jpg" },
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
            backgroundImage: 'url("src/assets/kids-banner-mobile.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Desktop Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center hidden md:block bg-fixed"
          style={{ 
            backgroundImage: 'url("src/assets/kids-banner.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/70 via-pink-900/50 to-pink-900/70">
          <div className="h-full flex flex-col items-center justify-center animate-fadeIn px-4 md:px-0">
            <h1 className="text-center text-white">
              <span className="block text-4xl md:text-6xl font-bold tracking-tight mb-2 animate-slideUp">
                LITTLE STARS
              </span>
              <span className="block text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-200 via-yellow-200 to-pink-200 bg-clip-text text-transparent animate-slideUp animation-delay-200">
                BIG DREAMS
              </span>
            </h1>
            <p className="text-center text-white text-lg md:text-xl mt-6 md:mt-8 font-light tracking-wide animate-slideUp animation-delay-300">
              Dress them in joy and comfort
            </p>
            <button className="mt-8 md:mt-10 group relative px-6 md:px-8 py-3 md:py-4 bg-white text-pink-500 rounded-md overflow-hidden animate-slideUp animation-delay-400">
              <span className="relative z-10 font-medium tracking-wider">EXPLORE NOW</span>
              <div className="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="absolute inset-0 z-10 text-white font-medium tracking-wider flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                DISCOVER
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="max-w-7xl mx-auto py-24 px-4" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-4xl font-bold text-center mb-4">
          PLAYFUL ESSENTIALS
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Adorable and comfortable clothing for your little ones
        </p>
        
        {/* Mobile Slider for Categories - Same structure, different content */}
        <div className="lg:hidden relative">
          <Swiper
            // ... same Swiper configuration ...
          >
            {categories.map((category) => (
              <SwiperSlide key={category.name}>
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation buttons remain the same */}
        </div>

        {/* Desktop Grid remains the same structure */}
        <div className="hidden lg:grid grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-24" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="products-heading" className="text-4xl font-bold text-center mb-4">
            KIDS FAVORITES
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Discover our most loved pieces for your little ones
          </p>

          {/* Mobile Slider for Products - Same structure */}
          <div className="lg:hidden relative">
            <Swiper
              // ... same Swiper configuration ...
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons remain the same */}
          </div>

          {/* Desktop Grid remains the same structure */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Collection Banner - Updated for kids */}
      <section 
        className="relative h-[500px] my-24 bg-fixed bg-cover bg-center" 
        style={{ backgroundImage: 'url("/path/to/kids-collection-banner.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl">
              <span className="text-sm font-medium tracking-wider">NEW ARRIVAL</span>
              <h2 className="text-5xl font-bold mt-4 leading-tight">
                MAGICAL
                <span className="block bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
                  PLAYTIME COLLECTION
                </span>
              </h2>
              <p className="text-lg mt-6 mb-8 text-pink-100">
                Discover our latest collection of playful and comfortable kids' wear.
                Perfect for their everyday adventures.
              </p>
              <button className="group relative overflow-hidden bg-white text-pink-500 px-8 py-4 rounded-md">
                <span className="relative z-10 font-medium tracking-wider group-hover:text-white transition-colors duration-300">
                  Explore Collection
                </span>
                <div className="absolute inset-0 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kids;
