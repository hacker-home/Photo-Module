import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoSlider from './PhotoSlider';

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {
      photos,
      handleClickedPhoto,
      hidePhotoCarousel,
      photoCarouselIsShown,
      currentPhotoIndex,
      goToPrevSlide,
      goToNextSlide,
    } = this.props;

    const showHideClassName = photoCarouselIsShown ? 'photo-carousel' : 'display-none';
    const verifiedClass = photos[currentPhotoIndex].isVerified ? 'verified-photo' : 'visibility-hidden';

    return (
      <div className={showHideClassName}>
        <button type="button" onClick={hidePhotoCarousel} className="photo-carousel-close-button">
          <svg className="photo-carousel-close-icon" viewBox="0 0 24 24">
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
          </svg>
        </button>
        <div className="photo-modal-container">
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
          <img className="main-carousel-photo" src={photos[currentPhotoIndex].url} alt="" />
        </div>

        <div className="caption-verified-hide-button">
          <div className="caption-and-verified">
            <div>
              { `${Number(currentPhotoIndex) + 1}/${photos.length}: `}
              { photos[currentPhotoIndex].desc }
            </div>
            <div><i className={verifiedClass}>Verified Photo</i></div>
          </div>
          <div className="hide-button-container">
            <button type="button" className="hide-button">
              <span>
                Hide photo list
                <svg className="hide-icon" viewBox="0 0 24 24">
                  <path d="m23.85 6.86-11.5 11a .5.5 0 0 1 -.69 0l-11.5-11a .5.5 0 0 1 .34-.86h23a .5.5 0 0 1 .35.86z" fillRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="photos-slider-wrapper">
          {
            photos.map((photo, index) => (
              <PhotoSlider
                photo={photo.url}
                index={index}
                handleClickedPhoto={handleClickedPhoto}
                key={photo.url}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

PhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  handleClickedPhoto: PropTypes.func.isRequired,
  hidePhotoCarousel: PropTypes.func.isRequired,
  photoCarouselIsShown: PropTypes.bool.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  goToPrevSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
};

export default PhotoCarousel;
