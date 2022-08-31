import React from 'react';
import './resume.css'
import Resume from './resume.pdf'

function ResumePage(){
    return(
        <div className='text-left'>
            <h1 className='title'>Resume</h1>
            <a href={Resume} target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-primary'>Download</button>
            </a>
        </div>
    )
}