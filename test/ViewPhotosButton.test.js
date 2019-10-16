import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ViewPhotosButton from '../client/src/components/ViewPhotosButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SaveButton component', () => {
  it('should render the ViewPhotosButton component', () => {
    const wrapper = shallow(<ViewPhotosButton />);
    expect(wrapper.exists()).toBe(true);
  });
});
