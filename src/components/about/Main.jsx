import React from 'react'
import {Link} from 'react-scroll'

export default function Main(){
    return(
        <section className="right right2">
            <div className="header header2">
                <p className='paragraph paragraph1'>
                    An Electrical Engineer with over a decade's worth of experience in electrical system design and maintenance. I have worked in various
                    industries spanning residential, commercial and industrial applications.
                    <br/><br/>I am also a Web Developer capable of designing fully responsive websites and web applications using the latest frameworks and languages.
                    <br/><br/><Link className="return" smooth to="landing">To Top</Link>
                </p>
            </div>
        </section>
    )
}