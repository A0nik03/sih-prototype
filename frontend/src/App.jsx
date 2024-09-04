import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import Verify from './pages/Verify/Verify';
import LoginPage from './components/LoginPage/LoginPage';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader/Loader'; 
import 'react-toastify/dist/ReactToastify.css';
import FarmerDetailPage from './components/FarmerDetailPage/FarmerDetailPage';
import FarmerMenu from './components/FarmerMenu/FarmerMenu';
import NegotiationWindow from './components/NegotiationWindow/NegotiationWindow';

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
              <Route path='/farmer-menu' element={<FarmerMenu />} />
              <Route path="/farmer/:id" element={<FarmerDetailPage />} />
              <Route path="/negotiate" element={<NegotiationWindow/>} />
              
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default App;
