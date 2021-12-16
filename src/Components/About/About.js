import React from 'react';
import '../Styles/AboutStyle.css'
import profilePicture from "../Styles/Images/ME.JPG"

const About = () => {
    return (
        <section className="about">
        <img className="sectionPic" src={profilePicture} alt='Tyler'/> 
            <div className = "sectionText">
            <h2 className = 'sectionTitle'>About</h2>
            The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
            </div>
        </section>
    );
};

export default About;

//Section classname='about', 
//SectionDivider, 
//SectionText, 
//SectionTitle