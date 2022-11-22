import React from 'react'
import {Link} from 'react-scroll'

export default function Nav(){
    return(
        <div className='top top1' id="landing">
            <nav>
                <h4 className="move"><Link smooth to ="about">About</Link></h4>
                <h4 className='move'><Link smooth to ="electrical">Electrical</Link></h4>
                <h4 className='move'><Link smooth to ="webdev">Web Development</Link></h4>
                <h4 className='move'><Link smooth to ="contact">Contact</Link></h4>
            </nav>
        </div>
    )
}