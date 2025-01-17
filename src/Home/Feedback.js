import React from 'react';
import laptop from '../asset/laptop.svg'
const Feedback = () => {
    return ( 
    <section className="feedback">
        <div className="feedback-container">
            <div className="client-feed">
                <div className="feed">
                    <h1>Lorem ipsum dolor sit amet consectetur </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <button className="more">Learn More</button>
                </div>
                <div className="top-right">
                    <img src={laptop} alt="a man with laptop" className='laptop'/>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Feedback;
