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
    const { isGridHovered } = this.state;
    return (
      <div className="photo-grid-wrapper">
        <div className="photo-grid">
          {photos.map((photo, index) => <Photo key={index} photo={photo} isGridHovered={isGridHovered} />)}
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
