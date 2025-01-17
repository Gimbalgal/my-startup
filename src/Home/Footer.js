import React from 'react';

import fbook from '../asset/fbook.svg';
import grameC from '../asset/grameC.svg'
import twitter from '../asset/twitter.svg';
import pinterest from '../asset/pinterest.svg';
import tune from '../asset/tune.svg';
import whatsapp from '../asset/whatsapp.svg'
import tube from '../asset/tube.svg';

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="social-icon">
                <img src={fbook} alt="facebook-icon" className='social'/>
                <img src={grameC} alt="instagram-icon" className='social' />
                <img src={twitter} alt="twitter-icon" className='social'/>
                <img src={pinterest} alt="pinterest-icon" className='social' />
                <img src={tune} alt="music-icon" className='social' />
                <img src={whatsapp} alt="whatsapp-icon" className='social'/>
                <img src={tube} alt="youtube-icon" className='social'/>
            </div>
            <div className="copyright">© Start, 2022. All rights reserved.</div>
        </section>
    );
}

export default Footer;