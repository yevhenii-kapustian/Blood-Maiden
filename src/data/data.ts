
import { GameTextsArray, GameCreators, Monster, IGalleryPicture, Environment, Level } from "@/types/type";

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

export const mediaIntroTexts: string[] = [
  "Play as a resurrected maiden in a",
  "cursed world-dashing, slashing, and bleeding",
  "through haunted ruins to face the immortal king.",
  "You won't win. Not yet.",
  "But you'll die trying.",
];


export const headerLinks = new Map<string, string[]>([
  ["links", ["home", "media", "about", "content creators"]],
]);


export const gameFeaturesPrimary = new Map<string, GameTextsArray>([
    ['title', {text: ["Blood Bending Mechanic", "High-Difficulty Combat Platforming", "Speedrun-Oriented Levels", "Rogue-like Progression"]}],
    ['subtitle', {text: ["Morph blood into deadly weapon forms-blades, whips, projectiles, and more.", "Designed for fast reflexes and precise movement-every mistake is lethal.", "The clock is ticking. Every level is time-limited and demands quick thinking.", "Die, learn, return stronger. Revenge requires resilience."]}]
])

export const gameFeaturesSecondary = new Map<string, GameTextsArray>([
     ['title', {text: ["Powerful Protagonist", "Stylized Checkpoints", "Modular Environment Props"]}],
    ['subtitle', {text: [  "Play as a fast, fierce female with blood magic-unlock abilities that make you unstoppable.", "Save at fountains. A breath of relief in a relentless journey.", "Streetlamps, gravestones, and interactive elements shape a gothic world."]}]
])

export const gameFeatures = new Map<string, GameTextsArray>([
  [
    "title",
    {
      text: [
        "Blood Bending Mechanic",
        "High-Difficulty Combat Platforming",
        "Speedrun-Oriented Levels",
        "Rogue-like Progression",
        "Powerful Protagonist",
        "Stylized Checkpoints",
        "Modular Environment Props",
      ],
    },
  ],
  [
    "subtitle",
    {
      text: [
        "Morph blood into deadly weapon forms-blades, whips, projectiles, and more.",
        "Designed for fast reflexes and precise movement-every mistake is lethal.",
        "The clock is ticking. Every level is time-limited and demands quick thinking.",
        "Die, learn, return stronger. Revenge requires resilience.",
        "Play as a fast, fierce female with blood magic-unlock abilities that make you unstoppable.",
        "Save at fountains. A breath of relief in a relentless journey.",
        "Streetlamps, gravestones, and interactive elements shape a gothic world.",
      ],
    },
  ],
]);


export const gameInformation = new Map<string, GameTextsArray>([
  [
    "description",
    {
      text: [
        "Bloodbending. Revenge. Combat.",
        "Slay monsters, master time-based levels.",
      ],
    },
  ],
]);

export const gameSettings = new Map<string, GameTextsArray>([
  [
    "keyboard",
    {
      text: [
        "Movement : A = left D = right (or arrow keys)",
        "Jump : SPACEBAR",
        "Dagger attack : LEFT MOUSE BUTTON",
        "Blood gun attack : RIGHT MOUSE BUTTON",
        "Dash is : SHIFT",
        "Grappling hook : E",
        "Switch between dagger and rapier : Q",
      ],
    },
  ],
  [
    "controller",
    {
      text: [
        "Movement : Thumb stick",
        "Jump : (X/A)",
        "Dagger attack :  (□/X)",
        "Blood gun : LT",
        "Dash : (O/B)",
        "Switch between dagger and rapier : (△/Y)",
        "Grappling hook : RB",
      ],
    },
  ],
]);

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
        },
        {
            name: "Arpad Pinter",
            role: "Prop Artist",
            link: "https://www.linkedin.com/in/arpad-pinter-789555302/"
        },
        {
            name: "Marcus Swensån",
            role: "Character Artist",
            link: "https://www.linkedin.com/in/marcus-s-92834a2ba/"
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
    ]],
     ['frontend developer', [
        {
            name: "Ankita Singh",
            role: "Developer",
            link: "https://www.linkedin.com/in/ankita-singh-1a8236185"
        },
        {
            name: "Souad Taki ",
            role: "Developer",
            link: "https://www.linkedin.com/in/souad-rondelet-b18873184/"
        },
        {
            name: "Tobias Kjernell",
            role: "Developer",
            link: "https://www.linkedin.com/"
        },
        {
            name: "Priyesh Illam",
            role: "Developer",
            link: "https://www.linkedin.com/"
        },
        {
            name: "Yevhenii Kapustian",
            role: "Developer",
            link: "https://www.linkedin.com/in/yevhenii-kapustian-ab85a8279/?trk=contact-info"
        },
         {
            name: "Megha Albin",
            role: "Developer",
            link: "https://www.linkedin.com/"
        }
    ]],
])

export const monsters: Monster[] = [
  { name: 'YAMI-CHAN', image: '/images/monsters/yami-chan.png' },
  { name: 'KRYVAK', image: '/images/monsters/kryvak.png' },
  { name: 'THE JOKER', image: '/images/monsters/the-joker.png' },
  { name: 'THORNED BLASPHEMER', image: '/images/monsters/thorned-blasphemer.png' },
  { name: 'THE BLACK WARDEN', image: '/images/monsters/the-black-warden.png' },
  { name: 'WENDIGO', image: '/images/monsters/wendigo.png' },
  { name: 'GOLEM', image: '/images/monsters/golem.png' },
  { name: 'LYCAN', image: '/images/monsters/lycan.png' },
]
  

export const environmentPictures:IGalleryPicture[] = [
  {
    name: "luminous",
    src: "/well.png",
    caption: "THE LUMINOUS WELL-SAFE POINT",
  },
  {
    name: "obsidian",
    src: "/stone.png",
    caption: "OBSIDIAN CROSS",
  },
  {
    name: "lamp",
    src: "/lamp.png",
    caption: "LAMP OF THE VEIL",
  },

];

export const levelData: Level[] = [
  {
    title: 'Level 1: Cemetery of Shadows',
    environments: [
      {
        name: 'Sanctuary Hollow',
        src: '/images/LevelEnvironments/Sanctuary Hollow.png',
      },
      {
        name: 'Blackveil Cemetery',
        src: '/images/LevelEnvironments/Blackveil cementery.png',
      },
      {
        name: 'The Waiting Casket',
        src: '/images/LevelEnvironments/Coffin.png',
      },
    ],
  },
  {
    title: 'Level 2: Nightroot Woods',
    environments: [
      {
        name: 'The Mossbound Vein',
        src: '/images/LevelEnvironments/the_mossbound_vein.png',
      },
      {
        name: 'Moonfen Hollow',
        src: '/images/LevelEnvironments/moonfen_hollow.png',
      },
      {
        name: 'Lanternreach Grove',
        src: '/images/LevelEnvironments/lanternreach_grove.png',
      },
    ],
  },
];

