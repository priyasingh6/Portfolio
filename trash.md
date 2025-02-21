// import React , { useState } from 'react'
// import Globe from "react-globe.gl";
// import Button from "../Components/Button.jsx";
// const About = () => {
//     const [hasCopied, setHasCopied] = useState(false);
//
//     const handleCopy=() => {
//         navigator.clipboard.writeText('ps9986219@gmail.com')
//         setHasCopied(true);
//         setTimeout(() => {
//             setHasCopied(false);
//         },2000)
//     }
//
//     return (
//
//        <section className="c-space my-20" >
//            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-3 h-full ">
//                 <div className="col-span-1 xl:row-span-3">
//                     <div className="grid-container">
//                   <img src = "/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain "/>
//
//                         <div>
//                               <p className="gird-headtext text-xl font-semibold mb-2 text-white ">hey, i'm priya...</p>
//                             <p className="grid-subtext">
//                             with 1 year 6 months of experience as a web developer,I have honed my skills in Frontend and Backend development. i have a strong passion for creating visually appealing and user-friendly websites. My goal is to bring your ideas to life and help you achieve your goals.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//
//                <div className="col-span-1 xl:row-span-3">
//                    <div className="grid-container">
//                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain "/>
//
//                   <div>
//                       <p className="gird-headtext text-xl font-semibold mb-2 text-white ">Tech Stack...</p>
//                       <p className="grid-subtext">I specialize in javascript with a focus on React and Next.js. I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in using modern tools and frameworks to create dynamic and interactive web applications.</p>
//                   </div>
//                </div>
//                </div>
//
//
//              <div className="col-span-1 xl:row-span-4">
//                  <div className="grid-container">
//                      <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center flex">
//                       <Globe
//                       height={326}
//                       width ={326}
//                  backgroundColor="rgba(0, 0, 0, 0)"
//                       backgroundimageOpacity={0.5}
//                       showAtmosphere
//                       showGraticules
//                       globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                       bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                       labelsData={[{
//                           lat:40, lon: -100,
//                           text: "i'm here!",
//                           color: "white",
//                           size: 20,
//                       }]}
//                       />
//                      </div>
//
// <div>
//     <p className="grid-headtext text-xl font-semibold mb-2 text-white">
//         I work remotely across most timezones.
//     </p>
//     <p className=" grid-subtext">
//         I'm based in India, with remote work available.
//     </p>
//     <Button name="Contact me" isBeam="true"
//     containerClass="w-full mt-10"/>
// </div>
//                  </div>
//              </div>
//     <div>
//
//
//         <div className="xl:col-span-2 xl:row-span-3">
//             <div className="grid-container">
//             <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain "/>
//             <div className="">
//                 <p className="grid-headtext text-xl font-semibold mb-2 text-white">
//                     My Passion for Coding...
//                 </p>
//                 <p className="grid-subtext">
//                     {/*Check out my latest projects and see how I have contributed to the world of technology.*/}
//                     I love solving problems and building things through code. It is a way for me to express my creativity and problem-solving skills, Coding isn't just my profession - it's my passion.
//                 </p>
//             </div>
//           </div>
//             </div>
//     </div>
//
//                <div className="xl:col-span-1 xl:row-span-2">
//                    <div className="grid-container">
//                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
//
//               <div className="space-y-2">
//                   <p className="grid-subtext text-center">Contact me</p>
//                   <div className="copy-container" onClick={handleCopy}>
//      <img src={hasCopied ? "assets/tick.svg": "assets/copy.svg"} alt="copy"/>
//                       <p className="lg:text-2xl md:text-xl font-medium text-gray-gradient text-neutral-100">
//                           ps9986219@gmail.com
//                       </p>
//                   </div>
//
//               </div>
//                    </div>
//
//                </div>
//
//            </div>
//        </section>
//     )
// }
// export default About
