import React from 'react';
import peg from '../asset/peg.png';
import richard from '../asset/richard.png';
import stolz from '../asset/stolz.png';
import janet from '../asset/janet.png';
const Team = () => {
    return ( 
        <section className="workforce">
            <div className="talent">
                <h2>TEAM</h2>
                <h1>Our Talents</h1>
                <p>Lorem ipsum, dolor sit amet consectetur
                Suscipit nemo hic quos, ab,</p>
            </div>
            <div className="our-talent">
                <img src={peg} alt="CEO" className='managers'/>
                <img src={richard} alt="CTO" className='managers' />
                <img src={stolz} alt="DESIGNER" className='managers' />
                <img src={janet} alt="DEVELOPER" className='managers'/>
            </div>
            <button className='view'>View Team</button>
        </section>
    );
}

export default Team;