import React from 'react';
import PriceBar from './components/common/PriceBar';
import Footer from './components/common/Footer/Footer';
import HeaderWrapper from './components/common/Header';

function ApplicationTemplate(props) {
    return (
        <div>
            <PriceBar />
            <HeaderWrapper />
            {props.children}
            <Footer />
        </div>
    )
}

export default ApplicationTemplate
