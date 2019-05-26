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
      handleClickedPhoto,
      // photoSliderIsShown,
    } = this.props;

    // const photoSliderClass = photoSliderIsShown ? 'photo-slider' : 'display-none';

    return (
      <div className="photo-slider">
        {
          photos.map((photo, index) => (
            <PhotoSliderPhoto
              photo={photo.url}
              index={index}
              handleClickedPhoto={handleClickedPhoto}
              key={photo.url}
            />
          ))
        }
      </div>
    );
  }
}

PhotoSlider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  handleClickedPhoto: PropTypes.func.isRequired,
  photoSliderIsShown: PropTypes.bool.isRequired,
};

export default PhotoSlider;
