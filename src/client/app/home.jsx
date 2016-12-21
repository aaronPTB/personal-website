import React from 'react';
import Hero from './hero.jsx';
import About from './about.jsx';
import Projects from './projects.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero/>
        <About/>
        <Projects/>
      </div>
    )
  }
}
