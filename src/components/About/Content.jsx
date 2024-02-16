import React from 'react';
import './about.scss';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import Pictures from './Pictures/Pictures'

function Content() {
    return (
        <section className = 'about-content'>
            <div className = 'c-notes c-leftnotes'>
                <div className='c-about'><h1 className = "fs-144">About</h1></div>
                <div className = "c-about-info fs-32">
                    some text over here
                </div>
            </div>
            <div className = 'c-notes c-rightnotes cutoff c-about-rightnotes'>
                <Pictures />
            </div>
        </section>
    )
}

export default Content;