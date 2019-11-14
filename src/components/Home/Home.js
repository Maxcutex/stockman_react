import React from 'react';
import FeaturedSection from './FeaturedSection/FeaturedSectionContainer';
import WorldSection from './WorldSection/WorldSection';
import OpinionSection from './OpinionSection/OpinionSection';



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
