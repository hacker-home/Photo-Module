import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoSliderPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {
      index,
      photo,
      currentPhotoIndex,
      handleClickedPhoto,
    } = this.props;

    const slidePhotoContainerClass = index === currentPhotoIndex ? 'slide-photo-container brighten' : 'slide-photo-container';

    return (
      <li className="slide-photo-list-item">
        <button type="button" className={slidePhotoContainerClass}>
          <img className="slide-photo" name={index} src={photo} onClick={handleClickedPhoto} role="presentation" alt="" />
        </button>
      </li>
    );
  }
}

PhotoSliderPhoto.propTypes = {
  index: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  handleClickedPhoto: PropTypes.func.isRequired,
};

export default PhotoSliderPhoto;
