

import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../Components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const email = "ps9986219@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-3 h-full">
                {/* Profile Image and Introduction */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext text-xl font-semibold mb-2 text-white">Hey, I'm Priya...</p>
                            <p className="grid-subtext">
                                With over a year of experience as a web developer, I have honed my skills in frontend and backend development. I have a strong passion for creating visually appealing and user-friendly websites. My goal is to bring your ideas to life and help you achieve your goals.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/gridT.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext text-xl font-semibold mb-2 text-white">Tech Stack...</p>
                            <p className="grid-subtext">
                                I specialize in JavaScript with a focus on ReactJS. I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in using modern tools and frameworks to create dynamic and interactive web applications.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Globe Visualization */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center items-center flex">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: 40,
                                        lon: -100,
                                        text: "I'm here!",
                                        color: "white",
                                        size: 20,
                                    },
                                ]}
                            />
                        </div>

                        <div>
                            <p className="grid-headtext text-xl font-semibold mb-2 text-white">I work remotely across most timezones.</p>
                            <p className="grid-subtext">I'm based in India, with remote work available.</p>
                            <Button name="Contact me" isBeam="true" containerClass="w-full mt-40" />
                        </div>
                    </div>
                </div>

                {/* Passion for Coding */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext text-xl font-semibold mb-2 text-white">My Passion for Coding...</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. It is a way for me to express my creativity and problem-solving skills. Coding isn't just my profession - it's my passion.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2 text-center">
                            <p className="grid-subtext">Contact me</p>
                            <div className="copy-container flex items-center justify-center cursor-pointer" onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" className="w-6 h-6 mr-2" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray-gradient text-neutral-100">{email}</p>
                            </div>
                            {hasCopied && <p className="text-sm text-green-400">Email copied!</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
