import React from 'react';
import { Link } from 'react-router-dom';
import ShowSearchResults from '../NewsSearchResult';
const DesktopHeader = ({buttonClass, menuClass,searchDivClass, searchLinkClass, 
    showMenu,showMobileSearch, stateSearch, onChange,newsSearchedFor,stocksSearchedFor, showSearch, toggleSearchDropdown}) => {
    return ( 
        <div
          className='rd-navbar-wrap desktop-menu'
          style={{ height: '176px' }}
        >
          <nav
            className='rd-navbar rd-navbar-default rd-navbar-original rd-navbar-fullwidth'
              data-layout='rd-navbar-fixed'
              data-sm-layout='rd-navbar-fixed'
              data-md-layout='rd-navbar-fullwidth'
              data-md-device-layout='rd-navbar-fullwidth'
              data-lg-layout='rd-navbar-fullwidth'
              data-lg-device-layout='rd-navbar-fullwidth'
              data-md-stick-up-offset='180px'
              data-lg-stick-up-offset='180px'
              data-stick-up='true'
              data-sm-stick-up='true'
              data-md-stick-up='true'
              data-lg-stick-up='true'
          >
            <div className='rd-navbar-inner'>
              <div className='rd-navbar-panel'>
                      <button
                          className='rd-navbar-toggle toggle-original'
                          data-rd-navbar-toggle='.rd-navbar-nav-wrap'
                      >
                          <span />
                      </button>
                      <div className='rd-navbar-brand'>
                          <a className='brand-name' href='index.html'>
                              <img
                                  src='/images/STOCKMAN-WEB-LOGO.png'
                                  width='266'
                                  height='54'
                                  alt=''
                                  key={'desktop'}
                              />
                          </a>
                      </div>
                      <div
                          className='rd-navbar-collapse-toggle toggle-original'
                          data-rd-navbar-toggle='.rd-navbar-collapse'
                      >
                          <span />
                      </div>
                      <div className='rd-navbar-top-panel rd-navbar-collapse toggle-original-elements'>
                          <div className='rd-navbar-top-panel-inner'>
                              <ul className='contact-list'>
                                  <li>
                                      <a href='/'>Subscribe Now</a>
                                  </li>
                                  <li>
                                      <a
                                          data-toggle='modal'
                                          href='#myModal'
                                      >
                                          Sign In{' '}
                                      </a>
                                  </li>
                                  <li>
                                      <a href='contacts.html'>
                                          Contacts
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              <div className='rd-navbar-aside-right'>
                <div className='rd-navbar-nav-wrap toggle-original-elements'>
                  <ul className='rd-navbar-nav'>
                    <li className='active  rd-navbar-submenu'>
                      <a href='/'>News</a>
                      <span className='rd-navbar-submenu-toggle' />
                     
                    </li>
                    <li>
                      <a href='about.html'>Brokers</a>
                    </li>
                    <li className='rd-navbar--has-dropdown rd-navbar-submenu'>
                                      <Link to='/pricelist'>Market Data</Link>
                                    <span className='rd-navbar-submenu-toggle' />
                                    <ul
                                        className='rd-navbar-dropdown rd-navbar-open-right'
                                        style={{}}
                                    >
                                        <li>
                                            <Link to='/pricelist'>Price List</Link>
                                        </li>
                                        <li>
                                            <Link to='/market_price_analysis'>Price Analysis</Link>
                                        </li>
                                        <li>
                                            <Link to='/daily_market_summary'>Daily Market Summary</Link>
                                        </li>
                                      
                                    </ul>
                                </li>
                                <li className='rd-navbar--has-dropdown rd-navbar-submenu'>
                                      <Link to='/pricelist'>Analytics</Link>
                                    <span className='rd-navbar-submenu-toggle' 
                                    />
                                    <ul
                                        className='rd-navbar-dropdown rd-navbar-open-right'
                                        style={{}}
                                    >
                                        <li>
                                            <Link to='/pricemovement'>Trend Analytics</Link>
                                        </li>
                                        <li>
                                            <Link to='/asi_movement'>ASI Movement</Link>
                                        </li>
                                        <li>
                                            <Link to='/asi_vs_stocks'>ASI vs Stocks</Link>
                                        </li>
                                        <li>
                                            <Link to='/screen_stock'>Screened Stock</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='active rd-navbar-submenu'>
                                    <a href='https://stockmanacademy.com.ng/member.php?action=register' target='_blank'>Market Forum</a>
                                    
                                </li>
                                <li className='active rd-navbar-submenu'>
                                    <a href='https://stockmancooperative.com/register/' target='_blank'>Investor's Club</a>
                                    
                                </li>
                       </ul>
                </div>
                <div className='rd-navbar-search toggle-original-elements'>
                  <a
                    className='rd-navbar-search-toggle toggle-original'
                    data-rd-navbar-toggle='.rd-navbar-search'
                    href='/'
                  >
                    <span />
                  </a>
                  <form
                    className='rd-search'
                    action='search-results.html'
                    data-search-live='rd-search-results-live'
                    method='GET'
                  >
                    <div className='form-wrap'>
                      <input
                        className='rd-navbar-search-form-input form-input'
                        id='rd-navbar-search-form-input'
                        type='text'
                        name='search'
                        value={stateSearch}
                        onChange={onChange}
                        placeholder=' I`m looking for...'
                        autoComplete='off'
                      />
                      {showSearch && (newsSearchedFor.length || stocksSearchedFor.length)
                        ? (
                          <ShowSearchResults
                            searchResults={newsSearchedFor}
                            stocksResults={stocksSearchedFor}
                            toggleSearchDropdown={toggleSearchDropdown}
                          />
                        ) : null
                      }
                      {showSearch && (!newsSearchedFor.length && !stocksSearchedFor.length )? (
                        <div
                          className='rd-search-results-live'
                          id='rd-search-results-live'
                        >
                          <h5>Quick Search</h5>
                          <p>
                            No result to display
                          </p>
                        </div>
                      ) : null
                      }
                    </div>
                    <button className='rd-search-form-submit fa-search' />
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
     );
}
 
export default DesktopHeader;