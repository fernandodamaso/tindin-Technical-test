export interface Photo {
  name: string;
  url: string;
  _id: string;
}

export interface Video {
  type: string;
  url: string;
  _id: string;
}

export interface Game {
  _id: string;
  title: string;
  description: string;
  genres: string[];
  platforms: string[];
  tags: string[];
  rating: number;
  totalVotes: number;
  photos: Photo[];
  videos: Video[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  resume: string;
  highlight?: boolean;
  mediumPrice?: number;
  launchDate?: Date;
  releaseYear?: number;
}

export interface gameResult {
  games: Game[];
  totalSize: number;
}
