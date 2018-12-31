import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../components/Home/Home';

describe('Home Test', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Home />);
    });
    it('should render Home correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Featured Section correctly', () => {
        const featured = wrapper.find('FeaturedSection');
        expect(featured.length).toBe(1);
    });

    it('should render World Section correctly', () => {
        const featured = wrapper.find('WorldSection');
        expect(featured.length).toBe(1);
    });
    it('should render Opinion Section correctly', () => {
        const featured = wrapper.find('OpinionSection');
        expect(featured.length).toBe(1);
    });
});
