import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeaturedMainNews from './FeaturedMainNews';
import FeaturedSideNews from './FeaturedSideNews';
import { fetchFeaturedNews } from '../../../actions/newsAction';
import Loader from '../../Loader/Loader';

class FeaturedSectionContainer extends Component {
    componentDidMount() {
        this.props.fetchFeaturedNews();
    }
    render() {
        if (!this.props.featuredNews || this.props.isLoading) {
            return <Loader />;
        }
        const featuredMainNews = this.props.featuredNews.results.filter(
            featured => featured.is_main
        )[0];
        const featuredSideNews = this.props.featuredNews.results
            .filter(featured => !featured.is_main)
            .splice(0, 2);
        return (
            <section className="section-xs bg-white">
                <div className="shell">
                    <div className="range range-center range-30">
                        <div className="cell-lg-8">
                            <FeaturedMainNews featured={featuredMainNews} />
                        </div>
                        <div className="cell-lg-4">
                            <div className="range range-center range-30">
                                {featuredSideNews.map(sideNews => (
                                    <div key={`div-holder${sideNews.id}`} className="cell-xs-6 cell-sm-6 cell-lg-12">
                                        <FeaturedSideNews
                                            key={sideNews.id}
                                            id={sideNews.id}
                                            featured={sideNews}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

FeaturedSectionContainer.propTypes = {};

const mapStateToProps = state => ({
    featuredNews: state.news.featuredNews,
    isLoading: state.news.featuredNewsLoading,
});

export default connect(mapStateToProps, { fetchFeaturedNews })(
    FeaturedSectionContainer
);
