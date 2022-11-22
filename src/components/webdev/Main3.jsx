import React from 'react'
import {Link} from 'react-scroll'

export default function Main(){
    return(
        <section className="right right3">
            <div className="header header3">
                <p className='paragraph paragraph3'>Skilled In Website and Web Application Development Using:</p>
                <ul className='paragraph paragraph3'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>GIT</li>
                </ul>
                <p className='paragraph paragraph3'>Visit My Github Profile for more!</p>
                <p className='paragraph paragraph1'><br/><br/><Link className="return" smooth to="landing">To Top</Link></p>
            </div>
        </section>
    )
}