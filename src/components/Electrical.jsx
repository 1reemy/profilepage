import React from "react"
import Main2 from "./electrical/Main2.jsx"
import Header2 from "./electrical/Header2.jsx"
import Left2 from "./electrical/Left2.jsx"

export default function Electrical(){
    return(
        <div className="substation substation1">
            <Header2 />
            <Left2 />
            <Main2 />
        </div>
    )
}