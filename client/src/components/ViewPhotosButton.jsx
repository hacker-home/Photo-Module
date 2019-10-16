import React from 'react';
import PropTypes from 'prop-types';
import css from '../../../public/dist/styles.css';

const ViewPhotosButton = (props) => {
  const { showPhotoCarousel } = props;
  return (
    <div className={css['view-photos-button']}>
      <button type="button" onClick={showPhotoCarousel}>
        View Photos
      </button>
    </div>
  );
};

ViewPhotosButton.propTypes = {
  showPhotoCarousel: PropTypes.func.isRequired,
};

export default ViewPhotosButton;
