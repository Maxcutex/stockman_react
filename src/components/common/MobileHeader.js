import React from 'react';
import { Link } from 'react-router-dom';
const MobileHeader = ({buttonClass, menuClass,searchDivClass, searchLinkClass, 
    showMenu,showMobileSearch, stateSearch, onChange}) => {
    return ( 
        <div
            key={'mobile'}
            className='rd-navbar-wrap mobile-menu'
            style={{ height: '0px' }}
        >
            <nav
                className='rd-navbar rd-navbar-default rd-navbar-original rd-navbar-fixed'
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
                            className={buttonClass.join(' ')}
                            data-rd-navbar-toggle='.rd-navbar-nav-wrap'
                            onClick={showMenu.bind(this)}
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
                                    key={'mobile'}
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
                        <div className={menuClass.join(' ')}>
                            <ul className='rd-navbar-nav'>
                                <li className='active rd-navbar-submenu'>
                                    <a href='./'>News</a>
                                    
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
                                            <Link to='/price_analysis'>Price Analysis</Link>
                                        </li>
                                        <li>
                                            <Link to='/daily_market_summary'>Daily Market Summary</Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li className='rd-navbar--has-dropdown rd-navbar-submenu'>
                                      <Link to='/pricelist'>Analytics</Link>
                                    <span className='rd-navbar-submenu-toggle' />
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
                                            <Link to='/screend_stocks'>Screened Stock</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='rd-navbar--has-dropdown rd-navbar-submenu'>
                                    <a href='/'>Pages</a>
                                    <span className='rd-navbar-submenu-toggle' />
                                    <ul
                                        className='rd-navbar-dropdown rd-navbar-open-right'
                                        style={{}}
                                    >
                                        <li>
                                            <a href='typography.html'>
                                                Typography
                                            </a>
                                        </li>
                                        <li>
                                            <a href='tabs-and-accordions.html'>
                                                Tabs and accordions
                                            </a>
                                        </li>
                                        <li>
                                            <a href='progress-bars.html'>
                                                Progress Bars
                                            </a>
                                        </li>
                                        <li>
                                            <a href='forms.html'>
                                                Forms
                                            </a>
                                        </li>
                                        <li>
                                            <a href='tables.html'>
                                                Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href='grid.html'>Grid</a>
                                        </li>
                                        <li>
                                            <a href='buttons.html'>
                                                Buttons
                                            </a>
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
                        <div className={searchDivClass.join(' ')}>
                            <a
                                className={searchLinkClass.join(' ')}
                                data-rd-navbar-toggle='.rd-navbar-search'
                                href='/'
                                onClick={showMobileSearch.bind(
                                    this
                                )}
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
                                        id='rd-navbar-search-form-input1'
                                        type='text'
                                        name='search'
                                        value={stateSearch}
                                        onChange={onChange}
                                        onFocus={e =>
                                            (e.target.placeholder = '')
                                        }
                                        onBlur={e =>
                                            (e.target.placeholder =
                                                ' I`m looking for...')
                                        }
                                        placeholder=' I`m looking for...'
                                        autoComplete='off'
                                    />
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
 
export default MobileHeader;