import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="hero">
          <div className="column-1000">
            <div id="greeter">
              <h1>i'm aaron</h1>
              <h3>i build robots and websites</h3>
            </div>
            <div className="picture-frame outer">
              <div className="picture-frame inner">
                <img className="pricture-frame picture" src="me.jpg" height={250} width={250}/>
              </div>
            </div>
          </div>
        </div>
        <div id="about-me" className="column-1000">
          <p>
            Hey! I'm a 19 year old Computer Science <br/> major at the
            Universityof Texas at Austin and incoming summer intern at Audible,
            an Amazon Company. My current interests lie in web development,
            operating systems, robotics, and machine learning.
          </p>
        </div>
      </div>
    )
  }
}
