import React from 'react';
import './contact.scss';
import videoBG from '../../tools/background.mp4'
import Menu from '../Menu'
import Content from './Content'
import LowerContent from './LowerContent/LowerContent'
import { useRef, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'

function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
          setIntersecting(entry.isIntersecting)
        );
    
        observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }, [ref]);

    return isIntersecting;
}
  

function Contact() {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
    <div className = "contact__fullpage">
        <video src = {videoBG} autoPlay loop muted playsinline />
        <div className = "contact__menuNcont fullpage-content">
            <div className = "contact__content-menu">
                <Menu />
            </div>
            <div className = "contact__content-content">
                <Content />
            </div>
        </div>
        <div className = "contact__mapNsoc" ref={ref}>
            <LowerContent isVisible={isVisible}/>
        </div>
    </div>
    )
}

export default Contact;