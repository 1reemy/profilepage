import React from "react"
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

export default function Main(){
    const [project, setProject] = useState({});

    const {id} = useParams();

    async function getTitle() {
        const res = await axios.get(`https://cooperative-jade-dirndl.cyclic.app/projects/electricaldetail/${id}`);

        const project = await res.data;
        setProject(project);
    }

    useEffect(()=>{
        getTitle()        
    }, [id]);

    const Electrical = (
        <div className="format">
            <h2 className="client">Client:</h2> 
            <p className="clientName">{project.client}</p><br/>
            <h2 className="start">Start:</h2>
            <p className="startDate">{project.start_date}</p><br/>
            <h2 className="end">End:</h2>
            <p className="endDate">{project.end_date}</p><br/>
            <h2 className="description">Background:</h2>
            <p className="descriptionInfo">{project.description}</p><br/>
        </div>
    );

    return(        
        <div>{Electrical}</div>    
    )
}