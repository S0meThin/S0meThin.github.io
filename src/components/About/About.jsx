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
            <div className = "content">
            <div className = "content-menu">
                <Menu />
            </div>
            <div className = "content-content">
                <Content />
            </div>
            </div>
        </div>
    )
}

export default About;