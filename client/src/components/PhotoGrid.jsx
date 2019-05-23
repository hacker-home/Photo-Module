import React, { Component } from 'react';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { photos } = this.props;

    return (
      <div className="photo-grid-wrapper">
        <div className="photo-grid">
          <div className="photo-wrapper first-photo">
            <img className="photo" src={photos[0]} alt="" />
          </div>
          <div className="photo-wrapper col-2">
            <img className="photo" src={photos[1]} alt="" />
          </div>
          <div className="photo-wrapper col-3">
            <img className="photo" src={photos[2]} alt="" />
          </div>
          <div className="photo-wrapper col-2">
            <img className="photo" src={photos[3]} alt="" />
          </div>
          <div className="photo-wrapper col-3">
            <img className="photo" src={photos[4]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
