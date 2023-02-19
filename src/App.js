
import './App.css';
import { Routes, Route} from "react-router-dom";
import AboutMe from './AboutMe';
import Home from './Home';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import Experience from './Experience';
import Projects from './Projects';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='about' element={ <AboutMe/> }/>
        <Route path='/projects' element={ <Projects/> }/>
        <Route path='/experience' element={ <Experience/> }/> 
      </Routes>
    </div>
  );
}

export default App;
