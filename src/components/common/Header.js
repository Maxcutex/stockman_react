import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { connect } from 'react-redux';
import ShowSearchResults from '../NewsSearchResult';
import { searchNewsAndStocks } from '../../actions/searchAction';

export class Header extends Component {
  state = {
    search: '',
    showSearch: false,
    showMobileSearch: false,
    showMenu: false,
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, async () => {
      const { search } = this.state;
      if (search.length > 2) {
        const { startSearch } = this.props;
        this.setState({ showSearch: true });
        await startSearch(search);
      }
    });
  };

  showMenu = e => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  showMobileSearch = e => {
    this.setState({ showMobileSearch: !this.state.showMobileSearch });
  };

  render() {
    let menuClass = ['rd-navbar-nav-wrap', 'toggle-original-elements'];
    let buttonClass = ['rd-navbar-toggle', 'toggle-original'];
    let searchDivClass = ['rd-navbar-search', 'toggle-original-elements'];
    let searchLinkClass = ['rd-navbar-search-toggle', 'toggle-original'];
    const { newsSearchedFor, stocksSearchedFor } = this.props;
    if (this.state.showMenu) {
      menuClass.push('active');
      buttonClass.push('active');
    }
    if (this.state.showMobileSearch) {
      searchDivClass.push('active');
      searchLinkClass.push('active');
    }
    return (
      <header className="page-header header-home-1">
        <div
            key={'mobile'}
            className="rd-navbar-wrap mobile-menu"
            style={{ height: '0px' }}
        >
            <nav
                className="rd-navbar rd-navbar-default rd-navbar-original rd-navbar-fixed"
                data-layout="rd-navbar-fixed"
                data-sm-layout="rd-navbar-fixed"
                data-md-layout="rd-navbar-fullwidth"
                data-md-device-layout="rd-navbar-fullwidth"
                data-lg-layout="rd-navbar-fullwidth"
                data-lg-device-layout="rd-navbar-fullwidth"
                data-md-stick-up-offset="180px"
                data-lg-stick-up-offset="180px"
                data-stick-up="true"
                data-sm-stick-up="true"
                data-md-stick-up="true"
                data-lg-stick-up="true"
            >
                <div className="rd-navbar-inner">
                    <div className="rd-navbar-panel">
                        <button
                            className={buttonClass.join(' ')}
                            data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                            onClick={this.showMenu.bind(this)}
                        >
                            <span />
                        </button>
                        <div className="rd-navbar-brand">
                            <a className="brand-name" href="index.html">
                                <img
                                    src="/images/STOCKMAN-WEB-LOGO.png"
                                    width="266"
                                    height="54"
                                    alt=""
                                    key={'mobile'}
                                />
                            </a>
                        </div>
                        <div
                            className="rd-navbar-collapse-toggle toggle-original"
                            data-rd-navbar-toggle=".rd-navbar-collapse"
                        >
                            <span />
                        </div>
                        <div className="rd-navbar-top-panel rd-navbar-collapse toggle-original-elements">
                            <div className="rd-navbar-top-panel-inner">
                                <ul className="contact-list">
                                    <li>
                                        <a href="/">Subscribe Now</a>
                                    </li>
                                    <li>
                                        <a
                                            data-toggle="modal"
                                            href="#myModal"
                                        >
                                            Sign In{' '}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contacts.html">
                                            Contacts
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rd-navbar-aside-right">
                        <div className={menuClass.join(' ')}>
                            <ul className="rd-navbar-nav">
                                <li className="active rd-navbar-submenu">
                                    <a href="./">Home</a>
                                    
                                </li>
                                 
                                <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                                      <Link to='/pricelist'>Market</Link>
                                    <span className="rd-navbar-submenu-toggle" />
                                    <ul
                                        className="rd-navbar-dropdown rd-navbar-open-right"
                                        style={{}}
                                    >
                                        <li>
                                            <Link to='/pricelist'>Price List</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Price Analysis</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Daily Market Summary</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Market Announcements</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                                      <Link to='/pricelist'>Analytics</Link>
                                    <span className="rd-navbar-submenu-toggle" />
                                    <ul
                                        className="rd-navbar-dropdown rd-navbar-open-right"
                                        style={{}}
                                    >
                                        <li>
                                            <Link to='/'>Trend Analytics</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>ASI Movement</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>ASI vs Stocks</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Market Announcements</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                                    <a href="/">Pages</a>
                                    <span className="rd-navbar-submenu-toggle" />
                                    <ul
                                        className="rd-navbar-dropdown rd-navbar-open-right"
                                        style={{}}
                                    >
                                        <li>
                                            <a href="typography.html">
                                                Typography
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tabs-and-accordions.html">
                                                Tabs and accordions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="progress-bars.html">
                                                Progress Bars
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms.html">
                                                Forms
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables.html">
                                                Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="grid.html">Grid</a>
                                        </li>
                                        <li>
                                            <a href="buttons.html">
                                                Buttons
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={searchDivClass.join(' ')}>
                            <a
                                className={searchLinkClass.join(' ')}
                                data-rd-navbar-toggle=".rd-navbar-search"
                                href="/"
                                onClick={this.showMobileSearch.bind(
                                    this
                                )}
                            >
                                <span />
                            </a>
                            <form
                                className="rd-search"
                                action="search-results.html"
                                data-search-live="rd-search-results-live"
                                method="GET"
                            >
                                <div className="form-wrap">
                                    <input
                                        className="rd-navbar-search-form-input form-input"
                                        id="rd-navbar-search-form-input1"
                                        type="text"
                                        name="search"
                                        value={this.state.search}
                                        onChange={this.onChange}
                                        onFocus={e =>
                                            (e.target.placeholder = '')
                                        }
                                        onBlur={e =>
                                            (e.target.placeholder =
                                                ' I`m looking for...')
                                        }
                                        placeholder=" I`m looking for..."
                                        autoComplete="off"
                                    />
                                </div>
                                <button className="rd-search-form-submit fa-search" />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div
          className="rd-navbar-wrap desktop-menu"
          style={{ height: '176px' }}
        >
          <nav
            className="rd-navbar rd-navbar-default rd-navbar-original rd-navbar-fullwidth"
              data-layout="rd-navbar-fixed"
              data-sm-layout="rd-navbar-fixed"
              data-md-layout="rd-navbar-fullwidth"
              data-md-device-layout="rd-navbar-fullwidth"
              data-lg-layout="rd-navbar-fullwidth"
              data-lg-device-layout="rd-navbar-fullwidth"
              data-md-stick-up-offset="180px"
              data-lg-stick-up-offset="180px"
              data-stick-up="true"
              data-sm-stick-up="true"
              data-md-stick-up="true"
              data-lg-stick-up="true"
          >
            <div className="rd-navbar-inner">
              <div className="rd-navbar-panel">
                      <button
                          className="rd-navbar-toggle toggle-original"
                          data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                      >
                          <span />
                      </button>
                      <div className="rd-navbar-brand">
                          <a className="brand-name" href="index.html">
                              <img
                                  src="/images/STOCKMAN-WEB-LOGO.png"
                                  width="266"
                                  height="54"
                                  alt=""
                                  key={'desktop'}
                              />
                          </a>
                      </div>
                      <div
                          className="rd-navbar-collapse-toggle toggle-original"
                          data-rd-navbar-toggle=".rd-navbar-collapse"
                      >
                          <span />
                      </div>
                      <div className="rd-navbar-top-panel rd-navbar-collapse toggle-original-elements">
                          <div className="rd-navbar-top-panel-inner">
                              <ul className="contact-list">
                                  <li>
                                      <a href="/">Subscribe Now</a>
                                  </li>
                                  <li>
                                      <a
                                          data-toggle="modal"
                                          href="#myModal"
                                      >
                                          Sign In{' '}
                                      </a>
                                  </li>
                                  <li>
                                      <a href="contacts.html">
                                          Contacts
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              <div className="rd-navbar-aside-right">
                <div className="rd-navbar-nav-wrap toggle-original-elements">
                  <ul className="rd-navbar-nav">
                    <li className="active  rd-navbar-submenu">
                      <a href="/">Home</a>
                      <span className="rd-navbar-submenu-toggle" />
                     
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                                      <Link to='/pricelist'>Market</Link>
                                    <span className="rd-navbar-submenu-toggle" />
                                    <ul
                                        className="rd-navbar-dropdown rd-navbar-open-right"
                                        style={{}}
                                    >
                                        <li>
                                            <Link to='/pricelist'>Price List</Link>
                                        </li>
                                        <li>
                                            <Link to='/pricemovement'>Price Analysis</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Daily Market Summary</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Market Announcements</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="rd-navbar--has-dropdown rd-navbar-submenu">
                                      <Link to='/pricelist'>Analytics</Link>
                                    <span className="rd-navbar-submenu-toggle" 
                                    />
                                    <ul
                                        className="rd-navbar-dropdown rd-navbar-open-right"
                                        style={{}}
                                    >
                                        <li>
                                            <Link to='/'>Trend Analytics</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>ASI Movement</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>ASI vs Stocks</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>Market Announcements</Link>
                                        </li>
                                    </ul>
                                </li>
                               
                       </ul>
                </div>
                <div className="rd-navbar-search toggle-original-elements">
                  <a
                    className="rd-navbar-search-toggle toggle-original"
                    data-rd-navbar-toggle=".rd-navbar-search"
                    href="/"
                  >
                    <span />
                  </a>
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
                        value={this.state.search}
                        onChange={this.onChange}
                        placeholder=" I`m looking for..."
                        autoComplete="off"
                      />
                      {this.state.showSearch && newsSearchedFor.length
                        ? (
                          <ShowSearchResults
                            searchResults={newsSearchedFor}
                            stocksResults={stocksSearchedFor}
                          />
                        ) : null
                      }
                      {this.state.showSearch && !newsSearchedFor.length ? (
                        <div
                          className="rd-search-results-live"
                          id="rd-search-results-live"
                        >
                          <h5>Quick Search</h5>
                          <p>
                            No result to display
                          </p>
                        </div>
                      ) : null
                      }
                    </div>
                    <button className="rd-search-form-submit fa-search" />
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ newsSearchReducer, stocksSearchReducer }) => ({
  newsSearchedFor: newsSearchReducer.newsSearched,
  stocksSearchedFor: stocksSearchReducer.stocksSearched,
});

const mapDispatchToProps = (dispatch) => ({
  startSearch: (search) => dispatch(searchNewsAndStocks(search)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
