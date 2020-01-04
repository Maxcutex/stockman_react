import React from "react";
import PriceBar from "./common/PriceBar";
import Footer from "./common/Footer/Footer";
import HeaderWrapper from "./common/Header/HeaderWrapper";




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
