import React from 'react';
import { shallow } from 'enzyme';

import FeaturedMainNews from '../../../components/Home/FeaturedSection/FeaturedMainNews';

describe('FeaturedMainNews Component', () => {
    it('renders without crashing', () => {
        let component = shallow(<FeaturedMainNews />);
    });
});
