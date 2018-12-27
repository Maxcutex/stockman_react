import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="page-header header-home-1">
      <div className="rd-navbar-wrap" style={{ height: "176px" }}>
        <nav className="rd-navbar rd-navbar-default rd-navbar-fullwidth ">
          <div className="rd-navbar-inner ">
            <div className="rd-navbar-panel">
              <div className="rd-navbar-brand" style={{ float: "left" }}>
                <a className="brand-name" href="/index.html">
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
              <div style={{ marginRight: "0" }}>
                <div className="rd-navbar-top-panel rd-navbar-collapse toggle-original-elements">
                  <div className="rd-navbar-top-panel-inner">
                    <ul className="contact-list">
                      <li>
                        <a href="/">Subscribe Now</a>
                      </li>
                      <li>
                        <a data-toggle="modal" href="#myModal">
                          Sign In{" "}
                        </a>
                      </li>
                      <li>
                        <a href="contacts.html">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="menu-top-header" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
