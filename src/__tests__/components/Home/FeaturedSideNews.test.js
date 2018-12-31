import React from 'react';
import { shallow } from 'enzyme';

import FeaturedSideNews from '../../../components/Home/FeaturedSideNews';
describe('FeaturedSideNews Component', () => {
    it('renders without crashing', () => {
        let component = shallow(<FeaturedSideNews />);
    });
});
