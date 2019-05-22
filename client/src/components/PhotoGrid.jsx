import React, { Component } from 'react';
import Photo from './Photo.jsx';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { photos } = this.props;
    const firstPhoto = photos[0];
    const otherPhotos = photos.slice(1, 5);

    return (
      <div className="photo-grid-wrapper">
        <div className="photo-grid">
          <div className="photo-wrapper first-photo">
            <img className="photo" src={firstPhoto} alt="" />
          </div>
          <div className="photo-wrapper col-2">
            <img className="photo" src={otherPhotos[0]} alt="" />
          </div>
          <div className="photo-wrapper col-3">
            <img className="photo" src={otherPhotos[1]} alt="" />
          </div>
          <div className="photo-wrapper col-2">
            <img className="photo" src={otherPhotos[2]} alt="" />
          </div>
          <div className="photo-wrapper col-3">
            <img className="photo" src={otherPhotos[3]} alt="" />
          </div>
          {/* {otherPhotos.map((photo, index) => <Photo key={index} photo={photo} />)} */}
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
