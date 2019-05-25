import React, { Component } from 'react';
// import ShareButton from './ShareButton.jsx';
// import SaveButton from './SaveButton.jsx';
// import ViewPhotosButton from './ViewPhotosButton.jsx';

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
          <img className="photo" src={photos[0]} alt="" />
        </div>
        <div className="photo-container col-2 photo-two">
          <img className="photo" src={photos[1]} alt="" />
        </div>
        <div className="photo-container col-3 photo-three">
          <img className="photo" src={photos[2]} alt="" />
        </div>
        <div className="photo-container col-2 photo-four">
          <img className="photo" src={photos[3]} alt="" />
        </div>
        <div className="photo-container col-3 photo-five">
          <img className="photo" src={photos[4]} alt="" />
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
