import axios from "axios";
import { ENV } from "src/env";

const url = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${ENV.NEXT_PUBLIC_IMBD_API_KEY}`,
  },
});

export const api = {
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
};
