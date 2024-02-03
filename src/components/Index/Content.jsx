import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPython,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

function Content() {
    return (
        <section className = 'c-content'>
            <div className = 'c-notes c-leftnotes'>
                <div className = 'c-introduction'>
                    <span className="fs-72">Hey,</span><br/>I`m Oleh Stepuniak<br/><span class = "fs-32">Front-End, Back-End developer.</span>
                </div>
                <Link to = "/contact">
                    <div className = 'interactive-btn'>
                        Contact me
                    </div>
                </Link>
            </div>
            <div className = 'c-notes c-rightnotes'>
                <div className = "c-animation">
                    <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face2">
                        <FontAwesomeIcon icon={faPython} color="#28A4D9" />
                        </div>
                        <div className="face3">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className = "c-description">
                Javascript / React / Django is what I`m best at. <br/>Wanna learn more?
                </div>
                <Link to = "/about" className='about-btn'>
                    <div className = "interactive-btn">
                        About me
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Content;