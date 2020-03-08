import React from "react"
import {Link} from "react-router-dom";


export default function FooterCopyRightPrivacy() {
    return (
        <div className="range range-center range-xs-30 range-sm-0 footer-bottom-section">
            <div className="cell-sm-6 text-sm-left">
                <a href="..">
                    <img
                        src="/images/STOCKMAN-WEB-LOGO.png.png"
                        width="266"
                        height="54"
                        alt=""
                    />
                </a>
                <p className="privacy">
                    StockMan &#169; <span id="copyright-year" />2020
                    <a href="privacy-policy.html">Privacy Policy</a>
                </p>
            </div>
            <div className="cell-sm-6 text-sm-right">
                <div className="soc-icon">
                    <Link className="icon fa-twitter" to="/">
                        {' '}
                    </Link>
                    <Link className="icon fa-facebook" to="/" />
                    <Link className="icon fa-google-plus" to="/" />
                    <Link className="icon fa-youtube-play" to="/" />
                </div>
            </div>
        </div>
    )
}