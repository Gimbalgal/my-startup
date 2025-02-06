
import React from "react";
import Rectangle from "./Rectangle";
import Partner from "./Partner";
import Reachout from "./Reachout";
import Feedback from "./Feedback";
import Team from "./Team";
import Footer from "./Footer";
import Navbar from "../Component/Navbar";



const Home = () => {
    return ( 
        <div>
            <Navbar />
            <Rectangle />
            <Partner />
            <Reachout />
            <Feedback />
            <Team />
            <Footer />
        </div>
    );
}

export default Home;