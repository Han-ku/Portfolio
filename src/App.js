import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'

function App() {

  return (
    <>
        <BrowserRouter>
          <nav className="flex">
            <div id="nav-brand">
              <h3>Who am I?</h3>
            </div>
            <div id="nav-options">
                <span>
                  <NavLink to="/" className={({ isActive }) => (isActive ? 'active-span' : '')} end>Home</NavLink>
                </span>
                <span>
                  <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active-span' : '')}>Projects</NavLink>
                </span>
                <span>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-span' : '')}>Contact</NavLink>
                </span>
              </div>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<h1>404 - Page Not Found</h1>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
