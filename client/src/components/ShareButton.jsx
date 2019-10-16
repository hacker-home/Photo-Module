import React from 'react';
import PropTypes from 'prop-types';
import css from '../../../public/dist/styles.css';

const ShareButton = (props) => {
  const { showShareModal } = props;
  return (
    <div className={css['share-button']}>
      <button type="button" onClick={showShareModal}>
        <div>
          <svg className={`${css['share-icon']} ${css['vertically-center']}`} viewBox="0 0 24 24">
            <path d="m22.19 8.5h-3.14a.81.81 0 0 0 -.81.8c0 .44.36.8.81.8h2.33v12.31h-18.76v-12.31h3.11c.45 0 .81-.36.81-.8a.81.81 0 0 0 -.81-.8h-3.92a.81.81 0 0 0 -.81.8v13.91c0 .44.36.8.81.8h20.38c.45 0 .81-.36.81-.8v-13.91a.81.81 0 0 0 -.81-.8zm-14.11-3.82c.19 0 .36-.06.51-.18l2.01-1.58.6-.47v13.79c0 .44.36.8.81.8s.81-.36.81-.8v-13.79l.59.47 2.01 1.58a.8.8 0 0 0 .5.18.81.81 0 0 0 .63-.3.79.79 0 0 0 -.13-1.12l-3.92-3.09a.42.42 0 0 0 -.07-.04l-.07-.03-.01-.01-.05-.03a.76.76 0 0 0 -.3-.06.81.81 0 0 0 -.3.06l-.01.01-.06.04-.07.03a.42.42 0 0 0 -.07.04l-3.92 3.09a.79.79 0 0 0 -.13 1.12c.16.19.39.3.63.3z" />
          </svg>
          <span className={css['vertically-center']}>Share</span>
        </div>
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  showShareModal: PropTypes.func.isRequired,
};

export default ShareButton;
