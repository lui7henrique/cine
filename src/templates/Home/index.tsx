import { DefaultLayout } from "src/layout/Default";
import { GenreSelect, GenreType } from "./GenreSelect";
import { Select } from "src/components/Select";
import { useState } from "react";
import { Button } from "src/components/Button";

export const HomeTemplate = () => {
  const [genreType, setGenreType] = useState<GenreType>("tv");

  return (
    <DefaultLayout>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center h-full">
        <div className="flex gap-2 items-center">
          <Select.Root
            defaultValue={genreType}
            onValueChange={(value) => setGenreType(value as GenreType)}
          >
            <Select.SelectTrigger placeholder="Select type" />
            <Select.SelectContent
              groups={[
                {
                  label: "Type",
                  options: [
                    {
                      label: "Movies",
                      value: "movies",
                    },
                    {
                      label: "TV",
                      value: "tv",
                    },
                  ],
                },
              ]}
            />
          </Select.Root>

          <GenreSelect type={genreType} />

          {/* <p className="cursor-not-allowed opacity-50 text-sm">
            More filters...
          </p> */}
        </div>
        <Button>Give me a recommendation!</Button>
      </div>
    </DefaultLayout>
  );
};
