import React, { Component } from 'react';
import axios from 'axios';
import DefaultData from '../DefaultData';
import PhotoGrid from './PhotoGrid';
import ShareButton from './ShareButton';
import SaveButton from './SaveButton';
import ViewPhotosButton from './ViewPhotosButton';
import ShareModal from './ShareModal';
import PhotoCarousel from './PhotoCarousel';
import '../../../public/dist/styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listingDesc: DefaultData.listingDesc,
      listingPhotos: DefaultData.listingPhotos,
      isSaved: DefaultData.isSaved,
      shareModalIsShown: false,
      photoCarouselIsShown: false,
      currentPhotoIndex: 0,
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.handleClickedPhoto = this.handleClickedPhoto.bind(this);
    this.showPhotoCarousel = this.showPhotoCarousel.bind(this);
    this.hidePhotoCarousel = this.hidePhotoCarousel.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  onClickSave() {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }));
  }

  getPhotos() {
    axios.get('/photos/1')
      .then((response) => {
        const listingObj = response.data[0];
        const { listingDesc } = listingObj;
        const { listingPhotos } = listingObj;
        const { isSaved } = listingObj;
        this.setState({
          listingDesc,
          listingPhotos,
          isSaved,
          currentPhotoIndex: 0,
        });
      })
      .catch((error) => {
        throw (error);
      });
  }

  handleClickedPhoto(e) {
    const clickedPhotoIndex = Number(e.target.name);
    this.setState({ currentPhotoIndex: clickedPhotoIndex });
  }

  showPhotoCarousel(e) {
    if (e.target.name) {
      this.handleClickedPhoto(e);
      this.setState({ photoCarouselIsShown: true });
    } else {
      this.setState({ photoCarouselIsShown: true });
    }
  }

  hidePhotoCarousel() {
    this.setState({ photoCarouselIsShown: false });
  }

  goToPrevSlide() {
    const { currentPhotoIndex, listingPhotos } = this.state;

    if (currentPhotoIndex === 0) {
      this.setState({
        currentPhotoIndex: listingPhotos.length - 1,
      });
    } else {
      this.setState(prevState => ({
        currentPhotoIndex: prevState.currentPhotoIndex - 1,
      }));
    }
  }

  goToNextSlide() {
    const { currentPhotoIndex, listingPhotos } = this.state;

    if (currentPhotoIndex === listingPhotos.length - 1) {
      this.setState({
        currentPhotoIndex: 0,
      });
    } else {
      this.setState(prevState => ({
        currentPhotoIndex: prevState.currentPhotoIndex + 1,
      }));
    }
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
      photoCarouselIsShown,
      currentPhotoIndex,
    } = this.state;
    return (
      <div>
        <div className="photo-grid-container">
          <PhotoGrid
            photos={listingPhotos}
            showPhotoCarousel={this.showPhotoCarousel}
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
          <ViewPhotosButton
            showPhotoCarousel={this.showPhotoCarousel}
          />
        </div>
        <ShareModal
          hideShareModal={this.hideShareModal}
          shareModalIsShown={shareModalIsShown}
          listingDesc={listingDesc}
        />
        <PhotoCarousel
          photos={listingPhotos}
          handleClickedPhoto={this.handleClickedPhoto}
          hidePhotoCarousel={this.hidePhotoCarousel}
          photoCarouselIsShown={photoCarouselIsShown}
          currentPhotoIndex={currentPhotoIndex}
          goToPrevSlide={this.goToPrevSlide}
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

export default App;
