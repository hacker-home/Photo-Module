import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoSlider extends Component {
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
      <img className="slideshow-photo" name={JSON.stringify(index)} src={photo} onClick={handleClickedPhoto} role="presentation" alt="" />
    );
  }
}

PhotoSlider.propTypes = {
  index: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  handleClickedPhoto: PropTypes.func.isRequired,
};

export default PhotoSlider;
