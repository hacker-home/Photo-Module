import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoSliderPhoto from './PhotoSliderPhoto';

class PhotoSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // sliderPosition: 0,
    };
  }

  render() {
    const {
      photos,
      currentPhotoIndex,
      handleClickedPhoto,
    } = this.props;

    let translatedValue;

    if (currentPhotoIndex === 0 && currentPhotoIndex < 4) {
      translatedValue = 0;
    } else if (currentPhotoIndex === 4) {
      translatedValue = 97;
    } else if (currentPhotoIndex >= 5) {
      translatedValue = (currentPhotoIndex - 4) * 110 + 97;
    }

    const translateStyle = {
      transform: `translateX(-${translatedValue}px)`,
    };

    return (
      <div className="photo-slider" aria-hidden="false">
        <div className="photo-slider-inner">
          <ul className="photo-slider-ul" style={translateStyle}>
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
