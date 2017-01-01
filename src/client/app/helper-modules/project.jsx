import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: props.type,
      title: props.title,
      subtitle: props.sub,
      hang: props.hang,
    }
    this.renderHTML = null;
  }

  componentWillMount() {
    if (this.props.hang == "left") {
      this.renderHTML = (
        <div className="project">
          <div className="column-20" style={{float: "left"}}>
            <div className="marker"></div>
          </div>
          <div className="column-rest" style={{float: "right"}}>
            <div className="project-title" style={{textAlign: "right"}}>
              {this.props.title}
            </div>
            <div className="project-subtitle" style={{textAlign: "right"}}>
              {this.props.sub}
            </div>
            <div className="project-desc" style={{textAlign: "right"}}>
              {this.props.children}
            </div>
          </div>
        </div>
      )
    }
    else {
      this.renderHTML = (
        <div className="project">
          <div className="column-rest" style={{float: "left"}}>
            <div className="project-title" style={{textAlign: "left"}}>
              {this.props.title}
            </div>
            <div className="project-subtitle" style={{textAlign: "left"}}>
              {this.props.sub}
            </div>
            <div className="project-desc" style={{textAlign: "left"}}>
              {this.props.children}
            </div>
          </div>
          <div className="column-20" style={{float: "right"}}>
            <div className="marker"></div>
          </div>
        </div>
      )
    }
  }
  render() {
    let toRender = this.renderHTML;
    console.log(toRender)
    return (
      <div>
        {toRender}
      </div>
    )
  }
}
