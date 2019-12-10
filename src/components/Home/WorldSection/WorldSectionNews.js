import React from 'react';
import WorldSectionDetails from './WorldSectionDetails';

export default function WorldSectionNews({ activeNews }) {
    return (
        <div className="cell-xs-12">
            <div
                className="row"
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    position: 'relative',
                }}
            >
                <div
                    className="isotope isotope--loaded"
                    data-isotope-layout="fitRows"
                    data-isotope-group="gallery"
                >
                    <div className="row">
                        <WorldSectionDetails activeNews={activeNews} />
                    </div>
                </div>
            </div>
        </div>
    );
}
