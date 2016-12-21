import React from 'react';

export default class Hero extends React.Component {
  render() {
    return (
      <div id="about-me" className="column-1000">
        <p className="about-text">
          {`Hey! I'm a 19 year old Computer Science major at the
          University of Texas at Austin and incoming summer intern at Audible,
          an Amazon Company. Currently interested in web development,
          operating systems, robotics, and machine learning.`}
          <br/><br/>
          {`Need to contact me? Email me at aaron [at] cs.utexas.edu, or just
          catch me on social media.`}
        </p>
        <div className="social-media-panel">
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-github"></i>
        </div>
      </div>
    )
  }
}
