import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { useSelector } from 'react-redux';
import NewProducts from './pages/NewProducts';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';

function App() {
  const user = useSelector((state)=> state.user)
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navigation />
      <Routes>
        <Route index element={ <Home/>} />
        <Route path='*' element={ <Home/>} />
        {
          !user && (
            <>
              <Route path='/login' element={ <Login/>} />
              <Route path='/signup' element={ <SignUp/>} />
            </>
          )
        }
        {
          user && (
            <>
              <Route path='/cartpage' element={<CartPage/>} />
              <Route path='/orders' element={<OrderPage/>} />
            </>
          )
        }
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='new-product' element={<NewProducts/>} />
        <Route path='/category/:category' element={<CategoryPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
