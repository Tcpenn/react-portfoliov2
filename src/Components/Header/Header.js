import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import "../Styles/HeaderStyle.css"

const  Header = () => {
    return (
      <section>
        <div className = 'Div1'>
          <a href="/" className='header'>
            <DiCssdeck size="3rem"/> <span>My Portfolio</span>
          </a>
        </div>
        <div className = 'Div2'>          
          <li>
            <a href= "#about" className='navLink'>About</a>
          </li>
          <li>
            <a href= "#projects" className='navLink'>Projects</a>
          </li>
          <li>
            <a href= "#resume" className='navLink'>Resume</a>
          </li>
        </div>
        <div className = 'Div3'>
          <a className='socialLink' href='https://github.com/Tcpenn?tab=repositories'>
            <AiFillGithub size='3rem' />
          </a>
          <a className='socialLink' href='https://instagram.com/tcpenn1026/'>
            <AiFillInstagram size='3rem' />
          </a>
          <a className='socialLink' href='www.linkedin.com/in/tyler-pennington-446a4b212'>
            <AiFillLinkedin size='3rem' />
          </a>
        </div>
      </section>
    );
};

export default Header;
