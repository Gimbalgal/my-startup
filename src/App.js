import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home/home';
import Portfolio from './Portfolio/portfolio';
import Contact from './Contact/contact';
import Services from './Service/service';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes> {/* Use Routes instead of Switch in react-router-dom v6 */}
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

