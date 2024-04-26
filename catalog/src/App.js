// import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, {useState} from 'react';
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import {Routes, Route} from 'react-router-dom';
import About from "./components/About";
import News from "./components/News";
import Profile from "./components/Profile";
import Home from "./components/Home";
import {RiShoppingCartFill} from "react-icons/ri";
import Order from "./components/Order";
import './index.css';
import Buy from "./components/Buy";


const App = (props) => {

    return (
        <div className="wrapper">
            <div>
                <ul className={'nav'}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/News">News</a>
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>

                </ul>

            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/News" element={<News/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Buy" element={<Buy/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;