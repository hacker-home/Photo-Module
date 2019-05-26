import photoOne from '../../public/dist/samplePhotos/1.jpg';
import photoTwo from '../../public/dist/samplePhotos/2.jpg';
import photoThree from '../../public/dist/samplePhotos/3.jpg';
import photoFour from '../../public/dist/samplePhotos/4.jpg';
import photoFive from '../../public/dist/samplePhotos/5.jpg';
import photoSix from '../../public/dist/samplePhotos/6.jpg';

const DefaultData = {
  listingDesc: 'Luxury Guest Home! - Guesthomes for Rent in San Francisco',
  isSaved: false,
  listingPhotos: [
    {
      url: photoOne, desc: 'Check out that view!', isVerified: true,
    },
    {
      url: photoTwo, desc: 'Kitchen', isVerified: false,
    },
    {
      url: photoThree, desc: 'Living Room', isVerified: true,
    },
    {
      url: photoFour, desc: 'Bedroom', isVerified: true,
    },
    {
      url: photoFive, desc: 'Bathroom', isVerified: true,
    },
    {
      url: photoSix, desc: 'Lobby', isVerified: false,
    },
  ],
};

export default DefaultData;
