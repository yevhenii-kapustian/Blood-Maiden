import { ReactElement } from "react";
import Navigation from "../Navigation";
import './header.scss'

const Header = (): ReactElement => {
    return (
        <header className="header">
          <Navigation />
        </header>
    )
}

export default Header;

