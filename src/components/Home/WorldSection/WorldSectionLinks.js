import React from 'react';
import { Link } from 'react-router-dom';

export default function WorldSectionLinks({ changeSection }) {
    return (
        <ul className="isotope-filters-list" id="isotope-filters">
            <li>
                <Link to="" onClick={() => changeSection('World')}>
                    World{' '}
                </Link>
            </li>
            <li>
                <Link to="" onClick={() => changeSection('Business')}>
                    Business{' '}
                </Link>
            </li>
            <li>
                <Link to="" onClick={() => changeSection('Politics')}>
                    Politics{' '}
                </Link>
            </li>
            <li>
                <Link to="" onClick={() => changeSection('Economy')}>
                    Economy{' '}
                </Link>
               
            </li>
            <li>
                <Link to="" onClick={() => changeSection('Markets')}>
                    Markets{' '}
                </Link>
            </li>
            <li>
                <Link to="" onClick={() => changeSection('Art')}>
                    Art{' '}
                </Link>
            </li>
            <li>
                <Link to="" onClick={() => changeSection('Life')}>
                    Life{' '}
                </Link>
            </li>
        </ul>
    );
}
