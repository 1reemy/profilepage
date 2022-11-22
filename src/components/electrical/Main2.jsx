import React from 'react'
import {Link} from 'react-scroll'

export default function Main(){
    return(
        <section className="right right3">
            <div className="header header3">
                <p className='paragraph paragraph1'>Skilled In:</p>
                <ul className='paragraph paragraph1'>
                    <li>120-480V Electrical Power System Design</li>
                    <li>Electrical Instrumentation and Controls Design</li>
                    <li>Motor Control System Design</li>
                    <li>Standby Power System Design</li>
                    <li>Material Estimation</li>
                    <li>System Maintenance</li>
                    <li>Computer Aided Design</li>
                </ul>                
            <p className='paragraph paragraph1 paragraph5'><br/><Link className="return" smooth to="landing">To Top</Link></p>
            </div>
        </section>
    )
}