import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from '../client/src/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should render the App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
