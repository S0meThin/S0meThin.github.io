import React from 'react';
import './about.scss';
import videoBG from '../../tools/background.mp4'
import Menu from '../Menu'
import Content from './Content'
import { ThreeDots } from 'react-loader-spinner'

function About() {
    return (
        <div className = "a-main">
            <video src = {videoBG} autoPlay loop muted/>
            <div className = "about__menuNcont fullpage-content">
            <div className = "about__content-menu">
                <Menu />
            </div>
            <div className = "about__content-content">
                <Content />
            </div>
            </div>
        </div>
    )
}

export default About;