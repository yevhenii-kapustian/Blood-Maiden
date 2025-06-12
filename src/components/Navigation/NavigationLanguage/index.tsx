'use client'
import { ReactElement, useState } from "react";
import { Icon } from '@iconify-icon/react';
import { getLanguage, getPages, getRoutes } from "@/utils/functions";
import { pagesAndRoutes } from "@/data/data";

interface INavLanguage {
    language: string,
    setLanguage: (s:string) => void
}

const NavigationLanguage = ({language, setLanguage}:INavLanguage):ReactElement => {

    const [isLanguageOpen, setIsLanguageOpen] = useState<boolean>(false);
    const handleOpenLanguage = ():void => {
        setIsLanguageOpen(!isLanguageOpen)
    }

    return (
        <div className="nav__language" onClick={handleOpenLanguage}>
            {getLanguage(language)} {isLanguageOpen ?
                <> <div className="symbol"><Icon icon="tabler:chevron-up" width="32" height="32" /></div> <div className="nav__language-drop">
                    {Object.keys(pagesAndRoutes.navigation).map((item, index) => <div className="nav__language-dropItem" key={index} onClick={() => setLanguage(item)}> {getLanguage(item)} </div>)}
                </div></>
                : <div className="symbol"><Icon icon="tabler:chevron-down" width="32" height="32" /></div>}
        </div>

    )
}

export default NavigationLanguage;