import React from 'react';
import './Menu.scss';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCircleInfo, faHouse, faBook, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import AnimatedLetters from './AnimatedLetters';
import {useState, useRef, useEffect} from 'react';

function Menu() {

    const mobileRef = useRef()
    function handleButton() {
        mobileRef.current.classList.toggle("display");
    }    

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['O', 'l', 'e', 'h' , ' ', 'S', 't', 'e', 'p', 'u', 'n', 'i', 'a', 'k']
    const barsRef = useRef()
    const closeRef = useRef()

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
            <div className = "m-bars">
                <FontAwesomeIcon className = "m-bars-icon" ref = {barsRef} icon={faBars} onClick = {handleButton}/>
            </div>
            <div className = "expandable_menu" ref={mobileRef}>
                <NavLink exact = "true" activeclassname = "active" to = "/">
                    <div className = "m-nav m-home fitLink"><FontAwesomeIcon icon={faHouse} /> Home</div>
                </NavLink>
                <NavLink exact = "true" activeclassname = "active" to = "/about">
                    <div className = "m-nav m-about fitLink"><FontAwesomeIcon icon={faCircleInfo} /> About</div>
                </NavLink>
                <NavLink exact = "true" activeclassname = "active" to = "/contact">
                    <div className = "m-nav m-contact fitLink"><FontAwesomeIcon icon={faEnvelope} /> Contact me</div>
                </NavLink>
                <NavLink exact = "true" activeclassname = "active" to = "/projects">
                    <div className = "m-nav m-projects fitLink"><FontAwesomeIcon icon={faBook} /> My projects</div>
                </NavLink>
                <FontAwesomeIcon icon={faXmark} ref={closeRef} className = "mt-20" onClick = {handleButton}/>
            </div>
        </section>
    )
}

export default Menu;