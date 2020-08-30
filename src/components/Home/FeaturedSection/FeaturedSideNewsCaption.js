import React from 'react'
import { Link } from 'react-router-dom';
import FeaturedNewsShareBlock from './FeaturedNewShareBlock';


export default function FeaturedSideNewsCaption({title, author, id, news_date}) {
    var mydate = new Date(news_date);
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
    <a href="/">{'  ' + mydate.toDateString()} </a>
                    </li>
                </ul>
                <FeaturedNewsShareBlock/>
            </div>
        </div>
    )
}
