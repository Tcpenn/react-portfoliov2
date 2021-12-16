import React from 'react'
import "./App.css"

import Header from "./Components/Header/Header"
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Project'
import Resume from './Components/Resume/Resume'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='Container'>
      <Header/>
      <main>
        <About/>
        <Contact/>
        <Projects/>
        <Resume/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
