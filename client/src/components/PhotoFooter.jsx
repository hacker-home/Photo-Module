import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    } = this.props;

    const verifiedClass = photos[currentPhotoIndex].isVerified ? 'verified-photo' : 'visibility-hidden';

    return (
      <div className="photo-footer">
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
    );
  }
}

PhotoFooter.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
};

export default PhotoFooter;
