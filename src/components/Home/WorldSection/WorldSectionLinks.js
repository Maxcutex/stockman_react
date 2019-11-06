import React from "react"
import {Link} from "react-router-dom";


export default function WorldSectionLinks({changeSection}) {
    return (
        <ul
            className="isotope-filters-list"
            id="isotope-filters"
        >
            <li>
                <Link
                    to=""
                    onClick={() =>
                        changeSection('World')
                    }
                >
                    World{' '}
                </Link>
            </li>
            <li>
                <Link
                    to=""
                    onClick={() =>
                        changeSection(
                            'Business'
                        )
                    }
                >
                    Business{' '}
                </Link>
            </li>
            <li>
                <Link
                    to=""
                    onClick={() =>
                        changeSection(
                            'Politics'
                        )
                    }
                >
                    Politics{' '}
                </Link>
            </li>
            <li>
                <a
                    data-isotope-filter="Category 4"
                    data-isotope-group="gallery"
                    href="/"
                >
                    Economy{' '}
                </a>
            </li>
            <li>
                <a
                    data-isotope-filter="Category 5"
                    data-isotope-group="gallery"
                    href="/"
                >
                    Markets{' '}
                </a>
            </li>
            <li>
                <a
                    data-isotope-filter="Category 6"
                    data-isotope-group="gallery"
                    href="/"
                >
                    Art{' '}
                </a>
            </li>
            <li>
                <a
                    data-isotope-filter="Category 7"
                    data-isotope-group="gallery"
                    href="/"
                >
                    Life{' '}
                </a>
            </li>
        </ul>
    )
}