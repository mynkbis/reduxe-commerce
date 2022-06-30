  
import './App.css';
import Navbar from './components/navbar';
import Cart from './components/cart';
import ListPage from './pages/listPage';
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/error'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route exact path="/listing" element={<ListPage/>} />
        <Route exact path="/cart" element={<Cart/>} />
             <Route path='*' element={<NotFound/>}>404!</Route>
      </Routes> 
       </div>
  );
}

export default App;
