const mongoose = require('mongoose');
const helper = require('./generateListings');

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true, useCreateIndex: true });

const listingSchema = mongoose.Schema({
  listingID: { type: Number, unique: true },
  listingDesc: String,
  isSaved: Boolean,
  listingPhotos: [{ url: String, desc: String, isVerified: Boolean }],
});

const Listing = mongoose.model('Listing', listingSchema);

const listingsArray = helper.generateListings();

Listing.insertMany(listingsArray, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully seeded database!');
  }
});
