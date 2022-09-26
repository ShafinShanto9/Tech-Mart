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
function App() {
  const user = useSelector((state)=> state.user)
  return (
    <BrowserRouter>
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
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='new-product' element={<NewProducts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
