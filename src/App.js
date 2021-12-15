import React from 'react'

import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Project'
import Resume from './Components/Resume/Resume'

function App() {
  return (
    <Layout>
      <main>
        <About/>
        <Contact/>
        <Projects/>
        <Resume/>
      </main>
    </Layout>
  );
}

export default App;
