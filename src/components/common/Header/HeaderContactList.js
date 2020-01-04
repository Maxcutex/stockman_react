import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderContactList() {
    return (
        <div className="rd-navbar-top-panel rd-navbar-collapse toggle-original-elements">
            <div className="rd-navbar-top-panel-inner">
                <ul className="contact-list">
                    <li>
                        <Link to="#">Subscribe Now</Link>
                    </li>
                    <li>
                        <Link data-toggle="modal" to="#myModal">
                            Sign In{' '}
                        </Link>
                    </li>
                    <li>
                        <Link to="#">Contacts</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
