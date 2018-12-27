import React from "react";
import { Link } from "react-router-dom";

const WorldSectionDetails = () => {
  return (
    <div>
      <div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-3 isotope-item"
        data-filter="Category 1"
      >
        <div className="post-type-2">
          <div className="img-block">
            <a href="post.html">
              <img
                src="images/home-3-330x220.jpg"
                width="330"
                height="220"
                alt=""
              />
            </a>
            <ul className="tag-list">
              <li>
                <a href="post.html">World</a>
              </li>
            </ul>
          </div>
          <div className="caption">
            <h5>
              <a href="post.html">Pound enjoys respite as Brexit risk looms</a>
            </h5>
            <p>
              A surging US dollar on the foreign exchange market has encountered
              one obstacle — in the form of pound sterling.
            </p>
            <div className="bottom-block">
              <ul className="meta-list">
                <li>
                  by <a href="post.html">Jon Snow</a>
                </li>
                <li>
                  <a href="post.html">Aug 10, 2017 </a>
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
      </div>
    </div>
  );
};
export default WorldSectionDetails;
