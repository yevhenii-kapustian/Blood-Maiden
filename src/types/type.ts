export type GameTextsArray = {
    text: string[]
}

export type GameCreators = {
    name: string,
    role: string,
    link: string
}

export interface IGalleryPicture {
    name: string,
    src: string,
    caption:string
}

export type Monster = {
  name: string,
  image: string,
}

// Data type for developers 
export type Developer = {
    name: string;
    link?: string;
    image?: string;
}