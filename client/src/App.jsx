// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,  Routes,  Route} from "react-router-dom";
import Shop from './components/Shop'
import LoginMain from './pages/LoginMain';
//import Men from './components/Men'
//import Women from './components/Women';
//import Kids from './components/Kids';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';
import ShopCategory from './pages/ShopCategory';

import Products from './pages/Products';

export default function App() {
  
  return (
    <div>
      
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><Shop/></>} />
        <Route path="/shop" element={<><Navbar/><Shop/><Footer/></>} />
        <Route path="/men" element={<><Navbar/><ShopCategory banner={men_banner} category="men"></ShopCategory><Footer/></>} />
        <Route path="/women" element={<><Navbar/><ShopCategory banner={women_banner} category="women"></ShopCategory><Footer/></>} />
        <Route path="/kids" element={<><Navbar/><ShopCategory banner={kids_banner} category="kid"></ShopCategory><Footer/></>} />
        <Route path="/cart" element={<><Navbar/><Cart/><Footer/></>} />
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path="/login" element={<><Navbar/><LoginSignup/><Footer/></>} />
        <Route path="/loginpage" element={<><Navbar/><LoginMain/><Footer/></>} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}
