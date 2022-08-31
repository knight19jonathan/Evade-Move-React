
import React from 'react';
import './footer.css'

function Footer(){
    return(
        <>
        <div className='spacer' style={{minHeight: '40px'}}></div>
        <footer className='fixed-bottom text-center'>


            <button className='btn bg-dark'>
            <a href='https://www.linkedin.com/in/jonathan-knight-b5566a8a/' target='_blank'rel='noopener noreferrer'>LinkedIn</a>
            </button>

            <button className='btn bg-dark'>
            <a href='https://github.com/knight19jonathan' target='_blank'rel='noopener noreferrer'>Github</a>
            </button>



        </footer>
        </>
    )
}

export default Footer;