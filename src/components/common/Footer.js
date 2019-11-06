import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer>
            <div className="shell page-footer-default page-footer-type-1">
                <div className="range range-30 text-left">
                    <div className="cell-xs-6 cell-lg-3">
                        <h4 className="footer-title">Categories</h4>
                        <ul className="list">
                            <li>
                                <a href="/">World</a>
                            </li>
                            <li>
                                <a href="/">Economy</a>
                            </li>
                            <li>
                                <a href="/">Politics & Policy</a>
                            </li>
                            <li>
                                <a href="/">Business</a>
                            </li>
                            <li>
                                <a href="/">Life</a>
                            </li>
                            <li>
                                <a href="/">Markets</a>
                            </li>
                        </ul>
                    </div>
                    <div className="cell-xs-6 cell-lg-3">
                        <h4 className="footer-title">Information</h4>
                        <ul className="list">
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="contacts.html">Contacts</a>
                            </li>
                            <li>
                                <a href="/">Editorial Policy</a>
                            </li>
                            <li>
                                <a href="/">Terms of Service</a>
                            </li>
                            <li>
                                <a href="typography.html">Typography</a>
                            </li>
                        </ul>
                    </div>
                    <div className="cell-xs-12 cell-sm-6 cell-lg-3">
                        <h4 className="footer-title">Tags</h4>
                        <ul className="tag-list-type-1">
                            <li>
                                <a href="post.html">World</a>
                            </li>
                            <li>
                                <a href="post.html">Markets</a>
                            </li>
                            <li>
                                <a href="post.html">Life</a>
                            </li>
                            <li>
                                <a href="post.html">Business</a>
                            </li>
                            <li>
                                <a href="post.html">Economy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="cell-xs-12 cell-sm-6 cell-lg-3">
                        <h4 className="footer-title">Newsletter</h4>
                        <p className="text-italic">
                            We will send you breaking news right to your inbox
                        </p>
                        <form
                            className="rd-mailform text-left rd-mailform-inline"
                            data-form-output="form-output-global"
                            data-form-type="subscribe"
                            method="post"
                            action="bat/rd-mailform.php"
                        >
                            <div className="form-wrap">
                                <label
                                    className="form-label text-italic"
                                    htmlFor="subscribe-email"
                                >
                                    Your Email Here
                                </label>
                                <input
                                    className="form-input"
                                    id="subscribe-email"
                                    type="email"
                                    name="email"
                                    data-constraints="@Email @Required"
                                />
                            </div>
                            <button
                                className="button button-primary"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="range range-center range-xs-30 range-sm-0 footer-bottom-section">
                    <div className="cell-sm-6 text-sm-left">
                        <a href="./">
                            <img
                                src="images/logo-dark-266x54.png"
                                width="266"
                                height="54"
                                alt=""
                            />
                        </a>
                        <p className="privacy">
                            MoneyWise &#169; <span id="copyright-year" />.
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
            </div>
        </footer>
    );
};

export default Footer;
