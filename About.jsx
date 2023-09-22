import React from 'react'
import "./About.css";
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutContainer'>
        <Typography>This is a sample quote </Typography>
      </div>
      <div className='aboutContainer2'>
        <div>
            <img  src="https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg" alt="Anshuman" className='aboutAvatar' />
            <Typography variant='h4' style={{margin:"1vmax 0",color:"black"}}>Anshuman</Typography>
            <Typography>Full stack developer</Typography>
            <Typography style={{margin:"1vmax 0"}}>I'm a learner and student</Typography>
        </div>
        <div>
            <Typography style={{wordSpacing:"5px",lineHeight:"50px",letterSpacing:"5px",textAlign:"right",}}>
            This is a description and we tell aboutsites.
            </Typography>
        </div>
      </div>
    </div>
  )
};

export default About
