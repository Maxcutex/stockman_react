import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews, fetchWorldNews } from '../../../actions/newsAction';

import WorldSectionLinks from './WorldSectionLinks';
import WorldSectionNews from './WorldSectionNews';
import Loader from '../../Loader/Loader';

class WorldSection extends Component {
    state = {
        activeNews: [],
    };
    componentDidMount() {
        this.props.fetchWorldNews();
    }

    componentDidUpdate(prevProps) {
        if (!this.props.worldNews.length) {
            this.props.fetchWorldNews();
        }

        if (this.props != prevProps && this.props.worldNews) {
            this.setState({ activeNews: this.filterSection('World') });
        }
    }

    filterSection = section => {
        const results = this.props.worldNews;
        const newResultList = [];
        results.forEach(result => {
            const sectionName = result.category_news.filter(
                nws => nws.section_category.section_name === section
            );
            if (sectionName.length) newResultList.push(result);
        });

        return newResultList;
    };

    changeSection = (e, section) => {
        e.preventDefault();
        const newResultList = this.filterSection(section);
        this.setState({ activeNews: newResultList });
    };

    render() {
        if (this.props.isLoading) {
            return <Loader />;
        }
        return (
            <section className="section-sm bg-white">
                <div className="shell">
                    <div className="range">
                        <div className="cell-xs-12">
                            <div className="section-title">
                                <h3>World</h3>
                                <div className="isotope-filters isotope-filters-horizontal">
                                    <button
                                        className="isotope-filters-toggle isotope-filters-toggle-1 button"
                                        data-custom-toggle="#isotope-filters"
                                        data-custom-toggle-disable-on-blur="true"
                                    >
                                        Filter
                                        <span className="caret" />
                                    </button>
                                    <WorldSectionLinks
                                        changeSection={(e, section) =>
                                            this.changeSection(e, section)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <WorldSectionNews activeNews={this.state.activeNews} />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ news }) => ({
    generalNews: news.generalNews,
    worldNews: news.worldNews,
    isLoading: news.generalNewsLoading,
});

export default connect(mapStateToProps, { fetchNews, fetchWorldNews })(
    WorldSection
);
