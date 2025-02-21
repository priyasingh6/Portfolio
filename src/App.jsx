import React from 'react'
import Navbar from "./Sections/Navbar.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Projects from "./Sections/Projects.jsx";
import Client from "./Sections/Client.jsx";
import WorkExperience from "./Sections/WorkExperience.jsx"
import Contact from "./Sections/Contact.jsx";
import Footer from "./Sections/Footer.jsx";

const App = () => {
    return (
       <main className="max-w-7xl mx-auto">
       <Navbar/>
           <Hero/>
           <About/>
           <Projects/>
           <Client/>
<WorkExperience/>
           <Contact/>
           <Footer/>
           </main>
    )
}
export default App
