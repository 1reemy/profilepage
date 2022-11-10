import React from 'react'
import pic from "./pic.png"

export default function Pic(){
    return(
        <section className="left left1">
            <div className='profile profile1'>
                <img src={pic} className="pose pose1" />
            </div>
        </section>
    )
}