import React from 'react';
import OpinionAnalysis from './OpinionAnalysis';
import OpinionMarket from './OpinionMarket';
import InsideBusiness from '../InsideBusiness/InsideBusiness';
import OpinionSectionSideBar from './OpinionSectionSideBar/OpinionSectionSideBar';

const OpinionSection = () => {
    return (
        <section className="bg-white section-bottom-60">
            <div className="shell">
                <div className="range range-center range-40">
                    <div className="cell-md-8 cell-lg-8">
                        <OpinionAnalysis />
                        <OpinionMarket />
                        <InsideBusiness/>
                    </div>
                    <OpinionSectionSideBar/>
                </div>
            </div>
        </section>
    );
};

export default OpinionSection;
