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
        //const src = logoImg.props('src');
        //expect(src).toBe('images/logo-dark-266x54.png');
        // expect(
        //     component
        //         .find('img')
        //         .find('[src]')
        //         .props().src
        // ).toEqual('images/logo-dark-266x54.png');
        // expect(
        //     component.find('img').filterWhere(item => {
        //         return item.prop('src') === IMAGE_PATH;
        //     })
        // ).toHaveLength(1);
    });
});
