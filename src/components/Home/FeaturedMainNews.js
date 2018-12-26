import React from "react";

export default () => {
  return (
    <div
      className="swiper-container swiper-slider swiper-slider-type-1"
      data-loop="false"
      data-autoplay="false"
      data-simulate-touch="false"
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="swiper-slide-caption">
            <div className="post-type-1 post-type-1-mode">
              <img
                src="images/slide-1-930x692.jpg"
                width="930"
                height="692"
                alt=""
              />
              <ul className="tag-list">
                <li>
                  <a href="post.html">Business</a>
                </li>
              </ul>
              <div className="caption">
                <h2 className="title">
                  <a href="post.html">
                    What does it take to{" "}
                    <br className="veil reveal-sm-inline" /> make a city smart?
                  </a>
                </h2>
                <ul className="meta-list">
                  <li>
                    by <a href="post.html">Jon Snow</a>
                  </li>
                  <li>
                    <a href="post.html">Aug 08, 2017</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="swiper-slide-caption">
            <div className="post-type-1 post-type-1-mode">
              <img
                src="images/slide-2-930x692.jpg"
                width="930"
                height="692"
                alt=""
              />
              <ul className="tag-list">
                <li>
                  <a href="post.html">Business</a>
                </li>
              </ul>
              <div className="caption">
                <h2 className="title">
                  <a href="post.html">
                    Carrier to keep jobs in Indiana{" "}
                    <br className="veil reveal-sm-inline" /> after Trump penalty
                    threats
                  </a>
                </h2>
                <ul className="meta-list">
                  <li>
                    by <a href="post.html">Jon Snow</a>
                  </li>
                  <li>
                    <a href="post.html">Aug 08, 2017</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="swiper-slide-caption">
            <div className="post-type-1 post-type-1-mode">
              <img
                src="images/slide-3-930x692.jpg"
                width="930"
                height="692"
                alt=""
              />
              <ul className="tag-list">
                <li>
                  <a href="post.html">Business</a>
                </li>
              </ul>
              <div className="caption">
                <h2 className="title">
                  <a href="post.html">
                    Toyota targets Tokyo Olympics{" "}
                    <br className="veil reveal-sm-inline" /> for new hydrogen
                    car launch
                  </a>
                </h2>
                <ul className="meta-list">
                  <li>
                    by <a href="post.html">Jon Snow</a>
                  </li>
                  <li>
                    <a href="post.html">Aug 08, 2017 </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
      <div className="swiper-button-prev fa-arrow-left" />
      <div className="swiper-button-next fa-arrow-right" />
    </div>
  );
};
