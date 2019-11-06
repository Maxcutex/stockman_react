import React from "react"


export default function HeaderNavbar({search, showSearch, onChange}) {
    return (
        <div className="rd-navbar-aside-right">
            <div className="rd-navbar-nav-wrap toggle-original-elements">
                <ul className="rd-navbar-nav">
                    <li className="active rd-navbar--has-dropdown rd-navbar-submenu">
                        <a href="..">Home</a>
                        <span className="rd-navbar-submenu-toggle" />
                        <ul
                            className="rd-navbar-dropdown rd-navbar-open-right"
                            style={{}}
                        >
                            <li>
                                <a href="home-2.html">
                                    Home 2
                                </a>
                            </li>
                            <li>
                                <a href="home-3.html">
                                    Home 3
                                </a>
                            </li>
                            <li>
                                <a href="landing.html">
                                    Landing{' '}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                        <a href="world.html">World</a>
                        <span className="rd-navbar-submenu-toggle" />
                        <ul
                            className="rd-navbar-dropdown rd-navbar-open-right"
                            style={{}}
                        >
                            <li>
                                <a href="post.html">Post</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="contacts.html">
                            Contacts{' '}
                        </a>
                    </li>
                    <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                        <a href="#">Pages</a>
                        <span className="rd-navbar-submenu-toggle" />
                        <ul
                            className="rd-navbar-dropdown rd-navbar-open-right"
                            style={{}}
                        >
                            <li>
                                <a href="typography.html">
                                    Typography
                                </a>
                            </li>
                            <li>
                                <a href="tabs-and-accordions.html">
                                    Tabs and accordions
                                </a>
                            </li>
                            <li>
                                <a href="progress-bars.html">
                                    Progress Bars
                                </a>
                            </li>
                            <li>
                                <a href="forms.html">
                                    Forms
                                </a>
                            </li>
                            <li>
                                <a href="tables.html">
                                    Tables
                                </a>
                            </li>
                            <li>
                                <a href="grid.html">Grid</a>
                            </li>
                            <li>
                                <a href="buttons.html">
                                    Buttons
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="rd-navbar-search toggle-original-elements">
                <a
                    className="rd-navbar-search-toggle toggle-original"
                    data-rd-navbar-toggle=".rd-navbar-search"
                    href="#"
                >
                    <span />
                </a>
                <form
                    className="rd-search"
                    action="search-results.html"
                    data-search-live="rd-search-results-live"
                    method="GET"
                >
                    <div className="form-wrap">
                        <input
                            className="rd-navbar-search-form-input form-input"
                            id="rd-navbar-search-form-input"
                            type="text"
                            name="search"
                            value={search}
                            onChange={onChange}
                            placeholder=" I`m looking for..."
                            autoComplete="off"
                        />
                        {showSearch &&
                        search.length >
                        0 && (
                            <div
                                className="rd-search-results-live"
                                id="rd-search-results-live"
                            >
                                <h5>Quick Search</h5>
                                <p>
                                    No result to display
                                </p>
                            </div>
                        )}
                    </div>
                    <button className="rd-search-form-submit fa-search" />
                </form>
            </div>
        </div>
    )
}