import React from 'react';
import { shallow, mount } from 'enzyme';

import FeaturedSection from '../../../components/Home/FeaturedSection/FeaturedSectionContainer';
const setup = () => {
    const props = {
        fetchFeaturedNews: jest.fn(),
    };

    return shallow(<FeaturedSection {...props} />);
};

const wrapper = setup();
describe('Featured Component', () => {
    it('expects the following methods to be defined', () => {
        // wrapper.instance().componentDidMount();
    });
});
