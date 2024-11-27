import React from 'react'
import '../App.css'

export default function About() {
    return (
        <div className="about-container">
            <img 
            src="https://media1.tenor.com/m/Ut1EdX0r6soAAAAd/code-monkey-checkmate-digital.gif" 
            alt="meme" 
            class="about-image"
            />
            <h1 className="about-title">About Us</h1>
            <p class="about-description">
            Welcome to GameSphere, your ultimate hub for game reviews, ratings, and recommendations! Our mission is to help gamers discover the best games across all platforms, from immersive RPGs to adrenaline-pumping shooters.
        </p>
        <p class="about-description">
            At GameSphere, we believe in honest and community-driven reviews. Whether you're a casual gamer, an esports enthusiast, or a retro gaming fan, you'll find authentic insights from fellow players and experts alike.
        </p>
        <p class="about-description">
            Explore detailed reviews, stay updated with the latest releases, and join a vibrant community of gamers who share your passion. Level up your gaming experience with GameSphere—where every review counts!
        </p>
            <p className="about-text">
                This page was written by: 
                <span className="about-author"> Chris Buenafe</span>
            </p>
        </div>
    );
}
