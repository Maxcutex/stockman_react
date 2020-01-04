import React from "react";
import HeaderContactList from "./HeaderContactList";
import HeaderNavbar from "./Navbar";

export default function HeaderDesktopMenu({search, showSearch, onChange}) {
    return (
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
                                    key={'desktop'}
                                />
                            </a>
                        </div>
                        <div
                            className="rd-navbar-collapse-toggle toggle-original"
                            data-rd-navbar-toggle=".rd-navbar-collapse"
                        >
                            <span />
                        </div>
                        <HeaderContactList/>
                    </div>
                    <HeaderNavbar
                        search={search}
                        showSearch={showSearch}
                        onChange={onChange}
                    />
                </div>
            </nav>
        </div>
    )
}