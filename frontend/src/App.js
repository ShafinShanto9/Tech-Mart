import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { useSelector } from 'react-redux';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
