import photoOne from '../../public/dist/samplePhotos/1.jpg';
import photoTwo from '../../public/dist/samplePhotos/2.jpg';
import photoThree from '../../public/dist/samplePhotos/3.jpg';
import photoFour from '../../public/dist/samplePhotos/4.jpg';
import photoFive from '../../public/dist/samplePhotos/5.jpg';
import photoSix from '../../public/dist/samplePhotos/6.jpg';
import photoSeven from '../../public/dist/samplePhotos/7.jpg';
import photoEight from '../../public/dist/samplePhotos/8.jpg';
import photoNine from '../../public/dist/samplePhotos/9.jpg';
import photoTen from '../../public/dist/samplePhotos/10.jpg';

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
      url: photoFour, desc: 'Bedroom 1', isVerified: true,
    },
    {
      url: photoFive, desc: 'Bathroom 1', isVerified: true,
    },
    {
      url: photoSix, desc: 'Lobby', isVerified: false,
    },
    {
      url: photoSeven, desc: 'Bedroom 2', isVerified: true,
    },
    {
      url: photoEight, desc: 'Office', isVerified: true,
    },
    {
      url: photoNine, desc: 'Bathroom 2', isVerified: false,
    },
    {
      url: photoTen, desc: 'Bedroom 3', isVerified: true,
    },
  ],
};

export default DefaultData;
