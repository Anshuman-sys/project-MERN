import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from "three";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import {Link, Typography} from "@mui/material";
import TimeLine from '../TimeLine/TimeLine';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { MouseOutlined } from '@mui/icons-material';


const Home = () => {

  useEffect(() => {

    const textureLoader=new THREE.TextureLoader();
    const moonTexture=textureLoader.load(moonImage);
    const venusTexture=textureLoader.load(venusImage);
    const spaceTexture=textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(4,4,8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeomatry = new THREE.SphereGeometry(2,64,64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map:moonTexture });
    const moon = new THREE.Mesh(moonGeomatry, moonMaterial);
    moon.rotation.y = 1;

    const venusGeomatry = new THREE.SphereGeometry(3,64,64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map:venusTexture });
    const venus = new THREE.Mesh(venusGeomatry, venusMaterial);
    venus.position.set(8,5,5);

    

    const pointLight = new THREE.PointLight(0xffffff, 3);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(8,5,5);
    pointLight2.position.set(-8,-5,-5);

    // const lightHelper=new THREE.PointLightHelper(pointLight);
  


    // const controls=new OrbitControls(camera,renderer.domElement);
    scene.add(moon);
    scene.add(pointLight);
    // scene.add(lightHelper);
    scene.add(venus);
    scene.add(pointLight2);
    scene.background=spaceTexture;

    const constSpeed=0.01;
    window.addEventListener("mousemove",(e)=>{
      if(e.clientX <= window.innerWidth/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y +=constSpeed;
        venus.rotation.x -=constSpeed;
        venus.rotation.y +=constSpeed;
      }

      if(e.clientX > window.innerWidth/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y -=constSpeed;
        venus.rotation.x -=constSpeed;
        venus.rotation.y -=constSpeed;
      }

      
      if(e.clientY > window.innerHeight/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y +=constSpeed;
        venus.rotation.x -=constSpeed;
        venus.rotation.y +=constSpeed;
      }

      if(e.clientY <= window.innerHeight/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y -=constSpeed;
        venus.rotation.x -=constSpeed;
        venus.rotation.y -=constSpeed;
      }
    });

   

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y +=0.001;
      venus.rotation.y +=0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return   window.addEventListener("scroll",()=>{
      camera.rotation.z=window.scrollY*0.003
      camera.rotation.y=window.scrollY*0.003

      const skillsBox=document.getElementById("homeskillsBox");
      if(window.scrollY>1500)
      {
        skillsBox.style.animationName="homeskillsBoxAnimationOn";
      }
      else{
        skillsBox.style.animationName="homeskillsBoxAnimationOff";
      }
    });
  }, []);


  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
      <div className='homeCanvasContainer'>
          <Typography variant='h1'>
                  <p>A</p>
                  <p>N</p>
                  <p>S</p>
                  <p>H</p>
                  <p>U</p>
                  <p>M</p>
                  <p>A</p>
                  <p>N</p>
          </Typography>
          <div className='homeCanvasBox'>
                <Typography variant='h2'>
                      Design Websites
                </Typography>
                <Typography variant='h2'>Developer</Typography>
          </div>
          <Link to="/projects">View Work</Link>
      </div>
      <div className='homeScrollBtn'>
        <MouseOutlined />
      </div>
      <div className='homeContainer'>
      <Typography variant="h3">TIMELINE</Typography>
      <TimeLine timelines={[1,2,3,4]}/>
      </div>
      <div className='homeSkills'>
        <Typography variant='h3'>SKILLS</Typography>
        <div className='homeCubeSkills'>

          <div className='homeCubeSkillsFaces homeCubeSkillsFace1'>
          <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"  alt="Face1" />
          </div>

          <div className='homeCubeSkillsFaces homeCubeSkillsFace2'>
          <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200"  alt="Face2" />
          </div>

            
          <div className='homeCubeSkillsFaces homeCubeSkillsFace3'>
          <img src="https://img.freepik.com/premium-photo/planets-galaxy-science-fiction-wallpaper-beauty-deep-space_877354-95.jpg"  alt="Face3" />
          </div>

          <div className='homeCubeSkillsFaces homeCubeSkillsFace4'>
          <img src="https://img.freepik.com/premium-photo/space-art-is-breathtakingly-lovely-science-fiction-wallpaper-universe-without-end-this-images-components-were-provided-by-nasa_872147-18380.jpg" alt="Face4" />
          </div>

            
          <div className='homeCubeSkillsFaces homeCubeSkillsFace5'>
            <img src="https://img.freepik.com/premium-photo/deep-space-planets-science-fiction-imagination-cosmos-landscape-elements-this-image-furnished-by-nasa_872147-279.jpg"  alt="Face5" />
          </div>

          <div className='homeCubeSkillsFaces homeCubeSkillsFace6'>
            <img src="https://img.freepik.com/premium-photo/colorful-painting-mountain-universe_900958-36919.jpg"  alt="Face6" />
          </div>
        </div>
        <div className='cubeShadow'></div>
        <div className='homeskillsBox' id="homeskillsBox">
            <SiCplusplus />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
            <SiThreedotjs />
        </div>
      </div>
      <div className='homeYoutube'>
        <Typography variant='h3'>YOUTUBE VIDEOS</Typography>
        <div className='homeYoutubeWrapper'>
          <YoutubeCard image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" title='sample video' />
          <YoutubeCard image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" title='sample video' />
          <YoutubeCard image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" title='sample video' />
          <YoutubeCard image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" title='sample video' />
        </div>
      </div>
    </div>
  )
}

export default Home


