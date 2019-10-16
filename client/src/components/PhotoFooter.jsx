import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../../../public/dist/styles.css';

class PhotoFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      photos,
      currentPhotoIndex,
      togglePhotoSlider,
      photoSliderIsShown,
    } = this.props;

    const verifiedClass = photos[currentPhotoIndex].isVerified ? css['verified-photo'] : css['visibility-hidden'];
    const buttonText = photoSliderIsShown ? 'Hide photo list' : 'Show photo list';
    const arrowType = photoSliderIsShown ? 'm23.85 6.86-11.5 11a .5.5 0 0 1 -.69 0l-11.5-11a .5.5 0 0 1 .34-.86h23a .5.5 0 0 1 .35.86z' : 'm23.96 17.69a.5.5 0 0 1 -.46.31h-23a .5.5 0 0 1 -.35-.86l11.5-11a .5.5 0 0 1 .69 0l11.5 11a .5.5 0 0 1 .12.55z';

    return (
      <div className={css['photo-footer']}>
        <div className={css['caption-and-verified']}>
          <div>
            { `${Number(currentPhotoIndex) + 1}/${photos.length}: `}
            { photos[currentPhotoIndex].desc }
          </div>
          <div><i className={verifiedClass}>Verified Photo</i></div>
        </div>
        <button type="button" className={css['hide-button-new']} onClick={togglePhotoSlider}>
          <span>
            {buttonText}
            <svg className={css['hide-icon']} viewBox="0 0 24 24">
              <path d={arrowType} fillRule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
    );
  }
}

PhotoFooter.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  togglePhotoSlider: PropTypes.func.isRequired,
  photoSliderIsShown: PropTypes.bool.isRequired,
};

export default PhotoFooter;
