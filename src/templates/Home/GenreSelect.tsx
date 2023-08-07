import { useFormContext, Controller } from "react-hook-form";
import { useQuery } from "react-query";
import { Select } from "src/components/Select";

import { tmbd } from "src/services/tmbd";
import { FormType } from "./types";
import { GetGenres } from "src/services/tmbd/types";

export type Type = "tv" | "movies";

const queryKeyByType: Record<Type, Array<string>> = {
  movies: ["movies-genres"],
  tv: ["tv-genres"],
};

const queryFnByType: Record<Type, GetGenres> = {
  movies: tmbd.genres.movieList(),
  tv: tmbd.genres.tvList(),
};

export const GenreSelect = () => {
  const { control, watch } = useFormContext<FormType>();
  const type = watch("type") || "tv";

  const { data, isLoading, isError } = useQuery(
    queryKeyByType[type],
    async () => await queryFnByType[type]
  );

  if (isLoading || isError || !data) {
    return <></>;
  }

  return (
    <Controller
      name="genre"
      control={control}
      render={({ field }) => {
        return (
          <Select.Root onValueChange={field.onChange}>
            <Select.SelectTrigger placeholder="Genre" />
            <Select.SelectContent
              groups={[
                {
                  label: "Genres",
                  options: data.genres.map((genre) => {
                    return {
                      label: genre.name,
                      value: `${genre.id}-${genre.id}`,
                    };
                  }),
                },
              ]}
            />
          </Select.Root>
        );
      }}
    />
  );
};
