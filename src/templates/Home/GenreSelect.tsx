import { useQuery } from "react-query";
import { Select } from "src/components/Select";

import { api } from "src/services/tmbd";

export type GenreType = "tv" | "movies";

type GenreSelectProps = {
  type: GenreType;
};

const queryKeyByType: Record<GenreType, Array<string>> = {
  movies: ["movies-genres"],
  tv: ["tv-genres"],
};

const queryFnByType: Record<GenreType, GetGenres> = {
  movies: api.genres.movieList(),
  tv: api.genres.tvList(),
};

export const GenreSelect = (props: GenreSelectProps) => {
  const { type } = props;

  const { data, isLoading, isError } = useQuery(
    queryKeyByType[type],
    async () => await queryFnByType[type]
  );

  if (isLoading) {
    return (
      <Select.Root>
        <Select.SelectTrigger placeholder="Loading..." />
      </Select.Root>
    );
  }

  if (isError || !data) {
    return (
      <Select.Root>
        <Select.SelectTrigger placeholder="Error xp" />
      </Select.Root>
    );
  }

  return (
    <Select.Root>
      <Select.SelectTrigger placeholder="Genre" />
      <Select.SelectContent
        groups={[
          {
            label: "Genres",
            options: data.genres.map((genre) => {
              return {
                label: genre.name,
                value: genre.id,
              };
            }),
          },
        ]}
      />
    </Select.Root>
  );
};
