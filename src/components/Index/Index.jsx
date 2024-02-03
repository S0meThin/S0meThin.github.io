import React from 'react';
import './index.scss';
import videoBG from '../../tools/background.mp4'
import Menu from '../Menu'
import Content from './Content'


function Index() {
    return (
    <div className = "i-main">
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

export default Index;