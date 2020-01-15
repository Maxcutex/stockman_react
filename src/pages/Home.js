import React from 'react';
import FeaturedSection from '../components/Home/FeaturedSection/FeaturedSectionContainer';
import WorldSection from '../components/Home/WorldSection/WorldSection';
import OpinionSection from '../components/Home/OpinionSection/OpinionSection';

const Home = () => {
    return (
        <div>
            <FeaturedSection />
            <WorldSection />
            <OpinionSection />
        </div>
    );
};
export default Home;
