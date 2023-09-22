import React from 'react'
import "./Projects.css";
import { Button, Typography } from '@mui/material';
import {AiOutlineProject} from "react-icons/ai";
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from "react-icons/fa";

export const ProjectCard=({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
})=>{
   return (
    <>
    <a href={url} className='projectCard'>
        <div>
            <img srd={projectImage} alt="Project"/>
            <Typography variant='h5'>{projectTitle}</Typography>
        </div>
        <div>
            <Typography variant='h4'>About Projects </Typography>
            <Typography>{description}</Typography>
            <Typography variant='h6'> Tech stack:{technologies}</Typography>
        </div>
    </a>
    {isAdmin &&(
        <Button style={{color:"rgba(40,40,40,0.7)"}}>
            <Delete></Delete>
        </Button>
    )}
    </>
   );
};


const Projects = () => {
    const projects=[1,2,3];
  return (
    <div className='projects'>
      <Typography variant='h3'>
        Projects<AiOutlineProject />
      </Typography>
      <div className='projectsWrapper'>
        {projects.map((project,index)=>(
            <ProjectCard 
            url=""
            projectImage="https://img.freepik.com/premium-photo/harmonious-symphony-abstract-multicolored-artistry_968519-1949.jpg"
            projectTitle="Sample project"
            description="This is a sample project which made by me"
            technologies="React,Mongodb,Nodejs and Express"
            />
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        These project are sample  <FaRegSmileWink />
      </Typography>
    </div>
  )
}

export default Projects
