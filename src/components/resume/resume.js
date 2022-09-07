import React from 'react';
import './resume.css'
// import Resume from './resume.pdf'

function Resume(){
    return(
        <div className='text-left'>
            <h1 className='title'>Resume</h1>
            <a href='https://docs.google.com/document/d/1O2J_bfFt8x1dZ868cV-cuYK8pbfcWKbv/edit?usp=sharing&ouid=106037536118220566833&rtpof=true&sd=true' target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-primary'>View Resume</button>
            </a>
        </div>
    )
}

export default Resume;