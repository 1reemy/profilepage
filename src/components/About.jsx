import React from "react"
import Header from "./about/Header.jsx"
import Main from "./about/Main.jsx"
import Left from "./about/Left.jsx"

export default function About(){
    return(
        <div className="about">
            <Header />
            <Left />
            <Main />
        </div>
    )
}