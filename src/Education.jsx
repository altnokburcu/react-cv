import React, { Component } from 'react';


class Education extends Component {
  render() {
    return (
      <div className="item">
          <h4 className="degree">{this.props.item.baslik}</h4>
          <h5 className="meta">{this.props.item.icerik}</h5>
          <div className="time">{this.props.item.tarih}</div>
      </div>
    );

  }
}

export default Education;
