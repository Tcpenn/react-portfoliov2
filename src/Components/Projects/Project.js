import React from 'react';

import budgetTracker from '../Styles/Images/budget_tracker.jpg'
import passwordGen from "../Styles/Images/password-gen.jpg"
import planner from "../Styles/Images/planner.jpg"
import techBlog from "../Styles/Images/tech-blog.jpg"
import '../Styles/ProjectStyle.css'  

const projects = [
    //budget tracker url = https://github.com/Tcpenn/Budget-Tracker
    {
        title: 'Budget Tracker',
        description:'This program is used to demonstrate the ability of service workers and indexedDB to allow app functiinality while offline and to be able to serve front end assets by saving them in the cache.',
        img: budgetTracker,
        tags: ['Javascript','Express','Mongoose','IndexedDB'],
        source: "https://github.com/Tcpenn/Budget-Tracker",
        visit:"https://github.com/Tcpenn/Budget-Tracker",
        id: 0,
    },

    //password generator url = https://github.com/Tcpenn/password-challenge/
    {
        title: "Password Generator",
        description:'This challenge was to test my knowledge of javascript by creating a customizable password generator placeholder placeholder placeholder placeholder placeholder ',
        img: passwordGen,
        tags: ['JavaScript','HTML','CSS',],
        source:"https://github.com/Tcpenn/password-challenge/",
        visit:"https://github.com/Tcpenn/password-challenge/",
        id: 1,
    },
    //workdayplanner url = https://github.com/Tcpenn/Workday-Planner/
    {
        title: "Workday Planner",
        description:' The main focus on this project was to create a day planner for the normal 9-5 day of the average office worker. With the functionality to input custom tasks to be done throughout the day. With added urgency code to let the user know the time frame has passed for a certain task placeholder placeholder placeholder placeholder ',
        img: planner,
        tags: ['HTML','CSS','JavaScript','BootStrap','Jquery'],
        source:"https://github.com/Tcpenn/Workday-Planner/",
        github:"https://github.com/Tcpenn/Workday-Planner/",
        id: 2
    },
    //tech-blog url = https://github.com/Tcpenn/tech-blog
    {
        title: "Tech Blog",
        description:'This is a CMS style blog site for users to view and share posts about technology. Users are able to view posts from other users, as well as create, edit, delete their own posts. This application follows the MVC paradigm in the architectural structure with the use of many npm dependencies',
        img: techBlog,
        tags: ['Node', 'Mysql', 'Bcrypt','Express','Sequelize'],
        source:"https://github.com/Tcpenn/Workday-Planner/",
        github:"https://github.com/Tcpenn/tech-blog",
        id:3
    },

];

const Projects = () => (
    <section className="section" nopadding id="projects">
      <h2 class="sectionTitle" main>Projects</h2>
      <section className = 'gridContainer'>
        {projects.map((p, i) => {
          return (
            <div className="blogCard"key={i}>
            <img className="img" src={p.img} alt='projects'/>
              <div className="titleContent">
                <h3 className = "headerThree"title>{p.title}</h3>
                <hr className="hr" />
              </div>
              <p className="card-info">{p.description}</p>
              <div>
                <div className="titleContent">Stack</div>
                <ul className="tagList">
                  {p.tags.map((t, i) => {
                    return <ul className="tag" key={i}>{t}</ul>;
                  })}
                </ul>
              </div>
              <ul className="utilityList">
                <a className="externalLinks" href={p.visit}>Code</a>
                <a className="externalLinks" href={p.source}>Source</a>
              </ul>
            </div>
          );
        })}
      </section >
    </section>
  );
  
  export default Projects;