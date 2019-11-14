import React from "react"
import FeaturedNewsShareBlock from "./FeaturedNewShareBlock";


export default function FeaturedSideNewsCaption({title, author}) {
    return (
        <div className="caption">
            <h4 className="title">
                <a href="post.html">{title}</a>
            </h4>
            <div className="bottom-block">
                <ul className="meta-list">
                    <li>
                        by <a href="post.html">{author.first_name} </a>
                    </li>
                    <li>
                        <a href="post.html">Aug 08, 2017 </a>
                    </li>
                </ul>
                <FeaturedNewsShareBlock/>
            </div>
        </div>
    )
}
