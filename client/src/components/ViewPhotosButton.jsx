import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewPhotosButton extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { showPhotoCarousel } = this.props;
    return (
      <div className="view-photos-button">
        <button type="button" onClick={showPhotoCarousel}>
          View Photos
        </button>
      </div>
    );
  }
}

ViewPhotosButton.propTypes = {
  showPhotoCarousel: PropTypes.func.isRequired,
};

export default ViewPhotosButton;
