import React, { Component } from 'react';
import {news, activeNews} from "./mock"
import WorldSectionDetails from './WorldSectionDetails';
import { Link } from 'react-router-dom';
import WorldSectionLinks from "./WorldSectionLinks";
import WorldSectionNews from "./WorldSectionNews";

class WorldSection extends Component {
    state = {
        news,
        activeNews
    };
    componentDidMount() {
        // call api to update state
    }
    changeSection = section => {
        const { news } = this.state;
        const activeNewsFilter = news.filter(nws => {
            return nws.section === section;
        });
        console.log(activeNewsFilter, '<== active news');
        this.setState({ activeNews: activeNewsFilter });
    };
    render() {
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
                                    <WorldSectionLinks changeSection={(section) => this.changeSection(section)}/>
                                </div>
                            </div>
                        </div>
                        <WorldSectionNews activeNews={activeNews}/>
                    </div>
                </div>
            </section>
        );
    }
}
export default WorldSection;
