import React from "react";

export default function HeaderContactList() {
    return (
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
                        <a href="contacts.html">
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}