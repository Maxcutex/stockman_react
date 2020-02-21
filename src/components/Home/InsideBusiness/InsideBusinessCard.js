import React from 'react';
import { Link } from 'react-router-dom';
import InsideBusinessCardShareBlock from './InsideBusinessCardShareBlock';

export default function InsideBusinessCard({ insideBusiness }) {
    let image = insideBusiness.visual_inside_business.find(y => y.image_type==='size158x158');
    //{`${this.state.image1}`}
    return (
        <div className="cell-xs-6 cell-sm-12 cell-lg-6">
            <div className="post-type-3">
                <div className="unit unit-vertical unit-sm-horizontal">
                    <div className="unit__left">
                        <div className="img-block">
                            <a href="post.html">
                               
                                <img
                                    src={ image ? `${image.image_file}`: 'images/home-11-158x158.jpg'}
                                    width="158"
                                    height="158"
                                    alt=""
                                />
                            </a>
                            <ul className="tag-list">
                            {
                                insideBusiness.category_inside_business && insideBusiness.category_inside_business.map(category => (
                                <li key={category.section_category.id}>
                                <a href="/">{category.section_category.section_name}</a>
                                </li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                    <div className="unit__body">
                        <h5 className="title">
                            <Link to={`/content-page/insidebusiness/${insideBusiness.id}`}>{insideBusiness.title}</Link>
                        </h5>
                        <div className="bottom-block">
                            <ul className="meta-list">
                                <li>
                                    by <a href="/">{insideBusiness.author.first_name} {insideBusiness.author.last_name}</a>
                                </li>
                                <li>
                                    <a href="/">
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
