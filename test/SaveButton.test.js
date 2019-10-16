import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import SaveButton from '../client/src/components/SaveButton';

Enzyme.configure({ adapter: new Adapter() });

describe('SaveButton component', () => {
  it('should render the SaveButton component', () => {
    const wrapper = shallow(<SaveButton />);
    expect(wrapper.exists()).toBe(true);
  });
});
