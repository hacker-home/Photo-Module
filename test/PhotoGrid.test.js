import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import PhotoGrid from '../client/src/components/PhotoGrid';
import DefaultData from '../client/src/DefaultData';

Enzyme.configure({ adapter: new Adapter() });

describe('PhotoGrid component', () => {
  const { listingPhotos } = DefaultData;
  const wrapper = shallow(<PhotoGrid photos={listingPhotos} />);

  it('should render the PhotoGrid component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 photos on the PhotoGrid', () => {
    expect(wrapper.find('photo-grid')).toBeDefined();
    expect(wrapper.find('.photo')).toHaveLength(5);
  });
});
