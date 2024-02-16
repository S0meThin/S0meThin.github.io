import React from 'react';
import './projects.scss';
import videoBG from '../../tools/background.mp4'
import Menu from '../Menu'
import Content from './Content'


function Contact() {
    return (
    <div className = "c-main">
        <video src = {videoBG} autoPlay loop muted playsinline />
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

export default Contact;