import React from "react"

export default function FooterNewsLetter() {
    return (
        <div className="cell-xs-12 cell-sm-6 cell-lg-3">
            <h4 className="footer-title">Newsletter</h4>
            <p className="text-italic">
                We will send you breaking news right to your inbox
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
                        className="form-label text-italic"
                        htmlFor="subscribe-email"
                    >
                        Your Email Here
                    </label>
                    <input
                        className="form-input"
                        id="subscribe-email"
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
        </div>
    )
}