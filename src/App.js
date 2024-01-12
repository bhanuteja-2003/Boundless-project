import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/women_banner.png';
import men_banner from './Components/Assets/men_banner.png'
import kids_banner from './Components/Assets/kids_banner.png'
function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/women" element={<ShopCategory  banner={women_banner} category="women"/>} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} /> 
        </Route >
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
