
import React from 'react';
import './about.css'
import profpic from './prof.jpeg'

export default function About() {
    return (
    
        <main>
            <div className='row justify-content-center'>
                <h2 className='text-center'>About Me</h2>
                <div className='col-sm-12 col-md-6'>
                    <img src={profpic} alt='Jonathan Knight' className='img-fluid' />
                </div>
                <div className='col-sm-12 col-md-6'>
                    <h2>Jonathan Knight</h2>
                    <p>I am a full stack web developer with a passion for creating web applications. I have a background in
                        emergency medical services and a passion for creating web applications. I am currently looking for a position in the web development field.</p>
            </div>
            

        </main>
    )
}

