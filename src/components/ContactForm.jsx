import React from 'react'
import Contact from './contact/Contact.jsx'
import Social from './contact/Social.jsx'

export default function ContactForm(){
    return(
        <div className = "formContact formContact1">
            <Contact />
            <Social />
        </div>
    )
}