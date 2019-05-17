import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
    };
  }

  componentDidMount() {
    axios.get('/photos?listingID=1')
      .then((response) => {
        const listingObj = response.data[0];
        this.setState({ listing: listingObj });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>Hello!!!!</div>
    );
  }
}

export default App;
