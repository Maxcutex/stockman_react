import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/common/Header';

describe('Header Component', () => {
    let component;
    let IMAGE_PATH = 'images/logo-dark-266x54.png';
    beforeEach(() => {
        component = shallow(<Header />);
    });

    it('has an nav tag', () => {
        var node = component.find('nav');
        expect(node.length).toEqual(2);
    });

    it('is wrapped inside a page-header class', () => {
        expect(component.find('.page-header')).toBeDefined();
        expect(component.find('.page-header')).toHaveLength(1);
    });
    it('should show a logo', () => {
        const logoImg = component.find('img');
        expect(logoImg.length).toEqual(2);
    });
});
