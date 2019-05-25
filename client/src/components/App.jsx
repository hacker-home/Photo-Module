import React, { Component } from 'react';
import axios from 'axios';
import DefaultData from '../DefaultData';
import PhotoGrid from './PhotoGrid.jsx';
import ShareButton from './ShareButton.jsx';
import SaveButton from './SaveButton.jsx';
import ViewPhotosButton from './ViewPhotosButton.jsx';
import ShareModal from './ShareModal.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listingPhotos: DefaultData,
      listingDesc: 'Luxury Guest Home! - Guesthomes for Rent in San Francisco',
      shareModalIsShown: false,
    };

    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/photos/1')
  //     .then((response) => {
  //       const listingObj = response.data[0];
  //       const photosArr = listingObj.listingPhotos.map(photo => photo.url);
  //       const photosObj = { photos: photosArr };
  //       this.setState({ listingPhotos: photosObj });
  //     })
  //     .catch((error) => {
  //       throw (error);
  //     });
  // }

  showShareModal() {
    this.setState({ shareModalIsShown: true });
  }

  hideShareModal() {
    this.setState({ shareModalIsShown: false });
  }

  render() {
    const { listingPhotos, listingDesc, shareModalIsShown } = this.state;
    return (
      <div>
        <div className="photo-grid-container">
          <PhotoGrid
            photos={listingPhotos.photos}
          />
          <div className="share-and-save-buttons">
            <ShareButton
              showShareModal={this.showShareModal}
            />
            <SaveButton />
          </div>
          <ViewPhotosButton />
        </div>
        <ShareModal
          hideShareModal={this.hideShareModal}
          shareModalIsShown={shareModalIsShown}
          listingDesc={listingDesc}
        />
      </div>
    );
  }
}

export default App;
