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
      <PhotoGrid photos={listing.photos} />
    );
  }
}

export default App;
