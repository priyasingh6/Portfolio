
import {Suspense} from 'react'
import {Canvas  } from "@react-three/fiber";
import HackerRoom from "../Components/HackerRoom.jsx";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import { PerspectiveCamera } from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../Constants/index.js";
import Target from "../Components/Target.jsx";
import ReactLogo from "../Components/ReactLogo.jsx";
import Cube from "../Components/Cube.jsx";
import Ring from "../Components/Ring.jsx";
import HeroCamera from "../Components/HeroCamera.jsx";
import Button from "../Components/Button.jsx";

const Hero = () => {


    const isSmall =useMediaQuery({query:"(max-width: 480px)"});
    const isMobile =useMediaQuery({query:"(max-width: 768px)"})
    const isTablet =useMediaQuery({query:"( min-width: 768px) and (max-width: 1024px)"})
    const sizes =calculateSizes(isSmall,isMobile,isTablet);


    return (
        <section className="min-h-screen w-full flex flex-col relative" id ="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-2">
                <p className="sm:text-3xl text-2xl font-medium text-white font-generalsans text-center">
                    Hey, I am Priya <span className="waving-hand">👋🏼</span>
                </p>
                <p className="hero_tag text-gray_gradient ">
                    A Passionate Full-Stack Developer!
                </p>
            </div>
 {/*3D canvas section starts from here*/}
            <div className="w-full h-full absolute inset-0">
                        {/*<Leva />*/}
                <Canvas className="w-full h-full  ">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
             {/*Light*/}


                        {/*3D model*/}
                        <HeroCamera isMobile={isMobile}>

                        <HackerRoom
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                            scale={sizes.deskScale}
                        />
                        </HeroCamera>


                       <group>

                           <Target position={sizes.targetPosition}   />
                           <ReactLogo position={sizes.reactLogoPosition} />
                           <Cube position={sizes.cubePosition} />
                           <Ring position={sizes.ringPosition} />
                       </group>


                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        {/* Camera Controls */}
                        {/*<OrbitControls enableZoom={true} />*/}

                    </Suspense>
                </Canvas>
            </div>
   <div className="absolute bottom-7 left-0 right-0 w-full z-50 c-space">
               <a href="#about" className=" w-fit">

                   <Button name="Let'Work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                   </a>
    </div>

        </section>
    )
}
export default Hero
