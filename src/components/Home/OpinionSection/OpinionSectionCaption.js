import React from 'react'
import OpinionShareBlock from './OpinionShareBlock';
import { Link } from 'react-router-dom';


export default function OpinionSectionCaption({title, id, author, date}) {
    return (
        <div className="caption">
            <h4 className="title">
            <Link to={`/content-page/opinions/${id}`}>{title}</Link>
            </h4>
            <div className="bottom-block">
                <ul className="meta-list">
                    <li>
                        by <a href="/">{author.first_name} {author.last_name}</a>
                    </li>
                    <li>
                        <a href="/">{date} </a>
                    </li>
                </ul>
                <OpinionShareBlock/>
            </div>
        </div>
    )
}
