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
  //   axios.get('/photos/1')
  //     .then((response) => {
  //       const listingObj = response.data[0];
  //       const photosArr = listingObj.listingPhotos.map(photo => photo.url);
  //       const photosObj = { photos: photosArr };
  //       this.setState({ listing: photosObj });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    const { listing } = this.state;
    return (
      <div>
        <PhotoGrid photos={listing.photos} />
      </div>
    );
  }
}

export default App;
