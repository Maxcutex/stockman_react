import React, { Component } from 'react';
import Header from "./Header";

class HeaderWrapper extends Component {
    state = {
        search: '',
        showSearch: false,
        showMobileSearch: false,
        showMenu: false,
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
        if (this.state.search.length > 0) {
            this.setState({showSearch: true});
        }
    };
    showMenu = e => {
        this.setState({showMenu: !this.state.showMenu});
    };
    showMobileSearch = e => {
        this.setState({showMobileSearch: !this.state.showMobileSearch});
    };

    render() {
        let menuClass = ['rd-navbar-nav-wrap', 'toggle-original-elements'];
        let buttonClass = ['rd-navbar-toggle', 'toggle-original'];
        let searchDivClass = ['rd-navbar-search', 'toggle-original-elements'];
        let searchLinkClass = ['rd-navbar-search-toggle', 'toggle-original'];
        if (this.state.showMenu) {
            menuClass.push('active');
            buttonClass.push('active');
        }
        if (this.state.showMobileSearch) {
            searchDivClass.push('active');
            searchLinkClass.push('active');
        }

        return (
            <Header
                search={this.state.search}
                showSearch={this.state.showSearch}
                onChange={this.onChange}
                showMobileSearch={this.showMobileSearch}
                showMenu={this.showMenu}
                menuClass={menuClass}
                searchDivClass={searchDivClass}
                searchLinkClass={searchLinkClass}
                buttonClass={buttonClass}
                />
        )
    }
}

export default HeaderWrapper;