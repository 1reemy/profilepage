import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Pic from './electrical.jpg'
import axios from 'axios'

const Electrical = (props) => {
    const project = props.project;

    return(
        <div className="card">
            <img src= {Pic} className='display' />
            <div className='desc'>
                <h1 className="projecttitle"><Link className="newpage" to={`/profilepage/elec_detail/${project._id}`}>{project.title}</Link></h1>
            </div>
        </div>
    )
}

export default function Main(){
    const [projects, setProjects] = useState([]);

    const getProjects = async() => {
        /*
          const res = await fetch('http://localhost:8000/projects/electricallist');
          const projects = await res.json();
          setProjects(projects);
          use above fetch api code if you decide not to use axios.
        */
        const res = await axios.get('https://cooperative-jade-dirndl.cyclic.app/projects/electricallist');
        const projects = res.data;
        setProjects(projects);
    }

    useEffect(()=>{
        getProjects()
    },[]);

    const projectList = projects.length === 0 ? 'No projects listed' 
    : projects.map((project, k) => <Electrical project={project} key={k} />);
  
    return(
        <div className="list">{projectList}</div>
    )
}