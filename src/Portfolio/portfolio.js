import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Home/Footer";
import landing from '../asset/landing.png';
import web from '../asset/web.png';
import rocket from '../asset/rocket.png';
import geo from '../asset/geo.png';
import halloween from '../asset/halloween.png';
import sample from '../asset/sample.jpg';
import treat from '../asset/treat.png';
import reality from '../asset/reality.png';
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
                    <div className="work">
                        <h1>WORKS</h1>
                        <h2>Portfolio</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="image-gallery">
                        <img src={landing} alt="landingpage" className="img" />
                        <img src={web} alt="webdesign" className="img" />
                        <img src={rocket} alt="rocket" className="img" />
                        <img src={geo} alt="shape" className="img" />
                        <img src={halloween} alt="hallowen" className="img" />
                        <img src={sample} alt="shopping" className="img" />
                        <img src={treat} alt="tricks" className="img" />
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
