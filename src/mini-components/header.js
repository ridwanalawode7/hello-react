import React from "react";
import NavButton from "./navigation-button";
import ColorToggle from "./color-mode-toggle";
import HeaderLogo from "./header-logo";

const Header = (props) => {
  return (
    <header>
      <div className='header-container'>
        <NavButton onLinkClick={props.onLinkClick} />
        <HeaderLogo onLinkClick={props.onLinkClick} />
        <ColorToggle />
      </div>
    </header>
  );
};

export default Header;