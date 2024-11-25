const EssentialAccessories = () => {
  const accessories = [
    {
      name: "Face Masks",
      image: "/images/face-masks.png", 
      link: "#",
      bgColor: "bg-[#E6C87D]",
      description: "Premium comfort & protection"
    },
    {
      name: "Towels",
      image: "/images/towels.png",
      link: "#",
      bgColor: "bg-[#D3D3D3]",
      description: "Ultra-soft & absorbent"
    },
    {
      name: "Socks",
      image: "/images/towels.png",
      link: "#",
      bgColor: "bg-[#E8A487]",
      description: "Durable everyday comfort"
    },
    {
      name: "Handkerchiefs",
      image: "/images/handkerchiefs.png",
      link: "#",
      bgColor: "bg-[#333333]",
      description: "Classic & elegant"
    },
    {
      name: "Caps",
      image: "/images/caps.png",
      link: "#",
      bgColor: "bg-[#2A2A2A]",
      description: "Stylish head gear"
    }
  ];

  return (
    <section className="py-6 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            ESSENTIAL ACCESSORIES
          </h2>
          <p className="text-xl text-gray-500 font-light">
            Complete Your Look With Our Premium Collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {accessories.map((item) => (
            <a 
              key={item.name}
              href={item.link}
              className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer 
                       transition-transform duration-500 hover:-translate-y-2"
            >
              <div className={`${item.bgColor} w-full h-full p-8 relative transition-all duration-500
                            group-hover:shadow-2xl`}>
                <div className="relative z-10 space-y-2">
                  <h3 className="text-white text-2xl font-bold tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-white/80 text-sm font-light">
                    {item.description}
                  </p>
                </div>

                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 object-contain 
                           transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-10px]"
                  style={{ 
                    filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.25))',
                    transformStyle: 'preserve-3d'
                  }}
                />

                {/* Enhanced decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 
                              transition-opacity duration-500 group-hover:opacity-100"/>
                <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-20 
                              group-hover:scale-150 transition-transform duration-500"/>
                <div className="absolute bottom-8 right-8 w-16 h-[2px] bg-white transform rotate-45 
                              opacity-20 group-hover:w-20 transition-all duration-500"/>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialAccessories;
