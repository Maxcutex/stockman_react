import React from 'react';
import { Link } from 'react-router-dom';

const NewsSearchResult = ({ searchResults, stocksResults }) => (
  <div className="rd-search-results-live" id="rd-search-results-live">
    <div id="search-results" className="active">
      {
        stocksResults && (
          <>
          <div className="search-quick-result">QUOTES</div>
          <ol className="search_list">
            {
              stocksResults.map(result => (
                <li className="result-item" key={result.id}>
                  <h3 className="search_title">
                    <Link to={`/quote-page/${result.stock_code}`} className='search_link'>{result.stock_code}</Link>
                  </h3>
                </li>
              ))
            }
          </ol>
          </>
        )
      } 
      <div className="search-quick-result">NEWS Results</div>
      <ol className="search_list">
        {
          searchResults.map(result => (
            <li className="result-item" key={result.id}>
              <h3 className="search_title">
                <Link to={`/content-page/news/${result.id}`}  className='search_link'>{result.title}</Link>
              </h3>
            </li>
          ))
        }
      </ol>
    </div>
  </div>
);

export default NewsSearchResult;
