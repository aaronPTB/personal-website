import React from 'react';

export default class Hero extends React.Component {
  render() {
    return (
      <div id="hero">
        <div className="column-1000">
          {/*<div className="picture-frame outer">
            <div className="picture-frame inner">
              <img className="pricture-frame picture" src="me.jpg"/>
            </div>
          </div>*/}
          <div id="greeter">
            <h1>I'm Aaron</h1>
            <br/>
            <br/>
            <h3>
              Student in the class of UT'19 pursuing a B.S. in Computer Science.
              Incoming summer intern on the Audible Web QA team.
              <br/><br/>
              I've done a lot of stuff at UT, including building an awesome 
              mural-painting robot (and demoing it at SXSW Create 2017!), 
              bioinformatics research, and working with faculty to build 
              a better course scheduler.
              <br/><br/>
              Check out my <a href='/resume.pdf'>resume</a> and {' '}
              <a href='mailto:aaron@cs.utexas.edu'>let's talk</a>.
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
