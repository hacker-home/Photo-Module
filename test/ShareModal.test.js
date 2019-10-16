import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ShareModal from '../client/src/components/ShareModal';

Enzyme.configure({ adapter: new Adapter() });

describe('ShareModal component', () => {
  it('should render the ShareModal component', () => {
    const wrapper = shallow(<ShareModal />);
    expect(wrapper.exists()).toBe(true);
  });
});
