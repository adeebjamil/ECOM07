import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';
import axios from 'axios';

const MensStore = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    size: [],
    color: [],
    price: []
  });
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const filterOptions = {
    category: [
      { id: 'tshirts', label: 'T-Shirts' },
      { id: 'shirts', label: 'Shirts' },
      { id: 'jeans', label: 'Jeans' },
      { id: 'suits', label: 'Suits' },
      { id: 'accessories', label: 'Accessories' }
    ],
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: [
      { id: 'black', label: 'Black', hex: '#000000' },
      { id: 'white', label: 'White', hex: '#FFFFFF' },
      { id: 'navy', label: 'Navy', hex: '#000080' },
      { id: 'grey', label: 'Grey', hex: '#808080' }
    ],
    price: [
      { id: 'under-1000', label: 'Under ₹1,000' },
      { id: '1000-2000', label: '₹1,000 - ₹2,000' },
      { id: '2000-5000', label: '₹2,000 - ₹5,000' },
      { id: 'over-5000', label: 'Over ₹5,000' }
    ]
  };

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/products/filter', activeFilters);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching filtered products:', error);
      }
    };

    fetchFilteredProducts();
  }, [activeFilters]);

  const handleFilterChange = (category, id) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(id)
        ? prev[category].filter(item => item !== id)
        : [...prev[category], id]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 hover:text-gray-600"
          >
            {isFilterOpen ? <FiX size={20} /> : <FiFilter size={20} />}
            <span>Filters</span>
          </button>

          <div className="flex items-center space-x-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border-none bg-transparent focus:ring-0"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 300, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="shrink-0"
              >
                <div className="sticky top-20 space-y-6">
                  {Object.entries(filterOptions).map(([category, options]) => (
                    <div key={category} className="border-b pb-4">
                      <h3 className="text-lg font-medium mb-3 capitalize">
                        {category}
                      </h3>
                      <div className="space-y-2">
                        {options.map((option) => {
                          const id = typeof option === 'object' ? option.id : option;
                          const label = typeof option === 'object' ? option.label : option;
                          
                          return (
                            <div key={id} className="flex items-center">
                              <input
                                type="checkbox"
                                id={id}
                                checked={activeFilters[category].includes(id)}
                                onChange={() => handleFilterChange(category, id)}
                                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                              />
                              <label htmlFor={id} className="ml-3 text-sm">
                                {category === 'color' && (
                                  <span 
                                    className="inline-block w-4 h-4 rounded-full mr-2"
                                    style={{ backgroundColor: option.hex }}
                                  />
                                )}
                                {label}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  className="group cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={`https://source.unsplash.com/400x600?fashion,men&${product.id}`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">₹{product.price}</p>
                      <div className="flex gap-1">
                        {product.size.map(size => (
                          <span key={size} className="text-xs text-gray-500">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensStore;
