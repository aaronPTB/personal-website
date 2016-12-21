import React from 'react';
import { browserHistory } from 'react-router';

export default class TopBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: [
        ["Me", "/"],
        ["My Projects", "/projects"],
        ["My Resume", "/resume.pdf"],
      ],
      selected: 0
    }
    this.buttonIds = {
      "/": 1,
      "/projects": 2,
      "/resume": 3
    }
    this.iter = 0;
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.darkColor  = "#C5CAE9";
    this.lightColor = "#E8EAF6";
  }

  getCurrentLocation() {
    var new_selected = location.pathname.match(/^\/\w*/);
    var new_selected_id = this.buttonIds[new_selected[0]];
    console.log(new_selected[0]);
    console.log(new_selected_id);
    if (new_selected_id != null) {
      this.setState({
        selected: new_selected_id,
      })
    }
  }

  redirect(location) {browserHistory.push(location);}
  componentWillMount()  {this.getCurrentLocation();}
  componentWillReceiveProps() {this.getCurrentLocation();}

  render() {
    var item_num = 0
    var items = this.state.items.map((function(item) {
      this.iter += 1;
      item_num  += 1;
      var this_color = (item_num == this.state.selected) ? this.lightColor : this.darkColor;
      console.log(this_color);
      return  (
        <div key={this.iter} onClick={this.redirect.bind(this, item[1])} style={{color: this_color}}>
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
