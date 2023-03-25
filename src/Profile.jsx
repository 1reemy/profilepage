import React from 'react'
import Landingpage from './components/Landingpage.jsx'
import About from './components/About.jsx'
import Electrical from './components/Electrical.jsx'
import Webdev from './components/Webdev.jsx'
import ContactForm from './components/ContactForm.jsx'

export default function Profile(){
    return(        
        <div className='background background1 background2 background3 background4 background5'>
            <Landingpage />
            <About />            
            <Electrical />
            <Webdev /> 
            <ContactForm />     
        </div>
    )
}