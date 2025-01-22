import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Home/Footer";
import landingpage from '../asset/landingpage.svg';
import rocket from '../asset/rocket.svg';
import gshape from '../asset/gshapes.svg';
import halloween from '../asset/halloween.svg';
import webdesign from '../asset/webdesign.svg';
import shopp from '../asset/shopp.svg';
import tricks from '../asset/tricks.svg';
import reality from '../asset/reality.svg';
import './portfolio.css';
import '../Component/navbar.css';

const Portfolio = () => {
    return (
        <>
            {/* Navbar at the top */}
            <Navbar />
            {/* Main content */}
            <section className="work-container">
                <div className="portfolio">
                    <h1>WORKS</h1>
                    <h2>Portfolio</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div className="image-gallery">
                        <img src={landingpage} alt="landingpage" className="img" />
                        <img src={rocket} alt="rocket" className="img" />
                        <img src={gshape} alt="shape" className="img" />
                        <img src={halloween} alt="hallowen" className="img" />
                        <img src={webdesign} alt="webdesign" className="img" />
                        <img src={shopp} alt="shopping" className="img" />
                        <img src={tricks} alt="tricks" className="img" />
                        <img src={reality} alt="virsual" className="img" />
                    </div>
                    <button className="port" id="btn">Learn More</button>
                </div>
            </section>
            {/* Footer at the bottom */}
            <Footer />
        </>
    );
};

export default Portfolio;
