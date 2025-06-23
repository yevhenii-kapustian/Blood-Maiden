import { GameTextsArray, GameCreators, IGalleryPicture, Monster, Environment, Level } from "@/types/type";

export const mediaIntroTexts: string[] = [
  "Play as a resurrected maiden in a",
  "cursed world—dashing, slashing, and blood-bending",
  "through haunted ruins to face the immortal king. ",
  "You won't win. Not yet.",
  "But you'll die trying.",
];

export const headerLinks = new Map<string, string[]>([
  ["links", ["home", "media", "about", "content creators"]],
]);

export const gameFeaturesPrimary = new Map<string, GameTextsArray>([
  ['title', { text: ["Blood Bending Mechanic", "High-Difficulty Combat Platforming", "Speedrun-Oriented Levels"] }],
  ['subtitle', { text: ["Morph blood into deadly weapons and tools.", "Designed for fast reflexes and precise movement—every mistake could be lethal.", "The clock is ticking. Every level is time-limited and demands quick thinking. "] }]
])

export const gameFeaturesSecondary = new Map<string, GameTextsArray>([
  ['title', { text: ["Powerful Protagonist", "Stylized Checkpoints", "Rogue-like Progression"] }],
  ['subtitle', { text: ["Play as a fast, fierce female with blood magic—unlock abilities that make you unstoppable.", "Bath at fountain of blood and restore your health and  memory. ", "The clock is ticking. Every level is time-limited and demands quick thinking.", "Die, learn, return stronger. Revenge requires resilience."] }]
])

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
      role: "Game Producer",
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
      name: "Halldór Kári Kristmundsson",
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
      link: "https://www.linkedin.com/in/tobias-kjernell-4b50b113a/"
    },
    {
      name: "Priyesh Illam",
      role: "Developer",
      link: ""

    },
    {
      name: "Yevhenii Kapustian",
      role: "Developer",
      link: "https://www.linkedin.com/in/yevhenii-kapustian-ab85a8279/?trk=contact-info"
    },
    {
      name: "Megha Albin",
      role: "Developer",
      link: ""
    }
  ]],
  ['ux-designer', [{
    name: 'Paloma Muñoz Inostroza',
    role: 'UX-Designer',
    link: 'https://www.linkedin.com/in/paloma-munoz-inostroza-994182363/'
  }
  ]]
])

export const pagesAndRoutes = {
  navigation: {
    desktop: {
      pages: ["home", "media", "about", "content creators"],
      routes: ["home", "media", "about", "content creators"],
    },
    mobile: {
      pages: ["home", "media", "about", "creators"],
      routes: ["home", "media", "about", "content creators"],
    },
  },
};

export const levelData: Level[] = [
  {
    title: 'Level 1: Cemetery and Forest',
    environments: [
      {
        name: 'Pillars',
        src: '/images/screenshots/environmentlevels/1/lamppost_update.png',
      },
      {
        name: 'Stone Coffins',
        src: '/images/screenshots/environmentlevels/1/stone_coffins_environ_level1.png',
      },
      {
        name: 'Wood Coffins',
        src: '/images/screenshots/environmentlevels/1/Wooden_coffin_environ_level1.png',
      },
      {
        name: 'Lamp post',
        src: '/images/screenshots/environmentlevels/1/Lampost_environ_level1.png',
      },
      
    ],
  },
  {
    title: 'Level 2: The City',
    environments: [
      {
        name: 'Overview',
        src: '/images/screenshots/environmentlevels/2/environment_level2.png'
      },
        {
        name: 'Overview Balloons',
        src: '/images/screenshots/environmentlevels/2/level2balloon.png'
      }
    ],
  },
];

export const environmentPictures: IGalleryPicture[] = [
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

export const monsters: Monster[] = [
  { name: 'Vines', image: '/images/screenshots/enemiesandobstacles/obstacles_level_1_v2.png' },
  { name: 'THORNED BLASPHEMER', image: '/images/screenshots/enemiesandobstacles/turning_obstacles_level1.png'},
  { name: 'Raining Daggers', image: '/images/screenshots/enemiesandobstacles/rainingdaggers.png'},
  { name: 'Hot air balloon', image: '/images/screenshots/enemiesandobstacles/obstacles_level_2.png'},
  { name: 'Enemy', image: '/images/screenshots/enemiesandobstacles/enemy1.png'},
  { name: 'Enemy', image: '/images/screenshots/enemiesandobstacles/enemy2.png'},
];

