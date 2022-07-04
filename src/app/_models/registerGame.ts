export class registerGame {
  title!: string;
  description!: string;
  photos!: Photo[];
  videos!: Video[];
  mediumPrice!: number;
  studio?: any;
  company?: any;
  releaseYear!: number;
  genres!: string[];
  platforms!: string[];
  tags!: string[];
}

export class Photo {
  name!: string;
  url!: string;
}

export class Video {
  type!: string;
  url!: string;
}
