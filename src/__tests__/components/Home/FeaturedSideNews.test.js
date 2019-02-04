import React from 'react';
import { shallow } from 'enzyme';

import FeaturedSideNews from '../../../components/Home/FeaturedSideNews';
describe('FeaturedSideNews Component', () => {
    let component;
    let props;
    beforeEach(() => {
        props = {
            featured: {
                visual_news: [
                    {
                        image_file: 'abi.jpg',
                        image_type: 'size450x330',
                    },
                    {
                        image_file: 'abi.jpg',
                        image_type: 'size950x330',
                    },
                ],
                title: 'test title',
                author: 'test',
            },
        };
        component = shallow(<FeaturedSideNews {...props} />);
    });
    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });
});
