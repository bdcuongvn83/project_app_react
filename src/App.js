import './App.css';
import ProductAppContext from './Product/ProductAppContext';
import ProductAddContext from './Product/ProductAddContext';

import React from "react";
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';

function App() {
  
  function Home() {
    return <h1>Home Page</h1>;
  }
  
  function About() {
    return <h1>About Page</h1>;
  }

  return (

    <div className="App" >
       <BrowserRouter>
            <nav >
              <Link to="/">Home</Link>
              <Link to="/about"> | About </Link>
              <Link to="/ProductApp"> | Contact</Link>
            </nav>
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            
              <Route path="/ProductApp" element={<ProductAppContext />} />
              <Route path="/ProductAdd" element={<ProductAddContext />} />
            </Routes>
          </BrowserRouter>
          
         
      
    </div>
    
  );
}

export default App;
