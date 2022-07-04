import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';

import {Wrapper, GlobalStyle} from './style';
import ErrorBoundary from '../ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Wrapper>
                    <GlobalStyle/>

                    <nav>
                        <ul>
                            <li>
                                <Link exact="true" to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/statistics">Statistics</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/statistics" element={<Statistics/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>

                </Wrapper>
            </Router>
        </ErrorBoundary>
    )
};

export default App;