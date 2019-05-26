import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoSlider from './PhotoSlider';
import PhotoFooter from './PhotoFooter';
import PhotoModalMain from './PhotoModalMain';

class PhotoCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoSliderIsShown: true,
    };

    this.togglePhotoSlider = this.togglePhotoSlider.bind(this);
  }

  togglePhotoSlider() {
    this.setState(prevState => ({ photoSliderIsShown: !prevState.photoSliderIsShown }));
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

    const { photoSliderIsShown } = this.state;

    const photoCarouselClass = photoCarouselIsShown ? 'photo-carousel' : 'display-none';
    const footerAndSliderClass = photoSliderIsShown ? 'footer-and-slider' : 'footer-and-slider hide';

    return (
      <div className={photoCarouselClass}>
        <button type="button" onClick={hidePhotoCarousel} className="photo-carousel-close-button">
          <svg className="photo-carousel-close-icon" viewBox="0 0 24 24">
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
          </svg>
        </button>
        <PhotoModalMain
          photos={photos}
          currentPhotoIndex={currentPhotoIndex}
          goToPrevSlide={goToPrevSlide}
          goToNextSlide={goToNextSlide}
        />
        <div className={footerAndSliderClass}>
          <div className="footer-and-slider-content">
            <div className="footer-and-slider-inner">
              <PhotoFooter
                photos={photos}
                currentPhotoIndex={currentPhotoIndex}
                togglePhotoSlider={this.togglePhotoSlider}
                photoSliderIsShown={photoSliderIsShown}
              />

              <PhotoSlider
                photos={photos}
                handleClickedPhoto={handleClickedPhoto}
                photoSliderIsShown={photoSliderIsShown}
              />
            </div>
          </div>
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
