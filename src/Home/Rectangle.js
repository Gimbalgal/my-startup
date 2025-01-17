import React from "react";
import team from '../asset/team.svg';


const Rectangle = () => {
return (
    <div className="main-container">
    
  {/* Welcome/Hero Section */}
    <section className="hero-section">
    <div className="right">
        <img src={team} alt="teamwork" className="teamwork" />
    </div>
        <div className="left">
        <div className="hero-content">
            <h2 className="welcome">WELCOME</h2>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipiscing elit,
                suscipit neque leo quis ab sit nisi hic aenean voluptatem
                velit sed sint maxim, molestion nihil maiores
            </p>
            <button className="explore">Explore</button>
        </div>
        </div>
        

    </section>
    </div>
);
};

export default Rectangle;