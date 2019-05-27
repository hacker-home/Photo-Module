import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoModalMain extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      photos,
      currentPhotoIndex,
      goToPrevSlide,
      goToNextSlide,
    } = this.props;

    return (
      <div className="photo-modal-main">
        <button type="button" className="previous-button" onClick={goToPrevSlide}>
          <svg viewBox="0 0 18 18" className="previous-button-icon">
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
          </svg>
        </button>
        <button type="button" className="next-button" onClick={goToNextSlide}>
          <svg viewBox="0 0 18 18" className="next-button-icon">
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
          </svg>
        </button>
        <img className="main-carousel-photo" src={photos[currentPhotoIndex].url} onClick={goToNextSlide} role="presentation" alt="" />
      </div>
    );
  }
}

PhotoModalMain.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
};

export default PhotoModalMain;
