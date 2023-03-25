import React from "react"
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

export default function Header(){
    const [project, setProject] = useState({});

    const {id} = useParams();

    async function getTitle() {
        const res = await axios.get(`http://localhost:8000/projects/webdevelopmentdetail/${id}`);

        const project = await res.data;
        setProject(project);
    }

    useEffect(()=>{
        getTitle()        
    }, [id]);

    const Web = (
            <h1>{project.website}</h1>
    );

    return(        
        <div className="header">{Web}</div>    
    )
}