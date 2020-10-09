import React, { Component } from 'react';
import './Header.css'
import { connect } from 'react-redux';

import { searchNewsAndStocks } from '../../actions/searchAction';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

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

  toggleSearchDropdown = () => {
    this.setState({ showSearch: !this.state.showSearch })
  }

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
      <header className='page-header header-home-1'>
        <MobileHeader buttonClass={buttonClass} 
          menuClass={menuClass} 
          searchDivClass={searchDivClass} 
          searchLinkClass={searchLinkClass}
          showMenu={this.showMenu} 
          showMobileSearch={this.showMobileSearch} 
          stateSearch={this.state.search} 
          onChange={this.onChange} />
        <DesktopHeader toggleSearchDropdown={this.toggleSearchDropdown} 
          buttonClass={buttonClass} 
          menuClass={menuClass} 
          searchDivClass={searchDivClass} 
          searchLinkClass={searchLinkClass}
          showMenu={this.showMenu} 
          showMobileSearch={this.showMobileSearch} 
          stateSearch={this.state.search} 
          onChange={this.onChange}
          newsSearchedFor={newsSearchedFor}  
          stocksSearchedFor={stocksSearchedFor} 
          showSearch={this.state.showSearch} />
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
