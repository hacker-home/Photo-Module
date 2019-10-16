import React from 'react';
import PropTypes from 'prop-types';
import css from '../../../public/dist/styles.css';

const PhotoSliderPhoto = (props) => {
  const {
    index,
    photo,
    currentPhotoIndex,
    handleClickedPhoto,
  } = props;

  const slidePhotoContainerClass = index === currentPhotoIndex ? `${css['slide-photo-container']} ${css.brighten}` : css['slide-photo-container'];
  return (
    <li className={css['slide-photo-li']}>
      <button type="button" className={slidePhotoContainerClass}>
        <img className={css['slide-photo']} name={index} src={photo} onClick={handleClickedPhoto} role="presentation" alt="" />
      </button>
    </li>
  );
};

PhotoSliderPhoto.propTypes = {
  index: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  handleClickedPhoto: PropTypes.func.isRequired,
};

export default PhotoSliderPhoto;
