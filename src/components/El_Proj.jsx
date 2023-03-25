import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export default function El_Proj(){
    return(
        <>
            <nav id='landing'>
                    <h4>
                        <Link to="/profilepage" className="move">Home</Link>
                    </h4>
                    <h4>
                        <HashLink smooth to='/profilepage/#about' className="move">About</HashLink>
                    </h4>
                    <h4>
                        <HashLink smooth to='/profilepage/#electrical' className="move">Electrical</HashLink>
                    </h4>
                    <h4>
                        <HashLink smooth to='/profilepage/#webdev' className="move">Web Development</HashLink>
                    </h4>
                    <h4>
                        <HashLink smooth to='/profilepage/#contact' className="move">Contact</HashLink>
                    </h4>
            </nav>
            <Outlet/>
        </>
    )
}