import React, { Component } from 'react';
import axios from 'axios';
import DefaultData from '../DefaultData';
import PhotoGrid from './PhotoGrid';
import ShareButton from './ShareButton';
import SaveButton from './SaveButton';
import ViewPhotosButton from './ViewPhotosButton';
import ShareModal from './ShareModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listingDesc: DefaultData.listingDesc,
      listingPhotos: DefaultData.listingPhotos,
      isSaved: DefaultData.isSaved,
      shareModalIsShown: false,
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
  }

  componentDidMount() {
    axios.get('/photos/1')
      .then((response) => {
        const listingObj = response.data[0];
        const { listingDesc } = listingObj;
        const { listingPhotos } = listingObj;
        const { isSaved } = listingObj;
        this.setState({ listingDesc, listingPhotos, isSaved });
      })
      .catch((error) => {
        throw (error);
      });
  }

  onClickSave() {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }));
  }

  showShareModal() {
    this.setState({ shareModalIsShown: true });
  }

  hideShareModal() {
    this.setState({ shareModalIsShown: false });
  }

  render() {
    const {
      listingDesc,
      listingPhotos,
      isSaved,
      shareModalIsShown,
    } = this.state;
    return (
      <div>
        <div className="photo-grid-container">
          <PhotoGrid
            photos={listingPhotos}
          />
          <div className="share-and-save-buttons">
            <ShareButton
              showShareModal={this.showShareModal}
            />
            <SaveButton
              isSaved={isSaved}
              onClickSave={this.onClickSave}
            />
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
