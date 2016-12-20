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
      selected: 0
    }
    this.buttonIds = {
      "/": 1,
      "/projects": 2,
      "/resume": 3
    }
    this.iter = 0;
  }

  getCurrentLocation() {
    var new_selected = location.pathname.match(/^\/\w*/);
    var new_selected_id = this.buttonIds[new_selected[0]];
    if (new_selected_id != null) {
      this.setState({
        selected: new_selected_id,
      })
    }
  }

  redirect(location) {
    browserHistory.push(location);
  }

  render() {
    var items = this.state.items.map((function(item) {
      this.iter += 1;
      return  (
        <div key={this.iter} onClick={this.redirect.bind(this, item[1])}>
          <h2>{item[0]}</h2>
        </div>
      )
    }).bind(this));
    return (
      <div id="topbar">
        {items}
      </div>
    )
  }
}
