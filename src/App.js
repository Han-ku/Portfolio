import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'
import React, { useEffect, useState } from 'react';

function App() {

  const [fileContent, setFileContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/text.txt')
      .then(response => response.text())
      .then(data => {
        setFileContent(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching the text file:', error)
        setFileContent('Failed to load content.')
        setLoading(false);
      })
  }, [])

  return (
    <>
     <BrowserRouter>

      <nav className="flex">
        <div id="nav-brand">
          <h3>Who am I?</h3>
        </div>
        <div id="nav-options">
          <span><Link to='/'>Home</Link></span>
          <span><Link to='/projects'>Projects</Link></span>
          <span><Link to='/contact'>Contact</Link></span>
        </div>
      </nav>

      <div className="flex header">
        <div className="user-info">
          <h1>Hanna Kunitskaya</h1>
          {loading ? (
            <div className="loadingState">
              <i className="fa-solid fa-gear fa-spin"></i>
            </div>
          ) : (
            <p>{fileContent}</p>
          )}
        </div>
        <div className="user-photo">
          <img src="" alt="" className="img-responsive img-circle" />
        </div>
      </div>

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
