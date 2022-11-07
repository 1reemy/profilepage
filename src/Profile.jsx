import React from 'react'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Pic from './components/Pic.jsx'
import Social from './components/Social.jsx'

export default function Profile(){
    return(
        <div className="container">
            <Nav />
            <Pic />
            <Main />
            <Social />
        </div>
    )
}