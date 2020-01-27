import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews, fetchWorldNews } from '../../../actions/newsAction';

import WorldSectionLinks from './WorldSectionLinks';
import WorldSectionNews from './WorldSectionNews';
import Loader from '../../Loader/Loader';

class WorldSection extends Component {
   
    componentDidMount() {
        this.props.fetchNews();
        this.props.fetchWorldNews();
        const {generalNews, worldNews} = this.props;
        console.log('generalNews');
        console.log(worldNews);
    }
    changeSection = section => {
        const results  = this.props.worldNews;
        console.log(this.props.worldNews);
        const newResultList = [];
        results.forEach( result => {
            const sectionName = result.category_news.filter(nws => 
              (nws.section_category.section_name === section)
            );
            if (sectionName.length) newResultList.push(result);
        })
    
       
        this.setState({ activeNews: newResultList });
    };
    render() {
        if (( !this.props.worldNews )|| this.props.isLoading) {
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
                            activeNews={this.props.worldNews.splice(
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
    worldNews: news.worldNews,
    isLoading: news.generalNewsLoading,
});

export default connect(mapStateToProps, { fetchNews, fetchWorldNews })(WorldSection);
