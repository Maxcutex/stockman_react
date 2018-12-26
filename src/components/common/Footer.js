import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="shell page-footer-default page-footer-type-1">
        <div class="range range-30 text-left">
          <div class="cell-xs-6 cell-lg-3">
            <h4 class="footer-title">Categories</h4>
            <ul class="list">
              <li>
                <a href="/">World</a>
              </li>
              <li>
                <a href="/">Economy</a>
              </li>
              <li>
                <a href="/">Politics & Policy</a>
              </li>
              <li>
                <a href="/">Business</a>
              </li>
              <li>
                <a href="/">Life</a>
              </li>
              <li>
                <a href="/">Markets</a>
              </li>
            </ul>
          </div>
          <div class="cell-xs-6 cell-lg-3">
            <h4 class="footer-title">Information</h4>
            <ul class="list">
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="/">Editorial Policy</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
              <li>
                <a href="typography.html">Typography</a>
              </li>
            </ul>
          </div>
          <div class="cell-xs-12 cell-sm-6 cell-lg-3">
            <h4 class="footer-title">Tags</h4>
            <ul class="tag-list-type-1">
              <li>
                <a href="post.html">World</a>
              </li>
              <li>
                <a href="post.html">Markets</a>
              </li>
              <li>
                <a href="post.html">Life</a>
              </li>
              <li>
                <a href="post.html">Business</a>
              </li>
              <li>
                <a href="post.html">Economy</a>
              </li>
            </ul>
          </div>
          <div class="cell-xs-12 cell-sm-6 cell-lg-3">
            <h4 class="footer-title">Newsletter</h4>
            <p class="text-italic">
              We will send you breaking news right to your inbox
            </p>
            <form
              class="rd-mailform text-left rd-mailform-inline"
              data-form-output="form-output-global"
              data-form-type="subscribe"
              method="post"
              action="bat/rd-mailform.php"
            >
              <div class="form-wrap">
                <label class="form-label text-italic" for="subscribe-email">
                  Your Email Here
                </label>
                <input
                  class="form-input"
                  id="subscribe-email"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                />
              </div>
              <button class="button button-primary" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="range range-center range-xs-30 range-sm-0 footer-bottom-section">
          <div class="cell-sm-6 text-sm-left">
            <a href="./">
              <img
                src="images/logo-dark-266x54.png"
                width="266"
                height="54"
                alt=""
              />
            </a>
            <p class="privacy">
              MoneyWise &#169; <span id="copyright-year" />.
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
          <div class="cell-sm-6 text-sm-right">
            <div class="soc-icon">
              <a class="icon fa-twitter" href="/" />
              <a class="icon fa-facebook-square" href="/" />
              <a class="icon fa-instagram" href="/" />
              <a class="icon fa-pinterest" href="/" />
              <a class="icon fa-youtube-play" href="/">
                {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
