import React from 'react';
import './lowerContent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { faYoutube, faLinkedin, faXTwitter, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'

const LowerContent = ({isVisible}) => {
    if (isVisible) {
        return (
            <section className = "content-lowerContent">
                <div className = "lowerContent-socials">
                <div className = "mf m-socials">
                <Link to = ''>
                    <div className = "m-youtube"><FontAwesomeIcon icon={faYoutube} /></div>
                </Link>
                <Link to = ''>
                    <div className = "m-github"><FontAwesomeIcon icon={faSquareGithub} /></div>
                </Link>
                <Link to = ''>
                    <div className = "m-twitterx"><FontAwesomeIcon icon={faXTwitter} /></div>
                </Link>
                <Link to = ''>
                    <div className = "m-linkedin"><FontAwesomeIcon icon={faLinkedin} /></div>
                </Link>
            </div>
                </div>
                <div className = "lowerContent-map">
                    <div className = "lowerContent-map-info">
                        Oleh Stepuniak - Edmonton, AB, Canada
                    </div>
                    <br />
                    <div className='lowerContent-map-map'>
                        <MapContainer center={[53.54619816035487, -113.49520262041003]} zoom={4} zoomControl={false} scrollWheelZoom={false} doubleClickZoom={false} touchZoom={false} boxZoom={false} >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
                            <Marker position = {[53.54619816035487, -113.49520262041003]}>
                                <Popup>Oleh lives here</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </section>
        )
    }
    else {
        return (
            <section className = "content-lowerContent">

            </section>
        )
    }
}

export default LowerContent;