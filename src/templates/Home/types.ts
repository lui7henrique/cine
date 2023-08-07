import { Type } from "./GenreSelect";

export type FormType = {
  genre: string;
  type: Type;
  quantity: string;
  release_year?: string;
  vote_average?: string;
};
