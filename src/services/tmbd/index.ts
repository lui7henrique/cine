import axios from "axios";
import { ENV } from "src/env";
import {
  DiscoverMovie,
  DiscoverMovieParams,
  DiscoverTV,
  DiscoverTVParams,
  GetGenres,
} from "./types";

const url = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${ENV.NEXT_PUBLIC_IMBD_API_KEY}`,
  },
});

export const tmbd = {
  genres: {
    movieList: async () => {
      const { data } = await url.get<GetGenres>("/genre/movie/list");

      return data;
    },
    tvList: async () => {
      const { data } = await url.get("/genre/tv/list");

      return data;
    },
  },
  discover: {
    movie: async (params: DiscoverMovieParams) => {
      const { genreId } = params;

      const { data } = await url.get<DiscoverMovie>("/discover/movie", {
        params: {
          with_genres: genreId,
        },
      });

      return data;
    },
    tv: async (params: DiscoverTVParams) => {
      const { genreId } = params;

      const { data } = await url.get<DiscoverTV>("/discover/tv", {
        params: {
          with_genres: genreId,
        },
      });

      return data;
    },
  },
};
