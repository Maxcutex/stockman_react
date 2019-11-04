import React from 'react';
import { Link } from 'react-router-dom';
import OpinionAnalysis from './OpinionAnalysis';
import OpinionMarket from './OpinionMarket';
import InsideBusiness from "./InsideBusiness/InsideBusiness";

const OpinionSection = () => {
    return (
        <section className="bg-white section-bottom-60">
            <div className="shell">
                <div className="range range-center range-40">
                    <div className="cell-md-8 cell-lg-8">
                        <OpinionAnalysis />
                        <OpinionMarket />
                        <InsideBusiness/>
                    </div>
                    <div className="cell-md-4">
                        <div className="section-left-sidebar">
                            <div className="range range-50">
                                <div className="cell-sm-6 cell-md-12">
                                    <div className="sidebar-form-block">
                                        <h3>
                                            Get latest market news delivered
                                            daily!
                                        </h3>
                                        <p>
                                            We will send you breaking news right
                                            to your inbox
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
                                                    className="form-label"
                                                    htmlFor="contact-email"
                                                >
                                                    Your Email Here
                                                </label>
                                                <input
                                                    className="form-input"
                                                    id="contact-email"
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
                                        <div className="section-subscribe">
                                            <h3>Follow us</h3>
                                            <p>
                                                Read our latest news on any of
                                                these social networks!
                                            </p>
                                            <div className="soc-icon">
                                                <Link
                                                    className="icon fa-twitter"
                                                    to="/"
                                                >
                                                    {' '}
                                                </Link>
                                                <Link
                                                    className="icon fa-facebook"
                                                    to="/"
                                                />
                                                <Link
                                                    className="icon fa-google-plus"
                                                    to="/"
                                                />
                                                <Link
                                                    className="icon fa-youtube-play"
                                                    to="/"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell-sm-6 cell-md-12">
                                    <div className="section-title">
                                        <h3>YouTube</h3>
                                    </div>
                                    <div className="post-video">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe
                                                title="textx2"
                                                className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/0qvjg_39awQ"
                                            />
                                        </div>
                                        <div className="caption">
                                            <h5 className="title">
                                                <a href="post.html">
                                                    Why mobile industry is
                                                    rapidly changing
                                                </a>
                                            </h5>
                                            <div className="bottom-block">
                                                <ul className="meta-list">
                                                    <li>
                                                        by{' '}
                                                        <a href="post.html">
                                                            Jon Snow
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="post.html">
                                                            Aug 10, 2017{' '}
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="share-block">
                                                    <div className="soc-icon">
                                                        <Link
                                                            className="icon fa-twitter"
                                                            to="/"
                                                        >
                                                            {' '}
                                                        </Link>
                                                        <Link
                                                            className="icon fa-facebook"
                                                            to="/"
                                                        />
                                                        <Link
                                                            className="icon fa-google-plus"
                                                            to="/"
                                                        />
                                                        <Link
                                                            className="icon fa-youtube-play"
                                                            to="/"
                                                        />
                                                    </div>
                                                    <span className="icon fa-share-alt" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell-sm-6 cell-md-12">
                                    <div className="section-title">
                                        <h3>Recent articles</h3>
                                    </div>
                                    <ul className="post-list">
                                        <li>
                                            <a href="post.html">
                                                Big Pharma healthcare R&D steps
                                                out into the open
                                            </a>
                                        </li>
                                        <li>
                                            <a href="post.html">
                                                Comment: It is time to transform
                                                healthcare delivery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="post.html">
                                                Rupert Murdoch faces huge
                                                writedown on Theranos investment
                                            </a>
                                        </li>
                                        <li>
                                            <a href="post.html">
                                                Amazon’s drive-in grocery store
                                                marks new offline push
                                            </a>
                                        </li>
                                        <li>
                                            <a href="post.html">
                                                Singapore weighs up
                                                dual-className shareholdings
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cell-sm-6 cell-md-12">
                                    <div className="section-title">
                                        <h3>Instagram</h3>
                                    </div>
                                    <div
                                        className="instafeed"
                                        data-instafeed-get="tagged"
                                        data-instafeed-tagname="tm_62058"
                                        data-instafeed-user="25025320"
                                        data-instafeed-sort="most-liked"
                                        data-lightgallery="group"
                                    >
                                        <div className="range range-center range-5">
                                            <div
                                                className="cell-xxs-6 cell-xs-3 cell-sm-6 cell-md-4 cell-lg-3"
                                                data-instafeed-item=""
                                            >
                                                <div className="thumbnail-instafeed">
                                                    <a
                                                        className="instagram-link"
                                                        data-lightgallery="group-item"
                                                        href="/"
                                                        data-images-standard_resolution-url="href"
                                                    >
                                                        <img
                                                            className="instagram-image"
                                                            src="images/_blank.png"
                                                            alt=""
                                                            data-images-standard_resolution-url="src"
                                                        />
                                                        <div className="caption">
                                                            <ul className="list-inline">
                                                                <li>
                                                                    <span className="icon mdi mdi-heart" />
                                                                    <span data-likes-count="text" />
                                                                </li>
                                                                <li>
                                                                    <span className="icon mdi mdi-comment" />
                                                                    <span data-comments-count="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="cell-xxs-6 cell-xs-3 cell-sm-6 cell-md-4 cell-lg-3"
                                                data-instafeed-item=""
                                            >
                                                <div className="thumbnail-instafeed">
                                                    <a
                                                        className="instagram-link"
                                                        data-lightgallery="group-item"
                                                        href="/"
                                                        data-images-standard_resolution-url="href"
                                                    >
                                                        <img
                                                            className="instagram-image"
                                                            src="images/_blank.png"
                                                            alt=""
                                                            data-images-standard_resolution-url="src"
                                                        />
                                                        <div className="caption">
                                                            <ul className="list-inline">
                                                                <li>
                                                                    <span className="icon mdi mdi-heart" />
                                                                    <span data-likes-count="text" />
                                                                </li>
                                                                <li>
                                                                    <span className="icon mdi mdi-comment" />
                                                                    <span data-comments-count="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="cell-xxs-6 cell-xs-3 cell-sm-6 cell-md-4 cell-lg-3"
                                                data-instafeed-item=""
                                            >
                                                <div className="thumbnail-instafeed">
                                                    <a
                                                        className="instagram-link"
                                                        data-lightgallery="group-item"
                                                        href="/"
                                                        data-images-standard_resolution-url="href"
                                                    >
                                                        <img
                                                            className="instagram-image"
                                                            src="images/_blank.png"
                                                            alt=""
                                                            data-images-standard_resolution-url="src"
                                                        />
                                                        <div className="caption">
                                                            <ul className="list-inline">
                                                                <li>
                                                                    <span className="icon mdi mdi-heart" />
                                                                    <span data-likes-count="text" />
                                                                </li>
                                                                <li>
                                                                    <span className="icon mdi mdi-comment" />
                                                                    <span data-comments-count="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="cell-xxs-6 cell-xs-3 cell-sm-6 cell-md-4 cell-lg-3"
                                                data-instafeed-item=""
                                            >
                                                <div className="thumbnail-instafeed">
                                                    <a
                                                        className="instagram-link"
                                                        data-lightgallery="group-item"
                                                        href="/"
                                                        data-images-standard_resolution-url="href"
                                                    >
                                                        <img
                                                            className="instagram-image"
                                                            src="images/_blank.png"
                                                            alt=""
                                                            data-images-standard_resolution-url="src"
                                                        />
                                                        <div className="caption">
                                                            <ul className="list-inline">
                                                                <li>
                                                                    <span className="icon mdi mdi-heart" />
                                                                    <span data-likes-count="text" />
                                                                </li>
                                                                <li>
                                                                    <span className="icon mdi mdi-comment" />
                                                                    <span data-comments-count="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="cell-xxs-6 cell-xs-3 cell-sm-6 cell-md-4 cell-lg-3"
                                                data-instafeed-item=""
                                            >
                                                <div className="thumbnail-instafeed">
                                                    <a
                                                        className="instagram-link"
                                                        data-lightgallery="group-item"
                                                        href="/"
                                                        data-images-standard_resolution-url="href"
                                                    >
                                                        <img
                                                            className="instagram-image"
                                                            src="images/_blank.png"
                                                            alt=""
                                                            data-images-standard_resolution-url="src"
                                                        />
                                                        <div className="caption">
                                                            <ul className="list-inline">
                                                                <li>
                                                                    <span className="icon mdi mdi-heart" />
                                                                    <span data-likes-count="text" />
                                                                </li>
                                                                <li>
                                                                    <span className="icon mdi mdi-comment" />
                                                                    <span data-comments-count="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="cell-xxs-6 cell-xs-3 cell-sm-6 cell-md-4 cell-lg-3"
                                                data-instafeed-item=""
                                            >
                                                <div className="thumbnail-instafeed">
                                                    <a
                                                        className="instagram-link"
                                                        data-lightgallery="group-item"
                                                        href="/"
                                                        data-images-standard_resolution-url="href"
                                                    >
                                                        <img
                                                            className="instagram-image"
                                                            src="images/_blank.png"
                                                            alt=""
                                                            data-images-standard_resolution-url="src"
                                                        />
                                                        <div className="caption">
                                                            <ul className="list-inline">
                                                                <li>
                                                                    <span className="icon mdi mdi-heart" />
                                                                    <span data-likes-count="text" />
                                                                </li>
                                                                <li>
                                                                    <span className="icon mdi mdi-comment" />
                                                                    <span data-comments-count="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="cell-xxs-6 cell-xs-3 cell-sm-6 cell-md-4 cell-lg-3"
                                                data-instafeed-item=""
                                            >
                                                <div className="thumbnail-instafeed">
                                                    <a
                                                        className="instagram-link"
                                                        data-lightgallery="group-item"
                                                        href="/"
                                                        data-images-standard_resolution-url="href"
                                                    >
                                                        <img
                                                            className="instagram-image"
                                                            src="images/_blank.png"
                                                            alt=""
                                                            data-images-standard_resolution-url="src"
                                                        />
                                                        <div className="caption">
                                                            <ul className="list-inline">
                                                                <li>
                                                                    <span className="icon mdi mdi-heart" />
                                                                    <span data-likes-count="text" />
                                                                </li>
                                                                <li>
                                                                    <span className="icon mdi mdi-comment" />
                                                                    <span data-comments-count="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                className="cell-xxs-6 cell-xs-3 cell-sm-6 cell-md-4 cell-lg-3"
                                                data-instafeed-item=""
                                            >
                                                <div className="thumbnail-instafeed">
                                                    <a
                                                        className="instagram-link"
                                                        data-lightgallery="group-item"
                                                        href="/"
                                                        data-images-standard_resolution-url="href"
                                                    >
                                                        <img
                                                            className="instagram-image"
                                                            src="images/_blank.png"
                                                            alt=""
                                                            data-images-standard_resolution-url="src"
                                                        />
                                                        <div className="caption">
                                                            <ul className="list-inline">
                                                                <li>
                                                                    <span className="icon mdi mdi-heart" />
                                                                    <span data-likes-count="text" />
                                                                </li>
                                                                <li>
                                                                    <span className="icon mdi mdi-comment" />
                                                                    <span data-comments-count="text" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpinionSection;
