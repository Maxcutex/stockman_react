import React from 'react';
import { Link } from 'react-router-dom';

const WorldSectionDetails = props => {

    return props.activeNews.map(activeNew => {
        const { section, title, description, author, date,id } = activeNew;
        return (
            
                <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-3 isotope-item"
                    data-filter={section} key={id}
                >
                    <div className="post-type-2">
                        <div className="img-block">
                            <a href="post.html">
                                <img
                                    src="images/home-3-330x220.jpg"
                                    width="330"
                                    height="220"
                                    alt=""
                                />
                            </a>
                            <ul className="tag-list">
                                <li>
                                    <a href="post.html">{section}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="caption">
                            <h5>
                                <a href="post.html">{title}</a>
                            </h5>
                            <p>{description}</p>
                            <div className="bottom-block">
                                <ul className="meta-list">
                                    <li>
                                        by <a href="post.html">{author}</a>
                                    </li>
                                    <li>
                                        <a href="post.html">{date}</a>
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
           
        );
    });
};
export default WorldSectionDetails;
