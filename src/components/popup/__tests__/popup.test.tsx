import React from 'react';
import { shallow } from 'enzyme';
import Popup from '../popup';

describe('Popup component', () => {
  it('should renders correctly', () => {
    const wrapper = shallow(<Popup>Hello</Popup>);
    expect(wrapper.isEmptyRender()).not.toEqual(true);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
