import React from 'react'
import "./Footer.css";
import { Link, Typography } from '@mui/material';
import {BsGithub,BsInstagram,BsLinkedin,BsYoutube} from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Typography variant='h5'>About Me</Typography>
                <Typography>
                    Hi , I'm Anshuman and i learn Full-stack developer.
                </Typography>
                <Link to="/contact" className='footerContactBtn'>
                    <Typography>Contact us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant='h6'>Social media</Typography>
                <a href="" target='blank'>
                    <BsGithub></BsGithub>
                </a>
                <a href="" target='blank'>
                    <BsYoutube></BsYoutube>
                </a>
                <a href="" target='blank'>
                    <BsInstagram></BsInstagram>
                </a>
                <a href="" target='blank'>
                    <BsLinkedin ></BsLinkedin>
                </a>
            </div>
        </div>
    )
}

export default Footer
