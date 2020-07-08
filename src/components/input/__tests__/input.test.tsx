import React from 'react';
import { shallow } from 'enzyme';
import Input from '../input';

describe('Input component', () => {
  it('should renders correctly', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.isEmptyRender()).not.toEqual(true);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
