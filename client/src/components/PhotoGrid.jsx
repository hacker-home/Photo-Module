import React from 'react';
import PropTypes from 'prop-types';
import css from '../../../public/dist/styles.css';

const PhotoGrid = (props) => {
  const { photos, showPhotoCarousel } = props;

  return (
    <div className={css['photo-grid']}>
      <div className={`${css['photo-container']} ${css['first-photo']}`}>
        <img className={css.photo} name="0" src={photos[0].url} onClick={showPhotoCarousel} role="presentation" alt="" />
      </div>
      <div className={`${css['photo-container']} ${css['col-2']} ${css['photo-two']}`}>
        <img className={css.photo} name="1" src={photos[1].url} onClick={showPhotoCarousel} role="presentation" alt="" />
      </div>
      <div className={`${css['photo-container']} ${css['col-3']} ${css['photo-three']}`}>
        <img className={css.photo} name="2" src={photos[2].url} onClick={showPhotoCarousel} role="presentation" alt="" />
      </div>
      <div className={`${css['photo-container']} ${css['col-2']} ${css['photo-four']}`}>
        <img className={css.photo} name="3" src={photos[3].url} onClick={showPhotoCarousel} role="presentation" alt="" />
      </div>
      <div className={`${css['photo-container']} ${css['col-3']} ${css['photo-five']}`}>
        <img className={css.photo} name="4" src={photos[4].url} onClick={showPhotoCarousel} role="presentation" alt="" />
      </div>
    </div>
  );
};


PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  showPhotoCarousel: PropTypes.func.isRequired,
};

export default PhotoGrid;
