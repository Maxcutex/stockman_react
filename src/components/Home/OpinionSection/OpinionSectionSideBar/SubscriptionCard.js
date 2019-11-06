import React from "react"
import {Link} from "react-router-dom";



export default function OpinionSectionSideBarSubscriptionCard() {
    return (
        <div className="cell-sm-6 cell-md-12">
            <div className="sidebar-form-block">
                <h3>
                    Get latest market news delivered
                    daily!
                </h3>
                <p>
                    We will send you breaking news right
                    to your inbox
                </p>
                <form
                    className="rd-mailform text-left rd-mailform-inline"
                    data-form-output="form-output-global"
                    data-form-type="subscribe"
                    method="post"
                    action="bat/rd-mailform.php"
                >
                    <div className="form-wrap">
                        <label
                            className="form-label"
                            htmlFor="contact-email"
                        >
                            Your Email Here
                        </label>
                        <input
                            className="form-input"
                            id="contact-email"
                            type="email"
                            name="email"
                            data-constraints="@Email @Required"
                        />
                    </div>
                    <button
                        className="button button-primary"
                        type="submit"
                    >
                        Subscribe
                    </button>
                </form>
                <div className="section-subscribe">
                    <h3>Follow us</h3>
                    <p>
                        Read our latest news on any of
                        these social networks!
                    </p>
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
                </div>
            </div>
        </div>
    )
}