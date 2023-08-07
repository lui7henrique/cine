import { Button } from "src/components/Button";
import { Select } from "src/components/Select";
import { GenreSelect, Type } from "./GenreSelect";
import { useFormContext, Controller } from "react-hook-form";
import { FormType } from "./types";

export const HomeActions = () => {
  const {
    formState: { isSubmitting },
    control,
  } = useFormContext<FormType>();

  return (
    <>
      <div className="flex gap-2 items-center">
        <Controller
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <Select.Root onValueChange={field.onChange} defaultValue="movies">
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
            );
          }}
        />

        <GenreSelect />
      </div>

      <Button type="submit" isLoading={isSubmitting}>
        Give me a recommendation!
      </Button>
    </>
  );
};
