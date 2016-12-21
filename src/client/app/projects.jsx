import React from 'react';
import Project from './helper-modules/project.jsx';

export default class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div className="column-1000">
          <div id="projects-title">
            <h4> Here's some stuff I've worked on </h4>
          </div>
          <div className="column-1-2" style={{float: "left"}}>
            <Project title="test">
              {`Test`}
            </Project>
          </div>
          <div className="column-1-2" style={{float: "left"}}>
            <Project title="test">
              {`Test`}
            </Project>
          </div>
        </div>
      </div>
    )
  }
}
