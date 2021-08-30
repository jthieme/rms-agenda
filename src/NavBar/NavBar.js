import React, { useState } from 'react';
import './NavBar.css';
import { Link, Route } from 'react-router-dom';


function NavBar(props){

    const logo = 'https://rms26ward.org/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-websitebuilder-v1-0-1%2F841%2F504841%2FmEVLRKtj%2Faf425a5844304ebdb41b91f267bc20eb&methods=resize%2C500%2C5000'
    
    return(<div className="container-fluid nav">
        <div className="row navbar-fixed">
            <nav className="navColor">
                <div className="nav-wrapper">
                    <a href="https://rms26ward.org" className="left"><img className="logo" src={logo} alt="RMS26" /></a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="https://rms26ward.org">Home</a></li>
                        <li><Link to="/announcements">Announcements</Link></li>
                        <li><a href="https://rms26ward.org/relief-society">Relief Society</a></li>
                        <li><a href="https://rms26ward.org/elders-quorum">Elders Quorum</a></li>
                        <li><a href="https://rms26ward.org/temple-family-history">Temple & Family History</a></li>
                        <li><a href="https://rms26ward.org/events">Events</a></li>
                        <li><a href="https://rms26ward.org/ward-council">Ward Council</a></li>
                        <li><a href="https://rms26ward.org/location">Location</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )

}




export default NavBar;
