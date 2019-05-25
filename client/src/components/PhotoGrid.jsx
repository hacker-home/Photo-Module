import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { photos } = this.props;

    return (
      <div className="photo-grid">
        <div className="photo-container first-photo">
          <img className="photo" src={photos[0].url} alt="" />
        </div>
        <div className="photo-container col-2 photo-two">
          <img className="photo" src={photos[1].url} alt="" />
        </div>
        <div className="photo-container col-3 photo-three">
          <img className="photo" src={photos[2].url} alt="" />
        </div>
        <div className="photo-container col-2 photo-four">
          <img className="photo" src={photos[3].url} alt="" />
        </div>
        <div className="photo-container col-3 photo-five">
          <img className="photo" src={photos[4].url} alt="" />
        </div>
      </div>
    );
  }
}

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PhotoGrid;
