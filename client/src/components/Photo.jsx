import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  hoverOn() {
    this.setState({
      hover: true,
    });
  }

  hoverOff() {
    this.setState({
      hover: false,
    });
  }

  render() {
    const { photo } = this.props;
    const { hover } = this.state;

    const style = {
      // opacity: !hover && isGridHovered ? '0.7' : '1.0',
    };

    return (
      <div className="photo-wrapper">
        <img
          style={style}
          className="photo"
          onMouseEnter={this.hoverOn.bind(this)}
          onMouseLeave={this.hoverOff.bind(this)}
          src={photo}
          alt=""
        />
      </div>
    );
  }
}

export default Photo;
