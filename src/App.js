import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Index from './components/Index/Index'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

function App() {
  return (
      <Routes>
        <Route path = '/' element={<Index />}></Route>
        <Route path = '/about' element={<About />}></Route>
        <Route path = '/contact' element={<Contact />}></Route>
        <Route path = '/projects' element={<Projects />}></Route>
      </Routes>
  );
}

export default App;
