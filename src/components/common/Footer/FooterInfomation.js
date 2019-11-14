import React from 'react';



export default function FooterInformation() {
    return (
        <div className="cell-xs-6 cell-lg-3">
            <h4 className="footer-title">Information</h4>
            <ul className="list">
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="contacts.html">Contacts</a>
                </li>
                <li>
                    <a href="/">Editorial Policy</a>
                </li>
                <li>
                    <a href="/">Terms of Service</a>
                </li>
                <li>
                    <a href="typography.html">Typography</a>
                </li>
            </ul>
        </div>
    )
}