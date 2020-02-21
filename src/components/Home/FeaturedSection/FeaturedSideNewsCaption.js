import React from 'react'
import { Link } from 'react-router-dom';
import FeaturedNewsShareBlock from './FeaturedNewShareBlock';


export default function FeaturedSideNewsCaption({title, author, id}) {
    return (
        <div className="caption">
            <h4 className="title">
                <Link to={`/content-page/news/${id}`}>{title}</Link>
            </h4>
            <div className="bottom-block">
                <ul className="meta-list">
                    <li>
                        by <a href="/">{author.first_name} </a>
                    </li>
                    <li>
                        <a href="/">Aug 08, 2017 </a>
                    </li>
                </ul>
                <FeaturedNewsShareBlock/>
            </div>
        </div>
    )
}
