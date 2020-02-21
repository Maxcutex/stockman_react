import React from 'react';
import { Link } from 'react-router-dom';

export default function WorldSectionLinks({ changeSection,showInMobileForm }) {
    let menuListClass = ['isotope-filters-list'];
    if (showInMobileForm) {
        menuListClass.push('active');
      }
    return (
        <ul className={menuListClass.join(' ')} id="isotope-filters">
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
