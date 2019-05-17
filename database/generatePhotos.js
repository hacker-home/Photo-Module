const faker = require('faker');

const photoURLs = [
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/1.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/2.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/3.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/4.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/5.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/6.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/7.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/8.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/9.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/10.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/11.jpg',
  'https://s3-us-west-1.amazonaws.com/hackerhomephotos/photos/12.jpg',
];

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

const generateListingPhotos = () => {
  const photosArray = [];
  const usedPhotos = [];

  // Generate 5-10 photos per listing.
  const numberOfPhotos = getRandomInt(5, 11);

  // Add an arbitrary # of photo objects to an array.
  for (let i = 0; i < numberOfPhotos; i += 1) {
    const randomIndex = getRandomInt(0, photoURLs.length);
    // If the photo index has not been used yet, create the photo object with that index.
    if (usedPhotos.indexOf(randomIndex) === -1) {
      const photoObj = {
        url: photoURLs[randomIndex],
        desc: faker.lorem.sentence(),
        isVerified: faker.random.boolean(),
      };
      photosArray.push(photoObj);
      usedPhotos.push(randomIndex);
    }
  }
  return photosArray;
};

module.exports = {
  generateListingPhotos,
};
