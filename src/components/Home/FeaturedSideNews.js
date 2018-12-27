import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="post-type-1">
      <img src="images/home-1-450x330.jpg" width="450" height="330" alt="" />
      <ul className="tag-list">
        <li>
          <a href="post.html">Money</a>
        </li>
        <li>
          <a href="post.html">Life</a>
        </li>
      </ul>
      <div className="caption">
        <h4 className="title">
          <a href="post.html">
            Dollar and bond yields rise as US growth hits 2-year high
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
          <div className="share-block">
            <div className="soc-icon">
              <Link className="icon fa-twitter" to="/">
                {" "}
              </Link>
              <Link className="icon fa-facebook" to="/" />
              <Link className="icon fa-google-plus" to="/" />
              <Link className="icon fa-youtube-play" to="/" />
            </div>
            <span className="icon fa-share-alt" />
          </div>
        </div>
      </div>
    </div>
  );
};
