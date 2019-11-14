import React from 'react';
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderDesktopMenu from "./HeaderDesktopMenu";

function Header ({buttonClass, showMobileSearch, onChange, search, showSearch, showMenu, menuClass, searchDivClass, searchLinkClass}) {
        return (
            <header className="page-header header-home-1">
                <HeaderMobileMenu
                buttonClass={buttonClass}
                showMobileSearch={showMobileSearch}
                onChange={onChange}
                search={search}
                menuClass={menuClass}
                showMenu={showMenu}
                searchLinkClass={searchLinkClass}
                searchDivClass={searchDivClass}
                />
                <HeaderDesktopMenu
                search={search}
                showSearch={showSearch}
                onChange={onChange}
                />
            </header>
        );
}

export default Header;
