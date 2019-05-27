import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoSliderPhoto from './PhotoSliderPhoto';

class PhotoSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {
      photos,
      currentPhotoIndex,
      handleClickedPhoto,
    } = this.props;

    return (
      <div className="photo-slider" aria-hidden="false">
        <div className="photo-slider-inner">
          <ul className="photo-slider-list">
            {
              photos.map((photo, index) => (
                <PhotoSliderPhoto
                  photo={photo.url}
                  index={index}
                  currentPhotoIndex={currentPhotoIndex}
                  handleClickedPhoto={handleClickedPhoto}
                  key={photo.url}
                />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

PhotoSlider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  handleClickedPhoto: PropTypes.func.isRequired,
};

export default PhotoSlider;
