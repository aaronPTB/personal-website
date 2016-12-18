import React from 'react';
import { browserHistory } from 'react-router';

export default class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        ["who i am", "/"],
        ["my projects", "/projects"],
        ["resume", "/resume.pdf"],
      ]
    }
    this.redirect.bind(this);
    this.iter = 0;
  }

  redirect(location) {
    browserHistory.push(location);
  }

  render() {
    var items = this.state.items.map((function(item) {
      this.iter += 1;
      return <div key={this.iter}><h2>{item[0]}</h2></div>;
    }).bind(this))
    return (
      <div id="topbar">
        {items}
      </div>
    )
  }
}
