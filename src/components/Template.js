import React from "react";
import PriceBar from "./common/PriceBar";
import Header from "./common/Header/Header";
import Footer from "./common/Footer";




function ApplicationTemplate(props) {
    return (
        <div>
            <PriceBar />
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default ApplicationTemplate
