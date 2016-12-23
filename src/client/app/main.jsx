import React from 'react';
import TopBar from './topbar.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        {this.props.children}
      </div>
    )
  }
}
