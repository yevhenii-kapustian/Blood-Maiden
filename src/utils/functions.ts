import { languages } from "@/data/data"

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
                return languages.navigation.desktop.pages;
            case 'mobile':
                return languages.navigation.mobile.pages;
            default: return languages.navigation.desktop.pages;
        }
    }
    
    export const getRoutes = (location: string): string[] => {
        switch (location) {
            case 'desktop':
                return languages.navigation.desktop.routes;
            case 'mobile':
                return languages.navigation.mobile.routes;
            default: return languages.navigation.mobile.routes;
        }
    }