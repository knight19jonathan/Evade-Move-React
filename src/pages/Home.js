import React, {  useState } from "react";
import About from "../components/about/about";
import Project from "../components/project/project";
import Contact from "../components/contact/contact";
import Resume from "../components/resume/resume";
import './home.css'


function Home() {

    const [page, setPage] = useState('About')

    function whatToRender(target) {
        if (target === 'Portfolio') {
            return <Project />
        } else if (target === 'Resume') {
            return <Resume />
        } else if (target === 'Contact') {
            return <Contact />
        }
        return <About />
    }

    return (
        <>
            <nav className='row justify-content-around text-center'>
                <div className='col-sm-12 col-md-3'>
                    <button className={`btn ${page === 'About' ? 'active bg-dark border-0' : ''}`} onClick={() => setPage('About')}>About</button>
                </div>
                <div className='col-sm-12 col-md-3'>
                    <button className={`btn ${page === 'Portfolio' ? 'active bg-dark' : ''}`} onClick={() => setPage('Portfolio')}>Portfolio</button>
                </div>
                <div className='col-sm-12 col-md-3'>
                    <button className={`btn ${page === 'Resume' ? 'active bg-dark' : ''}`} onClick={() => setPage('Resume')}>Resume</button>
                </div>
                <div className='col-sm-12 col-md-3'>
                    <button className={`btn ${page === 'Contact' ? 'active bg-dark' : ''}`} onClick={() => setPage('Contact')}>Contact</button>
                </div>
            </nav>
            <br />

            {whatToRender(page)}

        </>

    )




}
export default Home;