import React from "react"
import OpinionShareBlock from "../OpinionShareBlock";


export default function OpinionSectionSideBarYouTubeSection() {
    return (
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
                        <OpinionShareBlock/>
                    </div>
                </div>
            </div>
        </div>
    )
}