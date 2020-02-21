import React from 'react';
import WorldSectionDetails from './WorldSectionDetails';
import { AnimateOnChange } from 'react-animation'

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
                ><AnimateOnChange animationIn="bounceIn" animationOut="bounceOut" style={{width:'100%'}}>
                    <div className="row">
                       
                        <WorldSectionDetails activeNews={activeNews} />
                    </div>
                    </AnimateOnChange>
                </div>
            </div>
        </div>
    );
}
