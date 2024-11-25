import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router navigation
import axios from 'axios';

const ProductCreate = () => {
  const [category, setCategory] = useState(''); // State to manage category
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const [subcategory, setSubcategory] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    // other fields...
  });

  const handleCategoryChange = (e) => setCategory(e.target.value);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/product/create', productData);
      console.log(response.data.message);
    } catch (error) {
      console.error('There was an error creating the product!', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Admin Dashboard</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              >
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <div className="relative">
                <button
                  className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 w-full text-left"
                  onClick={toggleDropdown} // Toggle dropdown on click
                >
                  <span>Products</span>
                </button>
                {/* Dropdown for Products */}
                {dropdownVisible && (
                  <div className="absolute left-0 w-full bg-white shadow-lg rounded-md mt-1">
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => setCategory("Men's")}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          Men's
                        </button>
                        {/* Show subcategories for Men's */}
                        {category === "Men's" && (
                          <div className="pl-4 mt-2">
                            <ul className="space-y-2">
                              <li>
                                <Link
                                  to="/MensStore/tank-tops"
                                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                  Tank Tops
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/MensStore/boxer-shorts"
                                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                  Boxer Shorts
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/MensStore/t-shirts"
                                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                  T Shirts
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/MensStore/shorts"
                                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                  Shorts
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/MensStore/polos"
                                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                  Polos
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/MensStore/trackpants"
                                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                                >
                                  Trackpants
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li>
                        <button
                          onClick={() => setCategory("Women's")}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          Women's
                        </button>
                        {category === "Women's" && (
                          <div className="pl-4 mt-2">
                            <ul className="space-y-2">
                              <li><button onClick={() => setSubcategory("Sports Bikini")} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Sports Bikini</button></li>
                              <li><button onClick={() => setSubcategory("Leggings")} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Leggings</button></li>
                              <li><button onClick={() => setSubcategory("Tank Tops")} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Tank Tops</button></li>
                              <li><button onClick={() => setSubcategory("Shorts")} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Shorts</button></li>
                              <li><button onClick={() => setSubcategory("Yoga Wear")} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Yoga Wear</button></li>
                              <li><button onClick={() => setSubcategory("Loungewear")} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Loungewear</button></li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li>
                        <button
                          onClick={() => setCategory("Kids")}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          Kids
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setCategory("Accessories")}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          Accessories
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setCategory("Beauty")}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          Beauty
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              >
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              >
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Product Management</h1>
            <button className="text-blue-600 hover:underline">Logout</button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Create New Product</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter product price"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter product description"
                ></textarea>
              </div>
              {/* Category Dropdown */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option>Select a category</option>
                  <option>Men's</option>
                  <option>Women</option>
                  <option>Kids</option>
                  <option>Accessories</option>
                  <option>Beauty</option>
                </select>
              </div>
              {category === "Women" && (
                <div>
                  <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Subcategory</label>
                  <select
                    id="subcategory"
                    value={subcategory}
                    onChange={(e) => setSubcategory(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option>Select a subcategory</option>
                    <option>Sports Bikini</option>
                    <option>Leggings</option>
                    <option>Tank Tops</option>
                    <option>Shorts</option>
                    <option>Yoga Wear</option>
                    <option>Loungewear</option>
                  </select>
                </div>
              )}
              {/* Upload Image */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="mt-1 block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {/* Save Product Button */}
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Product
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductCreate;
