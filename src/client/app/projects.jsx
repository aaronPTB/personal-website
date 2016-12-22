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
            <Project hang="right" title="Incoming Intern at Audible (Summer 2017)">
              {`Summer intern at Audible, an Amazon Company. Project and
                location TBD`}
            </Project>
            <Project hang="right" title="Student Software Engineer (Fall 2016 - Spring 2017)">
              {`Implemented database, server, and web app to handle statuses of
                around 500 elevators across the UT Austin campus`}
            </Project>
            <Project hang="right" title="Bioinformatics Research Assistant (Summer 2016)">
              {`Used statistical techniques and machine learning to identify
                genetic expression patterns in neuron DNA.`}
            </Project>
          </div>
          <div className="column-1-2" style={{float: "left"}}>
            <div style={{height: "40px"}}></div>
            <Project hang="left" title="Mural Painting Robot 'Roboticelli'">
              {`Ongoing collaborative project with an Artist and the city of
                Austin. A robot that can paint murals on walls.`}
            </Project>
            <Project hang="left" title="Classify">
              {`HackTX 2016 project. A schedule building system delivering a
                strong user experience. UT Faculty took notice have reached out
                to us to integrate our product with theirs`}
            </Project>
            <Project hang="left" title="Simple Rendering Engine">
              {`A simple rendering engine and 3d environment that allows for
                camera manipulation and object movement / rotation. Created in
                2015 for fun.`}
            </Project>
            <Project hang="left" title="ClassScribe">
              {`Crowdsourced lecture notes for the classroom. Created for
                HackDFW 2016s`}
            </Project>
          </div>
        </div>
      </div>
    )
  }
}
