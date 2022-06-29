import logo from './logo.svg';
import './App.css';
import ListPage from './pages/listPage';
import SinglePage from './pages/singlePage'
import { Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import NotFound from './pages/notFound';
import Cart from "./components/cart"
function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route exact path="/listing" element={<ListPage />} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/listing/:id" element={<SinglePage/>} /> 
        <Route path='*' element={<NotFound/>}>404!</Route>
      </Routes>
       </div>
  );
}

export default App;
