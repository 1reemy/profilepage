import React from 'react'
import Landingpage from './components/Landingpage.jsx'
import About from './components/About.jsx'
import Electrical from './components/Electrical.jsx'
import Webdev from './components/Webdev.jsx'

export default function Profile(){
    return(
        <div className='background'>
            <Landingpage />
            <About />  
            <Electrical />
            <Webdev />          
        </div>
    )
}