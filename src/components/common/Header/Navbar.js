import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderNavbar({ search, showSearch, onChange }) {
    return (
        <div className="rd-navbar-aside-right">
            <div className="rd-navbar-nav-wrap toggle-original-elements">
                <ul className="rd-navbar-nav">
                    <li className="active rd-navbar--has-dropdown rd-navbar-submenu">
                        <Link to="/">Home</Link>
                        <span className="rd-navbar-submenu-toggle" />
                        <ul
                            className="rd-navbar-dropdown rd-navbar-open-right"
                            style={{}}
                        >
                            <li>
                                <Link to="/">Home 2</Link>
                            </li>
                            <li>
                                <Link to="/">Home 3</Link>
                            </li>
                            <li>
                                <Link to="#">Landing</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                        <Link to="#">Home</Link>
                        <span className="rd-navbar-submenu-toggle" />
                        <ul
                            className="rd-navbar-dropdown rd-navbar-open-right"
                            style={{}}
                        >
                            <li>
                                <Link to="#">Post</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="contacts.html">Contacts </a>
                    </li>
                    <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                        <Link to="#">Pages</Link>
                        <span className="rd-navbar-submenu-toggle" />
                        <ul
                            className="rd-navbar-dropdown rd-navbar-open-right"
                            style={{}}
                        >
                            <li>
                                <a href="typography.html">Typography</a>
                            </li>
                            <li>
                                <Link to="#">Tabs and accordions</Link>
                            </li>
                            <li>
                                <Link to="#">Progress Bars</Link>
                            </li>
                            <li>
                                <Link to="#">Forms</Link>
                            </li>
                            <li>
                                <Link to="#">Tables</Link>
                            </li>
                            <li>
                                <Link to="#">Grid</Link>
                            </li>
                            <li>
                                <Link to="#">Buttons</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="rd-navbar-search toggle-original-elements">
                <Link
                    to="#"
                    className="rd-navbar-search-toggle toggle-original"
                    data-rd-navbar-toggle=".rd-navbar-search"
                >
                    Pages
                </Link>
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
                        {showSearch && search.length > 0 && (
                            <div
                                className="rd-search-results-live"
                                id="rd-search-results-live"
                            >
                                <h5>Quick Search</h5>
                                <p>No result to display</p>
                            </div>
                        )}
                    </div>
                    <button className="rd-search-form-submit fa-search" />
                </form>
            </div>
        </div>
    );
}
