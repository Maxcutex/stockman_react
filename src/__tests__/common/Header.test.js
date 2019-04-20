import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from '../../components/common/Header';

describe('Header Component', () => {
    let component;
    let props;
    let IMAGE_PATH = 'images/logo-dark-266x54.png';
    beforeEach(() => {
        let fetchSearchStock = jest.fn();
        const event = {
            target: {
                name: 'testing',
                value: 'testing',
            },
        };
        props = {
            searchList: {
                news: [{}],
                quotes: [{}],
            },
            fetchSearchStock: fetchSearchStock,
        };

        component = shallow(<Header {...props} />);
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
    it('show pop up on type search', () => {
        expect(component.find('.page-header')).toBeDefined();
        expect(component.find('.page-header')).toHaveLength(1);
    });
    it('should make sure input search boxes exists', () => {
        expect(component.find('.rd-navbar-search-form-input').exists()).toBe(
            true
        );
        expect(component.find('.rd-navbar-search-form-input')).toHaveLength(2);
    });
    it('should call onChange method when clicked', () => {
        const e = {
            target: { name: 'searchDesktop', value: 'the-value' },
        };

        expect(component.find('.desktop-input')).toHaveLength(1);
        const searchInput = component.find('.desktop-input');
        searchInput.simulate('change', e);

        expect(component.state().searchDesktop).toBe('the-value');
    });
});
