import React from 'react';
import { Link } from 'react-router-dom';

export default function WorldSectionLinks({ changeSection }) {
    return (
        <ul className="isotope-filters-list" id="isotope-filters">
            <li>
                <Link to="#" onClick={(e) => changeSection(e, 'World')}>
                    World{' '}
                </Link>
            </li>
            <li>
                <Link to="#" onClick={(e) => changeSection(e, 'Business')}>
                    Business{' '}
                </Link>
            </li>
            <li>
                <Link to="#" onClick={(e) => changeSection(e, 'Politics')}>
                    Politics{' '}
                </Link>
            </li>
            <li>
                <Link to="#" onClick={(e) => changeSection(e, 'Economy')}>
                    Economy{' '}
                </Link>
               
            </li>
            <li>
                <Link to="#" onClick={(e) => changeSection(e, 'Markets')}>
                    Markets{' '}
                </Link>
            </li>
            <li>
                <Link to="#" onClick={(e) => changeSection(e, 'Art')}>
                    Art{' '}
                </Link>
            </li>
            <li>
                <Link to="#" onClick={(e) => changeSection(e, 'Life')}>
                    Life{' '}
                </Link>
            </li>
        </ul>
    );
}
