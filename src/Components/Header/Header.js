import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import "../Styles/HeaderStyle.css"

const  Header = () => {
    return (
      <section>
        <div className = 'Div1'>
          <a href="/" className='header'>
            <DiCssdeck size="3rem"/> <span>Header</span>
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
          <a className='socialLink' href='https://github.com'>
            <AiFillGithub size='3rem' />
          </a>
          <a className='socialLink' href='https://instagram.com'>
            <AiFillInstagram size='3rem' />
          </a>
          <a className='socialLink' href='https://linkedin.com'>
            <AiFillLinkedin size='3rem' />
          </a>
        </div>
      </section>
    );
};

export default Header;
