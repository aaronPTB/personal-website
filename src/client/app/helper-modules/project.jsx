import React from 'react';

export default class Projects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: props.type,
      title: props.title,
    }
  }

  render() {
    return (
      <div className="project">
        <div className="column-20">
          <div className="marker">
          </div>
        </div>
        <div className="column-rest">
          <div className="project-title">
            {this.props.title}
          </div>
          <div className="project-desc">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
