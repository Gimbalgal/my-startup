import React from 'react';
import ceo from '../asset/ceo.png';
import cto from '../asset/cto.png';
import designer from '../asset/designer.png';
import developer from '../asset/developer.png';
const Team = () => {
    return ( 
        <section className="workforce">
            <div className="workforce-container">
                    <div className="talent">
                        <h2>TEAM</h2>
                        <h1>Our Talents</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur
                        Suscipit nemo hic quos, ab,</p>
                    </div>
                    <div className="our-talent">
                        <img src={ceo} alt="CEO" className='managers'/>
                        <img src={cto} alt="CTO" className='managers' />
                        <img src={designer} alt="DESIGNER" className='managers' />
                        <img src={developer} alt="DEVELOPER" className='managers'/>
                    </div>
            </div>    
            <button className='view'>View Team</button>
        </section>
    );
}

export default Team;