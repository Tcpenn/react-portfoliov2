import React from 'react';
import '../Styles/AboutStyle.css'
import profilePicture from "../Styles/Images/ME.JPG"

const About = () => {
    return (
        <section className="about">
        <img className="sectionPic" src={profilePicture} alt='Tyler'/> 
            <div className = "sectionText">
            <h2 className = 'sectionTitle'>About</h2>
            This portfolio will showcase my projects to keep track of all my progress as I learn more and more about full stack web development and pursue my career in computer science and engineering.            </div>
        </section>
    );
};

export default About;

//Section classname='about', 
//SectionDivider, 
//SectionText, 
//SectionTitle