import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SaveButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { isSaved, onClickSave } = this.props;
    const iconColor = isSaved ? '#FF5A5F' : '#484848';
    const saveText = isSaved ? 'Saved' : 'Save';
    const fillOpacity = isSaved ? '1' : '0';
    return (
      <div className="save-button">
        <button type="button" onClick={onClickSave}>
          <div>
            <svg className="save-icon vertically-center" viewBox="0 0 24 24" fill={iconColor} fillOpacity={fillOpacity} stroke={iconColor} strokeWidth="1" role="img" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8C10.5 4.1 8.3 2.5 5.9 3 4.4 3.2 3 4.2 2.3 5.6c-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round" />
            </svg>
            <span className="vertically-center">{saveText}</span>
          </div>
        </button>
      </div>
    );
  }
}

SaveButton.propTypes = {
  isSaved: PropTypes.bool.isRequired,
  onClickSave: PropTypes.func.isRequired,
};

export default SaveButton;
