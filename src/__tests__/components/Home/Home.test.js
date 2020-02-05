import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../pages/home/home';
import FeaturedSection from '../../../components/Home/FeaturedSection/FeaturedSectionContainer';

describe('Home Test', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Home />);
    });
    it('should render Home correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Featured Section correctly', () => {
        const featured = wrapper.find(FeaturedSection);
        expect(featured.length).toBe(1);
    });

    it('should render Opinion Section correctly', () => {
        const featured = wrapper.find('OpinionSection');
        expect(featured.length).toBe(1);
    });
});
