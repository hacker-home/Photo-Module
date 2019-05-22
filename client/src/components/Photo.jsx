import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { photo } = this.props;

    return (
      <div className="photo-wrapper">
        <img className="photo" src={photo} alt="" />
      </div>
    );
  }
}

export default Photo;
