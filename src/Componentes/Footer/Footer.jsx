import React from 'react';
import Whatsapp from '../Icons/Whatsapp';
import LocationDot from '../Icons/LocationDot';
import Envelope from '../Icons/Envelope';
import Instagram from '../Icons/Instagram';
import Facebook from '../Icons/Facebook';
import Linkedin from '../Icons/Linkedin';
import Pinterest from '../Icons/Pinterest';
import Behance from '../Icons/Behance';
import './Footer.css';

const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="footerColumn01">
                <img src="../logo.png" alt="logo de la marca en blanco y negro 3LRENDER" className="footerImage" />
                <p className="footerDescription">Renders para todo</p>
            </div>

            <div className="footerColumn02">
                <ul className='footerList'>
                    <li>
                        <LocationDot className="footerIcons" />
                        La Paz 1000, Rosario, Santa Fe, Argentina
                    </li>
                    <a href="mailto:linaberrone@outlook.com" className="footerLink">
                        <li>
                            <Envelope className="footerIcons" />
                            linaberrone@outlook.com
                        </li>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5493416465533" className="footerLink">
                        <li>
                            <Whatsapp className="footerIcons" />
                            +549 3416465533
                        </li>
                    </a>
                </ul>
            </div>

            <div className="footerColumn03">
                <div>
                    <Instagram className="footerIcons" />
                    <Facebook className="footerIcons" />
                    <Linkedin className="footerIcons" />
                    <Pinterest className="footerIcons" />
                    <Behance className="footerIcons" />
                </div>
            </div>
        </div>
    )
}

export default Footer