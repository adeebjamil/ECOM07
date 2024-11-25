import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Trends from './components/Trends';
import Footer from './components/Footer';
import Items from './components/Items';
import Testmonial from './components/Testmonial';
import Mens from './pages/Mens';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Accessories from './pages/Accessories';
import Beauty from './pages/Beauty';
import MensStore from './pages/MensStore';
import Admin from './Components/AdminLogin';
import ProductCreate from './pages/ProductCreate';
import ProductDetails from './Components/ProductDetails'; // Import the ProductDetails component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/productcreate" element={<ProductCreate />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/MensStore/:category" element={<MensStore />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Add the ProductDetails route */}
        <Route path="/" element={
          <>
            <Hero />
            <Trends />
            <Feature />
            <Items />
            <Testmonial />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
