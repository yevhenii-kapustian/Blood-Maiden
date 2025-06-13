import { pagesAndRoutes } from "@/data/data"

    export const getLanguage = (s: string): string => {
        switch (s) {
            case 'en':
                return 'english'
            case 'se':
                return 'svenska'
            default: return 'english'
        }
    }

    export const getPages = (version: string): string[] => {
        switch (version) {
            case 'desktop':
                return pagesAndRoutes.navigation.desktop.pages;
            case 'mobile':
                return pagesAndRoutes.navigation.mobile.pages;
            default: return pagesAndRoutes.navigation.desktop.pages;
        }
    }
    
    export const getRoutes = (location: string): string[] => {
        switch (location) {
            case 'desktop':
                return pagesAndRoutes.navigation.desktop.routes;
            case 'mobile':
                return pagesAndRoutes.navigation.mobile.routes;
            default: return pagesAndRoutes.navigation.mobile.routes;
        }
    }