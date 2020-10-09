import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NewsSearchResult = ({
    searchResults,
    stocksResults,
    toggleSearchDropdown,
}) => {
    const containerRef = useRef(null);

    const onClick = e => {
        toggleSearchDropdown();
    };

    const onClickOut = e => {
        if (containerRef.current &&  !containerRef.current.contains(e.target)) {
            toggleSearchDropdown();
        }
    };

    useEffect(() => {
      document.addEventListener('click', onClickOut)
      return () => {
        document.removeEventListener('click', onClickOut)
      }
    }, [])

    return (
        <div
            ref={containerRef}
            className="rd-search-results-live"
            id="rd-search-results-live"
            
        >
            <div id="search-results" className="active">
                {stocksResults.length > 0 && (
                    <>
                        <div className="search-quick-result">QUOTES</div>
                        <ol className="search_list">
                            {stocksResults.map(result => (
                                <li className="result-item" key={result.id}>
                                    <h3 className="search_title">
                                        <Link
                                            onClick={onClick}
                                            to={`/quote-page/${result.stock_code}`}
                                            className="search_link"
                                        >
                                            {result.stock_code}
                                        </Link>
                                    </h3>
                                </li>
                            ))}
                        </ol>
                    </>
                )}
                {searchResults.length > 0 && (
                    <>
                        <div className="search-quick-result">NEWS Results</div>
                        <ol className="search_list">
                            {searchResults.map(result => (
                                <li className="result-item" key={result.id}>
                                    <h3 className="search_title">
                                        <Link
                                            onClick={onClick}
                                            to={`/content-page/news/${result.id}`}
                                            className="search_link"
                                        >
                                            {result.title}
                                        </Link>
                                    </h3>
                                </li>
                            ))}
                        </ol>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewsSearchResult;
