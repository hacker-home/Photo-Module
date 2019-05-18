const faker = require('faker');

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const generateListingPhotos = () => {
  const photosArray = [];
  const usedPhotos = [];

  // Generate 5-15 photos per listing.
  const numberOfPhotos = getRandomInt(5, 16);

  // Add an arbitrary # of photo objects to an array.
  for (let i = 0; i < numberOfPhotos; i += 1) {
    const randomPhoto = getRandomInt(1, 66);
    // If the randomPhoto has not been used yet, create the photo object with that index.
    if (!usedPhotos.includes(randomPhoto)) {
      const photoObj = {
        url: `https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/${randomPhoto}.jpg`,
        desc: faker.lorem.sentence(),
        isVerified: faker.random.boolean(),
      };
      photosArray.push(photoObj);
      usedPhotos.push(randomPhoto);
    }
  }
  return photosArray;
};

module.exports = generateListingPhotos;
