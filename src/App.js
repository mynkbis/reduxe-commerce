import logo from './logo.svg';
import './App.css';
import ListPage from './pages/listPage';
import SinglePage from './pages/singlePage'
import { Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/listing" element={<ListPage/>} />
        <Route exact path="/singlePage" element={<SinglePage/>} />
      </Routes>
hello      App
    </div>
  );
}

export default App;
