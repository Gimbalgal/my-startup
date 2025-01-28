import React from 'react';
import google from '../asset/google.png';
import microsoft from '../asset/microsoft.svg';
import airbnb from '../asset/airbnb.svg';
import facebook from '../asset/facebook.png';
import spotify from '../asset/spotify.png';

const Partner = () => {
    return ( 
            <div className="partners">
                <div className="text">
                    <h1>PARTNERS</h1>
                    <h2>Lorem Ipsum Dolor</h2>
                    <h3>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.</h3>
                </div>
                    <section className="partner-logo">
                        <div className="partner-icon">
                            <img src={google} alt="google-icon" className='icon' />
                            <img src={microsoft} alt="microsoft-icon" className='icon' />
                            <img src={airbnb} alt="airbnb-icon" className='icon' />
                            <img src={facebook} alt="facebook-icon" className='icon' />
                            <img src={spotify} alt="spotify-icon" className='icon' />
                        </div>
                        <button className="more" id="more-btn">Learn More</button>
                    </section>
            </div>

    );
}

export default Partner;