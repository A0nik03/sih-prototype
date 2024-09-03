import {React, useState} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import Verify from './pages/Verify/Verify';
import FarmerMenu from './components/FarmerMenu/FarmerMenu';
import LoginPage from './components/LoginPage/LoginPage';
import { ToastContainer } from 'react-toastify';
import ParallaxSection from './components/Parallax/Parallax';
import Loader from './components/Loader/Loader'; 
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <ToastContainer />
      <div className='app'>
      {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/order' element={<PlaceOrder />} />
              <Route path='/myorders' element={<MyOrders />} />
              <Route path='/verify' element={<Verify />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
            {location.pathname === '/' && <FarmerMenu />}
            {location.pathname === '/'&& <ParallaxSection/>}
            <Footer />
          </>
        )}
        </div>
    </>
  );
};

export default App;
