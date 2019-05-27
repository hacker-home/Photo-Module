import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { photos, showPhotoCarousel } = this.props;

    return (
      <div className="photo-grid">
        <div className="photo-container first-photo">
          <img className="photo" name="0" src={photos[0].url} onClick={showPhotoCarousel} role="presentation" alt="" />
        </div>
        <div className="photo-container col-2 photo-two">
          <img className="photo" name="1" src={photos[1].url} onClick={showPhotoCarousel} role="presentation" alt="" />
        </div>
        <div className="photo-container col-3 photo-three">
          <img className="photo" name="2" src={photos[2].url} onClick={showPhotoCarousel} role="presentation" alt="" />
        </div>
        <div className="photo-container col-2 photo-four">
          <img className="photo" name="3" src={photos[3].url} onClick={showPhotoCarousel} role="presentation" alt="" />
        </div>
        <div className="photo-container col-3 photo-five">
          <img className="photo" name="4" src={photos[4].url} onClick={showPhotoCarousel} role="presentation" alt="" />
        </div>
      </div>
    );
  }
}

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  showPhotoCarousel: PropTypes.func.isRequired,
};

export default PhotoGrid;
