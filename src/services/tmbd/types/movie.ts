export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // YYYY-MM-DD
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type DiscoverMovie = Promise<{
  page: number;
  results: Array<Movie>;
}>;

export type DiscoverMovieParams = {
  genreId?: string;
};
