import React from 'react';

export default class Hero extends React.Component {
  render() {
    return (
      <div id="hero">
        <div className="column-1000">
          <div className="picture-frame outer">
            <div className="picture-frame inner">
              <img className="pricture-frame picture" src="me.jpg"/>
            </div>
          </div>
          <div id="greeter">
            <h1>I'm Aaron</h1>
            <h3>I build robots and websites</h3>
          </div>
        </div>
      </div>
    )
  }
}
