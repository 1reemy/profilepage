import React from 'react'
import Code from './code.png'
import Electrical from './electrical.jpg'

export default function Left(){
    return(
        <section className="fromleft">
            <div className='style'>
                <img src={Electrical} className="electrical" />
                <img src={Code} className="code"/>
            </div>
        </section>
    )
}