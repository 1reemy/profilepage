import React from 'react'
import Code from './code.png'
import Page from './page.png'

export default function Left(){
    return(
        <section className="fromleft">
            <div className='style'>
                <img src={Code} className="electrical electrical2" />
                <img src={Page} className="code code1" />
            </div>
        </section>
    )
}