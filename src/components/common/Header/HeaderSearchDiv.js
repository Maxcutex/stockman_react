import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderSearchDiv({
    searchDivClass,
    searchLinkClass,
    showMobileSearch,
    onChange,
    search,
}) {
    return (
        <div className={searchDivClass.join(' ')}>
            <Link
                className={searchLinkClass.join(' ')}
                data-rd-navbar-toggle=".rd-navbar-search"
                to="#"
                onClick={showMobileSearch}
            >
                <span />
            </Link>
            <form
                className="rd-search"
                action="search-results.html"
                data-search-live="rd-search-results-live"
                method="GET"
            >
                <div className="form-wrap">
                    <input
                        className="rd-navbar-search-form-input form-input"
                        id="rd-navbar-search-form-input"
                        type="text"
                        name="search"
                        value={search}
                        onChange={onChange}
                        onFocus={e => (e.target.placeholder = '')}
                        onBlur={e =>
                            (e.target.placeholder = ' I`m looking for...')
                        }
                        placeholder=" I`m looking for..."
                        autoComplete="off"
                    />
                </div>
                <button className="rd-search-form-submit fa-search" />
            </form>
        </div>
    );
}
