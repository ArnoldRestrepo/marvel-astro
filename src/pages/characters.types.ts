
export interface thumbnail {
  path: string;
  extension: string
}

export interface Character {
  id: number;
  name: string;
  thumbnail: thumbnail;
  description: string;
}