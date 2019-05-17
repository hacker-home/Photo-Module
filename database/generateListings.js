const faker = require('faker');
const helper = require('./generatePhotos');

const generateListings = () => {
  const listingsArray = [];

  for (let i = 0; i < 100; i += 1) {
    const listingObj = {
      listingID: i + 1,
      listingDesc: faker.lorem.sentence(),
      isSaved: faker.random.boolean(),
      listingPhotos: helper.generateListingPhotos(),
    };
    listingsArray.push(listingObj);
  }

  return listingsArray;
};

module.exports = generateListings;
