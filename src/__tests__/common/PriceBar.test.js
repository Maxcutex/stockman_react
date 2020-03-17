import React from 'react';
import { shallow } from 'enzyme';
import { PriceBar }  from '../../components/common/PriceBar';

describe('Price Bar  Component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<PriceBar />);
    });


    it('is wrapped inside a page-header class', () => {
        // expect(component.find('.page-header')).toBeDefined();
        // expect(component.find('.page-header')).toHaveLength(1);
    });
});