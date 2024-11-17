import React from 'react';
import './HomePage.css'; // External CSS for styling
import kidsImage from '../images/home.png.webp'; // Replace with your image path
import Shoppage from '../Shop/Shoppage'

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <h1>Welcome to Let's Be Kids</h1>
            </header>

            <div className="content-section">
                {/* Left Section: Image */}
                <div className="image-container">
                    <img src={kidsImage} alt="Let's Be Kids" />
                </div>

                {/* Right Section: Information */}
                <div className="info-container">
                    <h2>Fun and Learning for Everyone</h2>
                    <p>
                        Dive into a world filled with joy, creativity, and adventure! 
                        Our mission is to create a space where kids and families can explore, 
                        learn, and grow together. Check out our activities, games, and resources 
                        designed for young minds.
                    </p>
                </div>
            </div>
            <Shoppage/>

        </div>
        
    );
};

export default HomePage;
