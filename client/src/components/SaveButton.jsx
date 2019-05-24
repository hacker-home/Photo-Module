import React, { Component } from 'react';

class SaveButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };

    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }));
  }

  render() {
    const { isClicked } = this.state;
    let color;
    let saveText;
    let fillOpacity;
    if (isClicked) {
      color = '#FF5A5F';
      saveText = 'Saved';
      fillOpacity = '1';
    } else {
      color = '#484848';
      saveText = 'Save';
      fillOpacity = '0';
    }
    return (
      <div className="save-button">
        <button type="button" onClick={this.onClickSave}>
          <span>
            <svg className="save-icon" viewBox="0 0 24 24" fill={color} fillOpacity={fillOpacity} stroke={color} strokeWidth="1" role="img" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8C10.5 4.1 8.3 2.5 5.9 3 4.4 3.2 3 4.2 2.3 5.6c-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round" />
            </svg>
            {saveText}
          </span>
        </button>
      </div>
    );
  }
}

export default SaveButton;
