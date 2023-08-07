export type TV = {
  backdrop_path: string;
  first_air_date: string; // YYYY-MM-DD
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type DiscoverTV = Promise<{
  page: number;
  results: Array<TV>;
}>;

export type DiscoverTVParams = {
  genreId?: string;
};
