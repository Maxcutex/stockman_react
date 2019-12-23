import React from 'react';

const NewsSearchResult = ({ searchResults, stocksResults }) => (
  <div className="rd-search-results-live" id="rd-search-results-live">
    <div id="search-results" className="active">
      {
        stocksResults && (
          <>
          <div className="search-quick-result">Stock Search Results</div>
          <ol className="search_list">
            {
              stocksResults.map(result => (
                <li className="result-item" key={result.id}>
                  <h3 className="search_title">
                    <a target="_top" href="grid.html" className="search_link">
                      {result.title}
                    </a>
                  </h3>
                </li>
              ))
            }
          </ol>
          </>
        )
      } 
      <div className="search-quick-result">News Search Results</div>
      <ol className="search_list">
        {
          searchResults.map(result => (
            <li className="result-item" key={result.id}>
              <h3 className="search_title">
                <a target="_top" href="grid.html" className="search_link">
                  {result.title}
                </a>
              </h3>
            </li>
          ))
        }
      </ol>
    </div>
  </div>
);

export default NewsSearchResult;
