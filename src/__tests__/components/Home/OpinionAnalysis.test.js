import React from 'react';
import { shallow } from 'enzyme';

import OpinionAnalysis from '../../../components/Home/OpinionSection/OpinionAnalysis';
describe('OpinionAnalysis Component', () => {
    it('renders without crashing', () => {
        let component = shallow(<OpinionAnalysis />);
    });
});
