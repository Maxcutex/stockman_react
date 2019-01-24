import React from 'react';
// import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="page-header header-home-1">
            <div
                key={'mobile'}
                className="rd-navbar-wrap mobile-menu"
                style={{ height: '0px' }}
            >
                <nav
                    className="rd-navbar rd-navbar-default rd-navbar-original rd-navbar-fixed"
                    data-layout="rd-navbar-fixed"
                    data-sm-layout="rd-navbar-fixed"
                    data-md-layout="rd-navbar-fullwidth"
                    data-md-device-layout="rd-navbar-fullwidth"
                    data-lg-layout="rd-navbar-fullwidth"
                    data-lg-device-layout="rd-navbar-fullwidth"
                    data-md-stick-up-offset="180px"
                    data-lg-stick-up-offset="180px"
                    data-stick-up="true"
                    data-sm-stick-up="true"
                    data-md-stick-up="true"
                    data-lg-stick-up="true"
                >
                    <div className="rd-navbar-inner">
                        <div className="rd-navbar-panel">
                            <button
                                className="rd-navbar-toggle toggle-original"
                                data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                            >
                                <span />
                            </button>
                            <div className="rd-navbar-brand">
                                <a className="brand-name" href="index.html">
                                    <img
                                        src="images/logo-dark-266x54.png"
                                        width="266"
                                        height="54"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div
                                className="rd-navbar-collapse-toggle toggle-original"
                                data-rd-navbar-toggle=".rd-navbar-collapse"
                            >
                                <span />
                            </div>
                            <div className="rd-navbar-top-panel rd-navbar-collapse toggle-original-elements">
                                <div className="rd-navbar-top-panel-inner">
                                    <ul className="contact-list">
                                        <li>
                                            <a href="#">Subscribe Now</a>
                                        </li>
                                        <li>
                                            <a
                                                data-toggle="modal"
                                                href="#myModal"
                                            >
                                                Sign In{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contacts.html">Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div
                className="rd-navbar-wrap desktop-menu"
                style={{ height: '176px' }}
            >
                <nav
                    className="rd-navbar rd-navbar-default rd-navbar-original rd-navbar-fullwidth"
                    data-layout="rd-navbar-fixed"
                    data-sm-layout="rd-navbar-fixed"
                    data-md-layout="rd-navbar-fullwidth"
                    data-md-device-layout="rd-navbar-fullwidth"
                    data-lg-layout="rd-navbar-fullwidth"
                    data-lg-device-layout="rd-navbar-fullwidth"
                    data-md-stick-up-offset="180px"
                    data-lg-stick-up-offset="180px"
                    data-stick-up="true"
                    data-sm-stick-up="true"
                    data-md-stick-up="true"
                    data-lg-stick-up="true"
                >
                    <div className="rd-navbar-inner">
                        <div className="rd-navbar-panel">
                            <button
                                className="rd-navbar-toggle toggle-original"
                                data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                            >
                                <span />
                            </button>
                            <div className="rd-navbar-brand">
                                <a className="brand-name" href="index.html">
                                    <img
                                        src="images/logo-dark-266x54.png"
                                        width="266"
                                        height="54"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div
                                className="rd-navbar-collapse-toggle toggle-original"
                                data-rd-navbar-toggle=".rd-navbar-collapse"
                            >
                                <span />
                            </div>
                            <div className="rd-navbar-top-panel rd-navbar-collapse toggle-original-elements">
                                <div className="rd-navbar-top-panel-inner">
                                    <ul className="contact-list">
                                        <li>
                                            <a href="#">Subscribe Now</a>
                                        </li>
                                        <li>
                                            <a
                                                data-toggle="modal"
                                                href="#myModal"
                                            >
                                                Sign In{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contacts.html">Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="rd-navbar-aside-right">
                            <div className="rd-navbar-nav-wrap toggle-original-elements">
                                <ul className="rd-navbar-nav">
                                    <li className="active rd-navbar--has-dropdown rd-navbar-submenu">
                                        <a href="./">Home</a>
                                        <span className="rd-navbar-submenu-toggle" />
                                        <ul
                                            className="rd-navbar-dropdown rd-navbar-open-right"
                                            style={{}}
                                        >
                                            <li>
                                                <a href="home-2.html">Home 2</a>
                                            </li>
                                            <li>
                                                <a href="home-3.html">Home 3</a>
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
                                        <a href="contacts.html">Contacts </a>
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
                                                <a href="forms.html">Forms</a>
                                            </li>
                                            <li>
                                                <a href="tables.html">Tables</a>
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
                                        <label
                                            className="form-label form-label rd-input-label"
                                            htmlFor="rd-navbar-search-form-input"
                                        >
                                            I`m looking for...
                                        </label>
                                        <input
                                            className="rd-navbar-search-form-input form-input"
                                            id="rd-navbar-search-form-input"
                                            type="text"
                                            name="s"
                                            autoComplete="off"
                                        />
                                        <div
                                            className="rd-search-results-live"
                                            id="rd-search-results-live"
                                        />
                                    </div>
                                    <button className="rd-search-form-submit fa-search" />
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
