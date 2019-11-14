import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContactList from './HeaderContactList';
import HeaderSearchDiv from './HeaderSearchDiv';

export default function HeaderMobileMenu({
    buttonClass,
    menuClass,
    searchLinkClass,
    search,
    showMobileSearch,
    onChange,
    searchDivClass,
    showMenu,
}) {
    return (
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
                            className={buttonClass.join(' ')}
                            data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                            onClick={showMenu}
                        >
                            <span />
                        </button>
                        <div className="rd-navbar-brand">
                            <Link className="brand-name" to="/">
                                <img
                                    src="images/logo-dark-266x54.png"
                                    width="266"
                                    height="54"
                                    alt=""
                                    key={'mobile'}
                                />
                            </Link>
                        </div>
                        <div
                            className="rd-navbar-collapse-toggle toggle-original"
                            data-rd-navbar-toggle=".rd-navbar-collapse"
                        >
                            <span />
                        </div>
                        <HeaderContactList />
                    </div>
                    <div className="rd-navbar-aside-right">
                        <div className={menuClass.join(' ')}>
                            <ul className="rd-navbar-nav">
                                <li className="active rd-navbar--has-dropdown rd-navbar-submenu">
                                    <Link to="/">Home</Link>
                                    <span className="rd-navbar-submenu-toggle" />
                                    <ul
                                        className="rd-navbar-dropdown rd-navbar-open-right"
                                        style={{}}
                                    >
                                        <li>
                                            <Link to="#">Homen2</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Home 3</Link>
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
                                    <Link to="#">World</Link>
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
                                    <Link to="#">Contacts</Link>
                                </li>
                                <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                                    <Link to="#">Pages</Link>
                                    <span className="rd-navbar-submenu-toggle" />
                                    <ul
                                        className="rd-navbar-dropdown rd-navbar-open-right"
                                        style={{}}
                                    >
                                        <li>
                                            <Link to="#">Topography</Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                Tabs and accordions
                                            </Link>
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
                        <HeaderSearchDiv
                            searchLinkClass={searchLinkClass}
                            search={search}
                            showMobileSearch={showMobileSearch}
                            onChange={onChange}
                            searchDivClass={searchDivClass}
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
}
