import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../Component/Navbar";
import Footer from "../Home/Footer";
import "./contact.css";

function MyForm() {
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        // For inputs
        if (event.target.type !== "textarea") {
            setInputs((values) => ({ ...values, [name]: value }));
        } else {
            // For textarea
            setTextarea(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form Data: ${JSON.stringify({ ...inputs, message: textarea })}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="client">
                Name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label  className="client">
                Email:
                <input 
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
            </label>
            <label className="client-info">
                Message:
                <textarea 
                    name="message"
                    value={textarea}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit" className="form-btn"/>
        </form>
    );
}

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <section className="contact">
                <div className="contact-container">
                    <div className="contact-top">
                        <h1>Contact Us</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit.
                        </p>
                        </div>
                    </div>
                        <div className="contact-content">
                            <div className="map">
                                <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.838261896283!2d8.501100315315672!3d12.002179137637053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae816dbbde213b%3A0xb9e0b7c8e92b1b45!2sKano%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1617762763013!5m2!1sen!2sng"
                                width="80%"
                                height="250"
                                allowFullScreen=""
                                loading="lazy"
                                title="Kano State Map"
                                ></iframe>
                            </div>
                        <MyForm />
                </div>
            </section>
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContactUs />);

export default ContactUs;
