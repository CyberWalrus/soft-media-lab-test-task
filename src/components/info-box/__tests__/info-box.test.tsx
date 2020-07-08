import React from 'react';
import { shallow } from 'enzyme';
import InfoBox from '../info-box';

describe('InfoBox component', () => {
  it('should renders correctly', () => {
    const wrapper = shallow(<InfoBox salary={0} ndfl />);
    expect(wrapper.isEmptyRender()).not.toEqual(true);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
