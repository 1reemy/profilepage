import React from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import About from './About.jsx'
import Electrical from './Electrical.jsx'
import Webdev from './Webdev.jsx'

export default function Move(){
    return(
        <Router>
            <div className="nav">
                <NavLink to="/about"><h4>About</h4></NavLink>
                <NavLink to="/electrical"><h4>Electrical</h4></NavLink>
                <NavLink to="/webdev"><h4>Web Dev</h4></NavLink>

            </div>                      
           <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/electrical" element={<Electrical />} />
                <Route exact path="/webdev" element={<Webdev />} />
           </Routes>
        </Router>
    )
}