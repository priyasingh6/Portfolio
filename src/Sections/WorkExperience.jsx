import React, { Suspense , useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"; // ✅ Fix import
import { workExperiences } from "../Constants/index.js";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import Developer from "../Components/Developer.jsx";

const WorkExperience = () => {

    const [animationName, setAnimationName] = useState('idle');


    return (
        <section className="c-space my-20 text-3xl font-semibold" >
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>

                <div className="work-container">
                    {/* 3D Model Section */}
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={4} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} /> {/* ✅ Fix */}
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position={[0, -3, 0]} scale={3}   animationName={animationName} />


                            </Suspense>
                        </Canvas>
                    </div>

                    {/* Work Experience Content */}
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({ id, name, pos, duration, title, icon ,animation }) => (
                                <div key={id} className="work-content_container group" onClick={()=>setAnimationName(animation.toLowerCase())} onPointerOver={()=>setAnimationName(animation.toLowerCase())} onPointerOut={()=>setAnimationName('idle')}>
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={icon} alt="logo" className="w-full h-full" />
                                        </div>
                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{name}</p>
                                        <p className="text-sm mb-5 text-white-500">
                                            {pos} -- {duration}
                                        </p>
                                        <p className="group-hover:text-white transition ease-in-out duration-500 text-sm">
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;





// import React, {Suspense} from 'react'
// import {Canvas} from "@react-three/fiber";
// import {workExperiences} from "../Constants/index.js";
// import CanvasLoader from "../Components/CanvasLoader.jsx";
// import { OrbitControls } from "@react-three/drei";
//
// import Developer from "../Components/Developer.jsx";
// const WorkExperience = () => {
//     return (
//         <section  className="c-space my-20 text-3xl font-semibold ">
//     <div className=" w-full text-white-600">
//         <h3 className="head-text">
//             My Work Experience
//         </h3>
//         <div className="work-container">
//             <div className="work-canvas">
//                 <Canvas>
//                     <ambientLight intensity={4} />
//          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//                     <directionalLight position={[10, 10, 10]} intensity={1} />
//                     <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
//                     <Suspense fallback={<CanvasLoader/>}>
//                         <Developer position={[0, -3, 0]} scale={3} />
//
//                     </Suspense>
//                 </Canvas>
//             </div>
// <div className="work-content">
//     <div className="sm:py-10 py-5 sm:px-5 px-2.5">
//
//         {workExperiences.map(({id ,name,pos,duration,title,icon ,animation}) =>(
//             <div key={id} className="work-content_container group">
//            <div className=" flex flex-col h-full justify-start items-center py-2 ">
// <div className="work-content_logo ">
//     <img src={icon} alt="logo" className="w-full h-full"/>
// </div>
//
//                 <div className="work-content_bar"/>
//             </div>
//             <div className="sm:p-5 px-2.5 py-5">
//                 <p className="font-bold text-white-800">
//                     {name}
//                 </p>
//                 <p className="text-sm mb-5 text-white-500">
//                     {pos} -- {duration}
//                 </p>
//  <p className="group-hover:text-white transition ease-in-out duration-500  text-sm ">{title}</p>
//             </div>
//
//             </div>
//
//         ))}
//     </div>
// </div>
//         </div>
//
//     </div>
//
//         </section>
//     )
// }
// export default WorkExperience
