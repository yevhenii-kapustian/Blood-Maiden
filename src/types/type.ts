export type GameTextsArray = {
    text: string[]
}

export type GameCreators = {
    name: string,
    role: string,
    link: string
}

// Data type for developers 
export type Developer = {
    name: string;
    link?: string;
    image?: string;
}

export type Environment = {
  name: string;
  src: string;
};

export type Level = {
  title: string;
  environments: Environment[];
};