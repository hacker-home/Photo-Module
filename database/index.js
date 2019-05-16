const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

const listingSchema = mongoose.Schema({
  listingID: Number,
  listingDesc: String,
  isSaved: Boolean,
  listingPhotos: [{ url: String, desc: String, isVerified: Boolean }],
});

const Listing = mongoose.model('Listing', listingSchema);
