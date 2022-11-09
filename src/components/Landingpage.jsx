import React from "react"
import Main from "./landing/Main.jsx"
import Nav from "./landing/Nav.jsx"
import Pic from "./landing/Pic.jsx"
import Social from "./landing/Social.jsx"

export default function Landingpage(){
    return(
        <div className="container">
            <Nav />
            <Pic />
            <Main />
            <Social />
        </div>
    )
}