import React from "react"



export default function InsideBusinessFooter() {
    return (
        <div className="range text-left">
            <div className="cell-xs-12">
                <ul className="pagination-custom">
                    <li className="active">
                        <a href="/">1</a>
                    </li>
                    <li>
                        <a href="/">2</a>
                    </li>
                    <li>
                        <a href="/">3</a>
                    </li>
                    <li className="dot">...</li>
                    <li>
                        <a href="/">42</a>
                    </li>
                    <li>
                        <a href="/">Next Page</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
