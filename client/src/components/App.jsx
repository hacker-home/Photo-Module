import React, { Component } from 'react';
import axios from 'axios';
import DefaultData from '../DefaultData';
import PhotoGrid from './PhotoGrid.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: DefaultData,
    };
  }

  // componentDidMount() {
  //   axios.get('/photos?listingID=1')
  //     .then((response) => {
  //       const listingObj = response.data[0];
  //       this.setState({ listing: listingObj });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    const { listing } = this.state;
    return (
      // <div className="photo-grid-wrapper">
      //   <div className="photo-grid">
      //     <div className="photo-wrapper">
      //       <img className="photo" src={this.state.listing.photos[0]} alt="photo0" />
      //     </div>
      //     <div className="photo-wrapper">
      //       <img className="photo" src={this.state.listing.photos[1]} alt="photo1" />
      //     </div>
      //     <div className="photo-wrapper">
      //       <img className="photo" src={this.state.listing.photos[2]} alt="photo2" />
      //     </div>
      //     <div className="photo-wrapper">
      //       <img className="photo" src={this.state.listing.photos[3]} alt="photo3" />
      //     </div>
      //     <div className="photo-wrapper">
      //       <img className="photo" src={this.state.listing.photos[4]} alt="photo4" />
      //     </div>
      //     <div className="photo-wrapper">
      //       <img className="photo" src={this.state.listing.photos[5]} alt="photo5" />
      //     </div>
      //   </div>
      // </div>
      <PhotoGrid photos={listing.photos} />
    );
  }
}

export default App;
