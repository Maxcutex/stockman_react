import React from 'react';
import InsideBusinessCardShareBlock from './InsideBusinessCardShareBlock';

export default function InsideBusinessCard({ insideBusiness }) {
    return (
        <div className="cell-xs-6 cell-sm-12 cell-lg-6">
            <div className="post-type-3">
                <div className="unit unit-vertical unit-sm-horizontal">
                    <div className="unit__left">
                        <div className="img-block">
                            <a href="post.html">
                                <img
                                    src="images/home-11-158x158.jpg"
                                    width="158"
                                    height="158"
                                    alt=""
                                />
                            </a>
                            <ul className="tag-list">
                                <li>
                                    <a href="post.html">Economy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="unit__body">
                        <h5 className="title">
                            <a href="post.html">{insideBusiness.title}</a>
                        </h5>
                        <div className="bottom-block">
                            <ul className="meta-list">
                                <li>
                                    by <a href="post.html">Jon Snow</a>
                                </li>
                                <li>
                                    <a href="post.html">
                                        {insideBusiness.entry_date}{' '}
                                    </a>
                                </li>
                            </ul>
                            <InsideBusinessCardShareBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
