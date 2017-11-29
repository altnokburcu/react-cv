import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return (
      <div className="item">
          <span className="project-title"><a href={this.props.item.url} target="_blank">{this.props.item.projectName}</a></span> - <span className="project-tagline">{this.props.item.aciklama}</span>
      </div>
    );

  }
}

export default Projects;
