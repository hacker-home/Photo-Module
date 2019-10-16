import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ShareButton from '../client/src/components/ShareButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SaveButton component', () => {
  it('should render the ShareButton component', () => {
    const wrapper = shallow(<ShareButton />);
    expect(wrapper.exists()).toBe(true);
  });
});
