const mongoose = require('mongoose');
const seedDB = require('./generateListings');

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true, useCreateIndex: true });

const listingSchema = mongoose.Schema({
  listingID: { type: Number, unique: true },
  listingDesc: String,
  isSaved: Boolean,
  listingPhotos: [{ url: String, desc: String, isVerified: Boolean }],
});

const Listing = mongoose.model('Listing', listingSchema);

// Create the array of 100 listings.
const listingsArray = seedDB.generateListings();

// Seed MongoDB.
Listing.insertMany(listingsArray, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully seeded database!');
  }
});
