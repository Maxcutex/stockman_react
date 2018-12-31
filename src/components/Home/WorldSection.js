import React from 'react';
import WorldSectionDetails from './WorldSectionDetails';

const WorldSection = () => {
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
                                        <a
                                            className="active"
                                            data-isotope-filter="Category 1"
                                            data-isotope-group="gallery"
                                            href="/"
                                        >
                                            World{' '}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-isotope-filter="Category 2"
                                            data-isotope-group="gallery"
                                            href="/"
                                        >
                                            Business{' '}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            data-isotope-filter="Category 3"
                                            data-isotope-group="gallery"
                                            href="/"
                                        >
                                            Politics{' '}
                                        </a>
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
                                className="isotope"
                                data-isotope-layout="fitRows"
                                data-isotope-group="gallery"
                            >
                                <div className="row">
                                    <WorldSectionDetails />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WorldSection;
