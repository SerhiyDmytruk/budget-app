import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {open} from '../../utils/indexdb';
import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';
import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';

import {Wrapper, GlobalStyle} from './style';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        open().then(() => {
            this.setState({
                loading: false
            }).catch(()=> {
                console.error('Помилка');
            })
        });
    }

    render() {

        if (this.state.loading) {
            return <div>Loading...</div>
        }

        return (
            <ErrorBoundary>
                <Router>
                    <Wrapper>
                        <GlobalStyle/>

                       <Header />

                        <Routes>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/statistics" element={<Statistics/>}/>
                            <Route path="/" element={<Home/>}/>
                        </Routes>

                    </Wrapper>
                </Router>
            </ErrorBoundary>
        )
    }
};

export default App;