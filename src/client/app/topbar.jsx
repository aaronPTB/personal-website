import React from 'react';

export default class TopBar extends React.Component {
  render() {
    return (
      <div id="topbar">
        {this.props.children}
      </div>
    )
  }
}
