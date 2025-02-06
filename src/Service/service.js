import React from "react";
import Navbar from "../Component/Navbar"; 
import Footer from "../Home/Footer"; 
import './service.css'; 

const Service = () => {
    return ( 
        <>
        <Navbar />
        <section className="service-container">
            <div className="service">
                <h1>PLANS</h1>
                <h2>Our Service</h2>
                <p>Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit.</p>
            </div>
        <div className="cards">
            <div className="card-list">
                <div className="heading">Basic</div> 
                <div className="plan"><span>$100</span> /month</div>  
                <div className="body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="body-list">
                        <ul>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                        </ul>
                    </div>
                </div>
                <button className="basic">Learn More</button>
            </div>
            <div className="card-list">
                <div className="heading">Plus</div> 
                <div className="plan"><span>$250</span> /month</div>  
                <div className="body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="body-list">
                        <ul>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                        </ul>
                    </div>
                </div>
                <button className="basic">Learn More</button>
            </div>
            <div className="card-list">
                <div className="heading">Pro</div> 
                <div className="plan"><span>$400</span> /month</div>  
                <div className="body">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="body-list">
                        <ul>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                            <li>Lorem ipsum, dolor sit </li>
                        </ul>
                    </div>
                </div>
                <button className="basic">Learn More</button>
            </div>
        </div>
        </section>
        <Footer />
        </>
    );
}

export default Service;
