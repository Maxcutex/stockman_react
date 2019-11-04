import React from "react"
import {Link} from "react-router-dom";


export default function InsideBusinessCardShareBlock () {
    return (
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
    )
}
