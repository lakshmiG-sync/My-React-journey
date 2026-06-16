import React from 'react'
import './App.css'
import Home from './component/UseNavigate/Home';
import Result from './component/UseNavigate/Result';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <nav>
            <NavLink to='/'></NavLink>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/result/:regno' element={<Result/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App