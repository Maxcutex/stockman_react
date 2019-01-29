import React, { Component } from 'react';
import WorldSectionDetails from './WorldSectionDetails';
import { Link } from 'react-router-dom';

class WorldSection extends Component {
    state = {
        news: [
            {
                id: 1,
                section: 'World',
                title: 'news title1',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
            },
            {
                id: 2,
                section: 'Business',
                title: 'news Business',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
            },
            {
                section: 'Business',
                title: 'news Business2',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
                id: 3,
            },
            {
                section: 'Business',
                title: 'news Business3',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
                id: 4,
            },
            {
                section: 'Politics',
                title: 'news Politics',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
                id: 5,
            },
            {
                section: 'World',
                title: 'news title2',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
                id: 6,
            },
            {
                section: 'World',
                title: 'news title3',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
                id: 7,
            },
        ],
        activeNews: [
            {
                section: 'World',
                title: 'news title1',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
                id: 8,
            },
            {
                section: 'World',
                title: 'news title2',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
                id: 9,
            },
            {
                section: 'World',
                title: 'news title3',
                description: 'this is the description',
                author: 'Jon Snow',
                date: '28-01-2019',
                id: 10,
            },
        ],
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
                                    <ul
                                        className="isotope-filters-list"
                                        id="isotope-filters"
                                    >
                                        <li>
                                            <Link
                                                to=""
                                                onClick={() =>
                                                    this.changeSection('World')
                                                }
                                            >
                                                World{' '}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to=""
                                                onClick={() =>
                                                    this.changeSection(
                                                        'Business'
                                                    )
                                                }
                                            >
                                                Business{' '}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to=""
                                                onClick={() =>
                                                    this.changeSection(
                                                        'Politics'
                                                    )
                                                }
                                            >
                                                Politics{' '}
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                data-isotope-filter="Category 4"
                                                data-isotope-group="gallery"
                                                href="/"
                                            >
                                                Economy{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                data-isotope-filter="Category 5"
                                                data-isotope-group="gallery"
                                                href="/"
                                            >
                                                Markets{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                data-isotope-filter="Category 6"
                                                data-isotope-group="gallery"
                                                href="/"
                                            >
                                                Art{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                data-isotope-filter="Category 7"
                                                data-isotope-group="gallery"
                                                href="/"
                                            >
                                                Life{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="cell-xs-12">
                            <div className="row">
                                <div
                                    className="isotope--loaded"
                                    data-isotope-layout="fitRows"
                                    data-isotope-group="gallery"
                                >
                                    <div className="row">
                                        <WorldSectionDetails
                                            activeNews={this.state.activeNews}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default WorldSection;
