'use client'
import { ReactElement, useState } from "react";
import './navigation.scss'
import NavigationItem from "./NavigationItem";
import { getPages, getRoutes } from "@/utils/functions";
import NavigationLanguage from "./NavigationLanguage";
import { routes } from "@/data/data";

const Navigation = (): ReactElement => {
    const [language, setLanguage] = useState<string>('en')

    const handleSetLanguage = (value: string) => {
        setLanguage(value);
    }
 
    return (
        <nav className="nav">
            {getPages(language).map((item: string, index: number) => <NavigationItem name={item} route={routes[index]} key={index} />)}
            <a className="nav__download" href="https://futuregames.itch.io/blood-maiden">DOWNLOAD</a>
            {/* <NavigationLanguage language={language} setLanguage={handleSetLanguage} /> */}
        </nav>
    )
}

export default Navigation;  