import React from 'react';
import laptop from '../asset/laptop.svg'
const Feedback = () => {
    return ( 
    <section className="feedback">
        <div className="feedback-container">
            <div className="client-feed">
                <div className="top-right">
                    <img src={laptop} alt="a man with laptop" className='laptop'/>
                </div>
                <div className="feed">
                    <h1>Lorem ipsum dolor sit amet consectetur </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            </div>
        </div>
    </div>
        <button className="more" id="top">Learn More</button>
    </section>
    );
}

export default Feedback;
