import React from "react"
import OpinionShareBlock from "./OpinionShareBlock";



export default function OpinionSectionCaption() {
    return (
        <div className="caption">
            <h4 className="title">
                <a href="post.html">
                    European equities a global laggard on
                    political risk
                </a>
            </h4>
            <div className="bottom-block">
                <ul className="meta-list">
                    <li>
                        by <a href="post.html">Jon Snow</a>
                    </li>
                    <li>
                        <a href="post.html">Aug 08, 2017 </a>
                    </li>
                </ul>
                <OpinionShareBlock/>
            </div>
        </div>
    )
}
