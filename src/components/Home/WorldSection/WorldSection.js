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
        const {generalNews} = this.props;
        console.log('generalNews');
        console.log(generalNews);
    }
    changeSection = section => {
        const { results } = this.props.generalNews;
        console.log(section);
        const newResultList = [];
        results.forEach( result => {
            const sectionName = result.category_news.filter(nws => 
              (nws.section_category.section_name === section)
            );
            if (sectionName.length) newResultList.push(result);
        })
        console.log('new result list is ==> ', newResultList);
        // const activeNewsFilter = results.filter(nws => {
        //     return nws.category_news.section_category.section_name === section;
        // });
        // console.log(activeNewsFilter);
       
        // this.setState({ activeNews: activeNewsFilter });
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
