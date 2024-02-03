import React from 'react';
import './Menu.scss';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCircleInfo, faHouse, faBook } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import AnimatedLetters from './AnimatedLetters';
import {useState} from 'react';

function Menu() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['O', 'l', 'e', 'h' , ' ', 'S', 't', 'e', 'p', 'u', 'n', 'i', 'a', 'k']

    return (
        <section className = "m-content">
            <div className = "mouse-coords" data-mouse-down-at = "0" data-percentage = "0"></div>
            <div className = "m-logo">
                <AnimatedLetters letterClass = {letterClass} strArray = {nameArray}/> 
            </div>
            <div className = "mf m-pages">
                <NavLink exact = "true" activeclassname = "active" to = "/">
                    <div className = "m-nav m-home"><FontAwesomeIcon icon={faHouse} /> Home</div>
                </NavLink>
                <NavLink exact = "true" activeclassname = "active" to = "/about">
                    <div className = "m-nav m-about"><FontAwesomeIcon icon={faCircleInfo} /> About</div>
                </NavLink>
                <NavLink exact = "true" activeclassname = "active" to = "/contact">
                    <div className = "m-nav m-contact"><FontAwesomeIcon icon={faEnvelope} /> Contact me</div>
                </NavLink>
                <NavLink exact = "true" activeclassname = "active" to = "/projects">
                    <div className = "m-nav m-projects"><FontAwesomeIcon icon={faBook} /> My projects</div>
                </NavLink>
            </div>
        </section>
    )
}

export default Menu;