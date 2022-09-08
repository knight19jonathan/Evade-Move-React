import React from 'react';
import './project.css'
import imgArray from './assets/index'
import { v4 as uuidv4 } from 'uuid';


const projects = [
    {
        id: uuidv4(),
        title: 'DnD Machine',
        image: imgArray[3],
        imgdesc: 'DnD Machine',
        description: 'A DnD like game introduction', 
        link: 'https://knight19jonathan.github.io/Adventure-Game-Project-/'
    },
    {
        id: uuidv4(),
        title: 'Play Outside',
        image: imgArray[0],
        imgdesc: 'A Search Result of Trails on Play Outside',
        description: 'A Trail finding and music list review app',
        link: "https://play-outside.herokuapp.com/"
    },
    {
        id: uuidv4(),
        title: 'Weather Cast',
        image: imgArray[2],
        imgdesc: 'Weather Forecast App',
        description: 'A search by city Weather Forecast App',
        link: "https://knight19jonathan.github.io/CastWeather/"
    },
    {
        id: uuidv4(),
        title: 'Notus Potus',
        image: imgArray[1],
        imgdesc: 'A note taking application',
        description: 'A live note taking page',
        link: "https://notus12potus35.herokuapp.com/"
    },
    {
        id: uuidv4(),
        title: 'Waystone',
        image: imgArray[4],
        imgdesc: 'A social media application for DnD.',
        description: 'A live DnD social media application',
        link: "https://jb-waystone-fornt.herokuapp.com/waystone-front/home"
    }
]

function Project() {
    return (
        <main className=' text-center row justify-content-center'>
            {projects.map((element) => {
                return (
                    <section key={element.id} className='col-sm-3 col-md-6'>
                        <a href={element.link} className='proj-card-section'>
                            <div className='text-center col-12 card-title'>
                                <h5>{element.title}</h5>
                            </div>
                            <div className=' row col-12'>
                                <div className='col-1'></div>
                                <img alt={element.imgdesc} src={element.image} className='text-center col-3' />
                                <div className='col-1'></div>
                            </div>
                            <br />
                            <div className=' row col-12'>
                                <div className='row col-1'></div>
                                <div className='row col-10'>
                                    <div className='col-1'></div>
                                    <div className='col-10 text-start'>
                                        <p>
                                            Project description: {element.description}
                                        </p>
                                    </div>
                                    <div className='col-1'></div>
                                </div>
                                <div className='row col-1'></div>

                            </div>
                        </a>
                    </section>
                )
            })}
        </main>
    )
}

export default Project;