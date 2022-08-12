import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './components/Work';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/About';

function App() {

  const [selectedPage, setSelectedPage] = useState("Work")

  return (
    <div className="App">
      <div>
     <BrowserRouter> 
      <Header />
    <Routes> 
      <Route path='/' element={<Work />} exact />
      <Route path='/about' element={<About />} />
      
    </Routes>
    </BrowserRouter>
    </div>
      {/* {selectedPage === "Work" ? <Work /> : <About /> } */}

      <Footer year={new Date().getFullYear()} />

    </div>
  );
}

export default App;
