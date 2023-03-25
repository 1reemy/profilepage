import React from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function Main(){
    return(
        <section className="right right3">
            <div className="header header3">
                <p className='paragraph paragraph1'>Experienced In:</p>
                <ul className='paragraph paragraph1'>
                    <li>120-480V Electrical Power System Design</li>
                    <li>Electrical Instrumentation and Controls Design</li>
                    <li>Motor Control System Design</li>
                    <li>Standby Power System Design</li>
                    <li>Material Estimation</li>
                    <li>System Maintenance</li>
                    <li>Computer Aided Design</li>
                </ul>                
                <p className='paragraph paragraph1 paragraph5'><br/><Link className="href" to="/profilepage/elec_list">Electrical Projects</Link></p>
                <p className='paragraph paragraph1 paragraph5'><br/><HashLink className="return1" smooth to="/profilepage/#landing">To Top</HashLink></p>
            </div>
        </section>
    )
}