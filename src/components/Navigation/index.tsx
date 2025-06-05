'use client'
import { ReactElement, useState } from "react";
import './navigation.scss'
import NavigationItem from "./NavigationItem";
import { getPages, getRoutes } from "@/utils/functions";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Navigation = (): ReactElement => {
    const [language, setLanguage] = useState<string>('en')
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const handleMobileMenu = ():void => {
        setMobileOpen(!mobileOpen);
    }
    const handleSetLanguage = (value: string):void => {
        setLanguage(value);
    }

    return (
        <>
            <nav className="nav">
                {getPages('desktop').map((item: string, index: number) => <NavigationItem name={item} route={getRoutes('desktop')[index]} key={index} />)}
                <a className="nav__download" href="https://futuregames.itch.io/blood-maiden">DOWNLOAD</a>
                {/* <NavigationLanguage language={language} setLanguage={handleSetLanguage} /> */}

            </nav>
            <nav className="mobileNav" onClick={handleMobileMenu}>
                <Icon icon="material-symbols:menu-rounded" width="42" height="42" />

                {mobileOpen &&
                    <div className="mobileNav__background">
                        <div className="mobileNav__background-container">
                            <img className="mobileNav__background-logo" src="logoMobile.png" alt="nope" />
                            <div className="mobileNav__background-links">
                                {getPages('mobile').map((item: string, index: number) => <NavigationItem name={item} route={getRoutes('mobile')[index]} key={index} />)}
                            </div>
                        </div>
                        <img className="mobileNav__background-decoreUpper" src="golddecore.png" alt="" width={121} height={134} />
                        <img className="mobileNav__background-decoreLower" src="golddecore.png" alt="" width={121} height={134} />
                    </div>
                }
            </nav>
        </>
    )
}

export default Navigation;  