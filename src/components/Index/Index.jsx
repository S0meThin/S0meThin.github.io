import React from 'react';
import './index.scss';
import videoBG from '../../tools/background.mp4'
import Menu from '../Menu'
import Content from './Content'


function Index() {
    return (
    <div className = "i-main">
        <video src = {videoBG} autoPlay loop muted playsinline />
        <div className = "home__menuNcont fullpage-content">
        <div className = "home__content-menu">
            <Menu />
        </div>
        <div className = "home__content-content">
            <Content />
        </div>
        </div>
    </div>
    )
}

export default Index;