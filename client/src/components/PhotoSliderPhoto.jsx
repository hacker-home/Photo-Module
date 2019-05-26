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
      handleClickedPhoto,
    } = this.props;

    return (
      <div className="slide-photo">
        <img className="slideshow-photo" name={index} src={photo} onClick={handleClickedPhoto} role="presentation" alt="" />
      </div>
    );
  }
}

PhotoSliderPhoto.propTypes = {
  index: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  handleClickedPhoto: PropTypes.func.isRequired,
};

export default PhotoSliderPhoto;
