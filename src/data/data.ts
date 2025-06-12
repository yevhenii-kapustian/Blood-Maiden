import { GameTextsArray, GameCreators } from "@/types/type";

export const pagesAndRoutes = {
    navigation: {
        desktop: {
            pages: ['home', 'media', 'about', 'content creators'],
            routes: ['home', 'media', 'about', 'content creators']
        },
        mobile: {
            pages: ['home', 'media', 'about', 'creators'],
            routes: ['home', 'media', 'about', 'content creators']
        }
    }
}

export const mediaIntroTexts:string[] = ['Play as a resurrected maiden in a',
    'cursed world-dashing, slashing, and bleeding',
    'through haunted ruins to face the immortal king.',
     "You won't win. Not yet.", "But you'll die trying." 
];

export const headerLinks = new Map<string, string[]>([
    ['links', ["home", "media", "about", "content creators"]]
]);

export const gameFeatures = new Map<string, GameTextsArray>([
    ['title', {text: ["Blood Bending Mechanic", "High-Difficulty Combat Platforming", "Speedrun-Oriented Levels", "Rogue-like Progression", "Powerful Protagonist", "Stylized Checkpoints", "Modular Environment Props"]}],
    ['subtitle', {text: ["Morph blood into deadly weapon forms-blades, whips, projectiles, and more.", "Designed for fast reflexes and precise movement-every mistake is lethal.", "The clock is ticking. Every level is time-limited and demands quick thinking.", "Die, learn, return stronger. Revenge requires resilience.", "Play as a fast, fierce female with blood magic-unlock abilities that make you unstoppable.", "Save at fountains. A breath of relief in a relentless journey.", "Streetlamps, gravestones, and interactive elements shape a gothic world."]}]
])

export const gameInformation = new Map<string, GameTextsArray>([
    ['description', {text: ["Bloodbending. Revenge. Combat.", "Slay monsters, master time-based levels."]}]
])

export const gameSettings = new Map<string, GameTextsArray>([
    ['keyboard', {text: ["Movement : A = left D = right (or arrow keys)", "Jump : SPACEBAR", "Dagger attack : LEFT MOUSE BUTTON", "Blood gun attack : RIGHT MOUSE BUTTON", "Dash is : SHIFT", "Grappling hook : E", "Switch between dagger and rapier : Q"]}],
    ['controller', {text: ["Movement : Thumb stick", "Jump : (X/A)", "Dagger attack :  (□/X)", "Blood gun : LT", "Dash : (O/B)", "Switch between dagger and rapier : (△/Y)", "Grappling hook : RB"]}]
])

export const gameCreators = new Map<string, GameCreators[]>([
    ['management', [
        {
            name: "Daniella Scruggs",
            role: "Game Producer Manager",
            link: "https://www.linkedin.com/in/daniella-scruggs-agile-project-manager/"
        },
        {
            name: "Sheila Aliaga",
            role: "Project Manager + Web Manager",
            link: "https://www.linkedin.com/in/sheila-aliaga-web-developer/"
        },
        {
            name: "Simon Stening",
            role: "Release Manager",
            link: "https://www.linkedin.com/in/simon-stening-7a21b418b/"
        }
    ]],
    ["designers", [
        {
            name: "Victor Chéronet",
            role: "Product Owner, Gameplay, Level Design",
            link: "https://www.linkedin.com/in/victor-ch%C3%A9ronet-02244716a/"
        },
        {
            name: "Tanya Tretilova",
            role: "Narrative, Level Design",
            link: "https://www.linkedin.com/in/tretilova/"
        },
        {
            name: "Jeremy Vergara",
            role: "Gameplay, User Interface",
            link: "https://www.linkedin.com/in/jeremy-morales-89b942192/"
        },
        {
            name: "David Johansson",
            role: "Gameplay, Quality Assurance, Sound",
            link: "https://www.linkedin.com/in/david-johansson-ba3aa7133/"
        }
    ]],
    ['artist', [
        {
            name: "Johanna Fransson",
            role: "VFX Artist",
            link: "https://www.linkedin.com/in/johanna-fransson/"
        },
        {
            name: "Andreas Johansson",
            role: "Artistic Director, Environment Artist",
            link: "https://www.linkedin.com/in/andreas-johansson-a33422292/"
        },
        {
            name: "Linnea Norman",
            role: "Animation",
            link: "https://www.linkedin.com/in/linnea-norman-128643239/"
        }
    ]],
    ['programmers', [
        {
            name: "Oskar Norberg",
            role: "Game Programmer",
            link: "https://www.linkedin.com/in/oskar-norberg-6905b1310/"
        },
        {
            name: "Elliot Coffell",
            role: "Game Programmer",
            link: "https://www.linkedin.com/in/elliot-coffell-666105352/"
        },
        {
            name: "Halldó Kári Kristmundsson",
            role: "Game Programmer",
            link: "https://www.linkedin.com/in/halld%C3%B3r-k%C3%A1ri-kristmundsson/"
        },
        {
            name: "Simon Landin",
            role: "Game Programmer",
            link: "https://www.linkedin.com/in/simon-landin-5b7b272b2/"
        }
    ]]
])