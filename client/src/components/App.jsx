import React, { Component } from 'react';
import axios from 'axios';
import DefaultData from '../DefaultData';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: DefaultData,
    };
  }

  componentDidMount() {
    axios.get('/photos?listingID=1')
      .then((response) => {
        const listingObj = response.data[0];
        this.setState({ listing: listingObj });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello!!!!</h1>
        <img src={(this.state.listing.listingPhotos)[0].url} />
      </div>
    );
  }
}

export default App;

// let currentPage = this.state.page;
// let showPage;

// if (currentPage === 0) {
//   showPage = <div><button onClick={ () => {this.changePage(1)} }>Checkout</button></div>
// } else if (currentPage === 1) {
//   showPage = <FormOne changePage={this.changePage} />
// } else if (currentPage === 2) {
//   showPage = <FormTwo changePage={this.changePage} />
// } else if (currentPage === 3) {
//   showPage = <FormThree changePage={this.changePage} />
// } else if (currentPage === 4) {
//   showPage = <Confirmation changePage={this.changePage} />
// }

// return (
//   showPage
// )
// }
