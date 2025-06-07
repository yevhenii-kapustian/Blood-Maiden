'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

interface INavItem {
    name: string,
    route: string
}

const NavigationItem = ({ name, route }: INavItem): ReactElement => {
    const path: string = usePathname();
    const pathFix: string = route.replaceAll(" ", "");

    return (
        <Link passHref={true} href={`/${route === 'home' ? "" : pathFix}`}
            className={`nav__item ${path === '/' + pathFix && path !== '/' ?
                'nav__item-active' : path === '/' && route === 'home' ?
                    'disable' : ""}`}>{name}</Link>
    )
}

export default NavigationItem;  