import React from 'react'
import Code from './code.png'
import Page from './page.png'

export default function Left(){
    return(
        <section className="fromleft fromleft3">
            <div className='style style3'>
                <img src={Code} className="electrical electrical3" />
                <img src={Page} className="code code1" />
            </div>
        </section>
    )
}