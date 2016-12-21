import React from 'react';
import Project from './helper-modules/project.jsx';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="column-1000">
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
    )
  }
}
