import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
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
    );
};

export default Footer;