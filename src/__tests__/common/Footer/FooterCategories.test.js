import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react';
import FooterCategories from '../../../components/common/Footer/FooterCategories';

const setUp = () => shallow(<FooterCategories  />);
describe('Footer Component', () => {
  it('renders without crashing', () => {
    const wrapper = setUp();
    expect(wrapper).toBeDefined();
    expect(wrapper.getElement().type).toBe('div');
  });
});
