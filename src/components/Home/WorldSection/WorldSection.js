import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../../actions/newsAction';
import { news, activeNews } from './mock';
import WorldSectionLinks from './WorldSectionLinks';
import WorldSectionNews from './WorldSectionNews';
import Loader from '../../Loader/Loader';

class WorldSection extends Component {
    state = {
        news,
        activeNews,
    };
    componentDidMount() {
        this.props.fetchNews();
    }
    changeSection = section => {
        const { results } = this.props.generalNews;
        const activeNewsFilter = results.filter(nws => {
            return nws.section === section;
        });
        this.setState({ activeNews: activeNewsFilter });
    };
    render() {
        if (!this.props.generalNews || this.props.isLoading) {
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
                                        changeSection={section =>
                                            this.changeSection(section)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <WorldSectionNews
                            activeNews={this.props.generalNews.results.splice(
                                0,
                                4
                            )}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ news }) => ({
    generalNews: news.generalNews,
    isLoading: news.generalNewsLoading,
});

export default connect(mapStateToProps, { fetchNews })(WorldSection);
