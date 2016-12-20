import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div id="hero">
        <div className="column-1000">
          <div id="greeter">
            <h1>hey, i'm aaron</h1>
            <h3>i build robots and websites</h3>
          </div>
          <div className="picture-frame outer">
            <div className="picture-frame inner">
              <img className="pricture-frame picture" src="me.jpg" height={250} width={250}>

              </img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
