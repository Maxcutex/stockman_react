import React from 'react';
import { shallow } from 'enzyme';

import OpinionMarket from '../../../components/Home/OpinionSection/OpinionMarket';
describe('OpinionMarket Component', () => {
    it('renders without crashing', () => {
        let component = shallow(<OpinionMarket />);
    });
});
