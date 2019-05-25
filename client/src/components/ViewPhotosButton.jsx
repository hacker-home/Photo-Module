import React, { Component } from 'react';

class ViewPhotosButton extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="view-photos-button">
        <button type="button">
          <span>View Photos</span>
        </button>
      </div>
    );
  }
}

export default ViewPhotosButton;
