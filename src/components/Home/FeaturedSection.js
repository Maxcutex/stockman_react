import React, { Component } from 'react';
import FeaturedMainNews from './FeaturedMainNews';
import FeaturedSideNews from './FeaturedSideNews';

class FeaturedSection extends Component {
    render() {
        return (
            <section className="section-xs bg-white">
                <div className="shell">
                    <div className="range range-center range-30">
                        <div className="cell-lg-8">
                            <FeaturedMainNews />
                        </div>
                        <div className="cell-lg-4">
                            <div className="range range-center range-30">
                                <div className="cell-xs-6 cell-sm-6 cell-lg-12">
                                    <FeaturedSideNews />
                                </div>
                                <div className="cell-xs-6 cell-sm-6 cell-lg-12">
                                    <FeaturedSideNews />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default FeaturedSection;
