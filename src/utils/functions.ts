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

    export const getPages = (location: string): string[] => {
        switch (location) {
            case 'en':
                return languages.navigation.en.pages;
            case 'se':
                return languages.navigation.se.pages;
            default: return languages.navigation.en.pages;
        }
    }
    
    export const getRoutes = (location: string): string[] => {
        switch (location) {
            case 'en':
                return languages.navigation.en.routes;
            case 'se':
                return languages.navigation.se.routes;
            default: return languages.navigation.en.routes;
        }
    }