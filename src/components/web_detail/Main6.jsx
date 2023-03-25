import React from "react"
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

export default function Main(){
    const [project, setProject] = useState({});

    const {id} = useParams();

    async function getTitle() {
        const res = await axios.get(`https://cooperative-jade-dirndl.cyclic.app/projects/webdevelopmentdetail/${id}`);

        const project = await res.data;
        setProject(project);
    }

    useEffect(()=>{
        getTitle()        
    }, [id]);

    const Web = (
        <div className="format">            
            <h2 className="start">Date:</h2>
            <p className="startDate">{project.date}</p><br/>
            <h2 className="end">Stack:</h2>
            <p className="endDate">{project.stack}</p><br/>
            <h2 className="description">Background:</h2>
            <p className="descriptionInfo">{project.description}</p><br/>
            {/*<h2 className="end">Site:</h2>
            <p className="endDate">{project.site}</p><br/>*/}
        </div>
    );

    return(        
        <div>{Web}</div>    
    )
}