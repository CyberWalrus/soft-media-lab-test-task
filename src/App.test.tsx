import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App component', () => {
  it('should renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.isEmptyRender()).not.toEqual(true);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
