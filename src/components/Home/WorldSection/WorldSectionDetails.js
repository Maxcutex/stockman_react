import React from 'react';
import WorldSectionShareBlock from './WorldSectionShareBlock';
import image from '../../../assets/images/home-3-330x220.jpg';

const WorldSectionDetails = props => {
    return props.activeNews.map(activeNew => {
        const {
            section,
            title,
            description,
            author: { first_name, last_name },
            date,
            id,
            visual_news,
        } = activeNew;
        return (
            <div
                className="col-xs-12 col-sm-6 col-md-4 col-lg-3 isotope-item"
                data-filter={section}
                key={id}
            >
                <div className="post-type-2">
                    <div className="img-block">
                        <a href="post.html">
                            <img
                                // src={visual_news[0].image_file || image}
                                src={image}
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
                                    by{' '}
                                    <a href="post.html">{`${first_name} ${last_name}`}</a>
                                </li>
                                <li>
                                    <a href="post.html">{date}</a>
                                </li>
                            </ul>
                            <WorldSectionShareBlock />
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};
export default WorldSectionDetails;
