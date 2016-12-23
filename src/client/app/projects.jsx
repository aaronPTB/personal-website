import React from 'react';
import Project from './helper-modules/project.jsx';

export default class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div className="column-1000">
          <div id="projects-title">
            <h4> My work experience and some projects </h4>
          </div>
          <div className="column-1-2" style={{float: "left"}}>
            <div style={{height: "80px"}}></div>
            <Project hang="right" title="Summer Intern, Audible" sub="Newark, NJ. Incoming Summer 2017">
              {`Incoming summer intern at Audible, an Amazon Company. Project TBD.`}
            </Project>
            <Project hang="right" title="Student Software Engineer" sub="UT Austin, Fall 2016 - Spring 2017">
              {`Implemented database, server, and web app to handle statuses of
                500 elevators at UT Austin `}
            </Project>
            <Project hang="right" title="Bioinformatics Research Assistant" sub="UT Austin, Summer 2016">
              {`Used statistical techniques and machine learning to identify
                genetic expression patterns in neurons.`}
            </Project>
          </div>
          <div className="column-1-2" style={{float: "left"}}>
            <Project hang="left" title="Mural Painting Robot 'Roboticelli'">
              {`Ongoing collaborative project with an Artist and the city of
                Austin. A robot that can paint murals on walls.`}
            </Project>
            <Project hang="left" title="Classify" sub="HackTX 2016 Project">
              {`Schedule building system delivering a strong user experience.
                University faculty have reached out to us for collaboration.`}
            </Project>
            <Project hang="left" title="Simple Rendering Engine">
              {`A simple rendering engine and 3d environment that allows for
                camera manipulation and object movement / rotation. Created in
                2015 for fun.`}
            </Project>
            <Project hang="left" title="Classcribe" sub="HackDFW 2016 Project">
              {`Crowdsourced lecture notes for the classroom. Built in Meteor
                framework`}
            </Project>
          </div>
        </div>
      </div>
    )
  }
}
