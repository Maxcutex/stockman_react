import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../../components/common/Footer/Footer';

const setUp = () => shallow(<Footer  />);
describe('Footer Component', () => {
  it('renders without crashing', () => {
    const wrapper = setUp();
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
  });
});
