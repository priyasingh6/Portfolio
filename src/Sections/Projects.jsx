
import React, {Suspense, useState} from 'react'
import { myProjects } from '../Constants/index.js'
import { Canvas } from '@react-three/fiber'
import {Center, OrbitControls} from '@react-three/drei'
import CanvasLoader from "../Components/CanvasLoader.jsx";
import DemoCom from "../Components/DemoCom.jsx";
const projectCount = myProjects.length;
const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    // const currentProject = myProjects[0];

    const currentProject = myProjects[selectedProjectIndex];

//     this code is little different
const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
        if (direction === 'prev' && prevIndex > 0) {
            return prevIndex - 1;
        } else if (direction === 'next' && prevIndex < projectCount- 1) {
            return prevIndex + 1;
        }
        return prevIndex
    })
}

    return (
        <section className="c-space my-20"  id="work">
            <p className="head-text">My Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
              <div className="absolute top-0 right-0">
                  <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
              </div>

                    <div className="p-3  backdrop-filter backdrop-blur-3xl  rounded-lg  w-fit" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm object-cover" />
                    </div>
                        <div className="flex-col gap-5 text-white-600 my-5">
                            <p className="text-white text-2xl font-semibold animation-text touch-manipulation
                            ">
                                {currentProject.title}
                            </p>
                            <p className="animated-text">
                                {currentProject.desc}
                            </p>
  <p className="animated-text">
                                {currentProject.subdesc}
                            </p>
                        </div>
<div className="flex items-center justify-between flex-wrap gap-5 ">
<div className="flex items-center gap-3">
    {currentProject.tags.map((tag, index) => (
        <div key={index} className="tech-logo">
            <img src={tag.path} alt="tag" />
        </div>
    ))}
</div>
    <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
        <p className="animated-text">
            Check live site
        </p>
        <img src="/assets/arrow-up.png" className="w-3 h-3 " alt="arrow" />
    </a>
</div>
<div className="flex justify-between mt-7 items-center">
    <button className="arrow-btn" onClick={() =>handleNavigation('prev') }>
       <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
    </button> <button className="arrow-btn" onClick={() =>handleNavigation('next') }>
       <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
    </button>
</div>
                </div>
                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full ">
<Canvas>
       <ambientLight intensity={Math.PI} />
    <directionalLight position={[10, 10, 5]} />
    <Center>
        <Suspense fallback={<CanvasLoader/>}>
            <group scale={2} position={[0 ,-3 ,0]} rotation={[0, -0.1, 0]}>
     <DemoCom texture={currentProject.texture}/>
            </group>
            </Suspense>
    </Center>

    <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} />

</Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects



