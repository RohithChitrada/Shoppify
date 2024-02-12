import './App.css';
import Shop from './Pages/Shop'
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import Product from "./Pages/Product";
import Navbar from './components/Navbar/Navbar';
import Cart from './Pages/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import mens_banner from './components/Assets/banner_mens.png';
import womens_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
import Signup from './Pages/Signup'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
