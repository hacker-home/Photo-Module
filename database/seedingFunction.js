const generateListings = require('./generateListings');
const { Listing } = require('./index');

// Drop collection if exist.
Listing.collection.drop(() => {});

// Create the array of 100 listings.
const listingsArray = generateListings();

// Seed MongoDB.
Listing.insertMany(listingsArray, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully seeded database!');
  }
});
