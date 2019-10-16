import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ShareModal from '../client/src/components/ShareModal';

Enzyme.configure({ adapter: new Adapter() });

describe('ShareModal component', () => {
  const wrapper = shallow(<ShareModal />);

  it('should render the ShareModal component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
