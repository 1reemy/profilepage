import React from 'react'
import pic from "./pic.png"

export default function Pic(){
    return(
        <section className="left">
            <div className='profile'>
                <img src={pic} />
            </div>
        </section>
    )
}