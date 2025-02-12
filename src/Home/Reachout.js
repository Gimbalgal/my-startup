import React from "react";
import mailing from "../asset/mailing.svg";

const Reachout = () => {
    return (
        <section className="customer-service">
            <div className="customer">
                <div className="mail-right">
          <img
            src={mailing}
            alt="customer services"
            className="mailing"
            id="email"
          />
                </div>
                    <div className="mail-left">
                        <h1>Lorem ipsum dolor sit amet consectetur </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
                        nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
                        voluptate culpa nesciunt delectus iste?
                    </p>
    
                <button className="more" id="mail">Learn More </button>
            </div>
    </div>
    </section>
);
};

export default Reachout;
