import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Container/Home';
import Contact from './Container/Contact';
import Shop from './Container/Shop';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Profile from './Container/Profile';
import CategoryImages from './Container/CategoryImages';
export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Header}/>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/category-images" exact component = {CategoryImages} />
                    <Route path="/" component={Footer}/>
                </div>
            </Router>
        )
    }
}
