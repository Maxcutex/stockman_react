import React from 'react';
import { shallow } from 'enzyme';

import WorldSection from '../../../components/Home/WorldSection/WorldSection';
import WorldSectionDetails from '../../../components/Home/WorldSection/WorldSectionDetails';
describe('WorldSection Component', () => {
    let component;
    let props;
    beforeEach(() => {
        props = {
            activeNews: [
                {
                    section: 'World',
                    title: 'news title1',
                    description: 'this is the description',
                    author: 'Jon Snow',
                    date: '28-01-2019',
                    id: 8,
                },
            ],
        };
        component = shallow(<WorldSection />);
    });
    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

});
