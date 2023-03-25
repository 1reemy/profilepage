import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Web = (props) => {
    const project = props.project;

    return(
        <div className="card">
            <img className="display" />
            <div className="desc">
                <h1 className="projecttitle"><Link to={`/profilepage/web_detail/${project._id}`} className="newpage">{project.website}</Link></h1>
            </div>
        </div>
    )    
};

export default function Main(){
    const [projects, setProjects] = useState([]);

    const getProjects = async() => {
        /*
          const res = await fetch('http://localhost:8000/projects/electricallist');
          const projects = await res.json();
          setProjects(projects);
          use above fetch api code if you decide not to use axios.
        */
        const res = await axios.get('https://cooperative-jade-dirndl.cyclic.app/projects/weblist');
        const projects = res.data;
        setProjects(projects);
    }

    useEffect(()=>{
        getProjects()
    },[])

    const webProjects = projects.length === 0 ? 'No Web Projects' :
    projects.map((project,k)=><Web project={project} key={k} />) 
    
    
    return(
        <div className="list">{webProjects}</div>
    )
}