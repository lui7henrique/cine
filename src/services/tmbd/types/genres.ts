export type GetGenres = Promise<{
  genres: Array<{
    id: number;
    name: string;
  }>;
}>;
