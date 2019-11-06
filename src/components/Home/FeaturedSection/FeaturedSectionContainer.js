import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeaturedMainNews from './FeaturedMainNews';
import FeaturedSideNews from './FeaturedSideNews';
import { fetchFeaturedNews } from '../../../actions/newsAction';

class FeaturedSectionContainer extends Component {
    componentDidMount() {
        this.props.fetchFeaturedNews();
    }
    render() {
        const featuredMainNews = this.props.news.filter(
            featured => featured.is_main
        )[0];
        const featuredSideNews = this.props.news
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
                                    <div className="cell-xs-6 cell-sm-6 cell-lg-12">
                                        <FeaturedSideNews
                                            key={sideNews.id}
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

const mapStateToProps = state => {
    return {
        news: state.news.news,
    };
};

export default connect(
    mapStateToProps,
    { fetchFeaturedNews }
)(FeaturedSectionContainer);
