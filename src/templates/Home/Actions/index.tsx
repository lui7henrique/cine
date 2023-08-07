import { Button } from "src/components/Button";
import { Select } from "src/components/Select";

import { useFormContext, Controller } from "react-hook-form";
import { GenreSelect } from "../GenreSelect";
import { FormType } from "../types";
import { fields } from "./fields";
import { useState } from "react";
import {
  MinusCircle,
  MinusSquare,
  MoreHorizontal,
  PlusCircle,
  PlusSquare,
} from "lucide-react";

export const HomeActions = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const {
    formState: { isSubmitting },
    control,
    setValue,
  } = useFormContext<FormType>();

  const basicFields = fields.filter((field) => field.basic);
  const advancedFields = fields.filter((field) => !field.basic);

  const handleShowLessFields = () => {
    setShowAdvancedFilters(false);

    setValue("release_year", undefined);
    setValue("vote_average", undefined);
  };

  return (
    <div
      className="flex flex-col justify-between w-full gap-2 md:flex-row"
      style={{
        flexDirection: showAdvancedFilters ? "column" : "inherit",
      }}
    >
      <div className="flex w-full flex-wrap gap-2 items-center">
        {basicFields.map((item) => {
          if (item.type === "select") {
            return (
              <Controller
                key={item.name}
                control={control}
                name={item.name}
                render={({ field }) => {
                  return (
                    <Select.Root
                      onValueChange={field.onChange}
                      defaultValue={item.defaultValue}
                    >
                      <Select.SelectTrigger placeholder={item.placeholder} />
                      <Select.SelectContent groups={item.groups} />
                    </Select.Root>
                  );
                }}
              />
            );
          }
        })}

        <GenreSelect />

        {showAdvancedFilters &&
          advancedFields.map((item) => {
            return (
              <Controller
                key={item.name}
                control={control}
                name={item.name}
                render={({ field }) => {
                  return (
                    <Select.Root
                      onValueChange={field.onChange}
                      defaultValue={item.defaultValue}
                    >
                      <Select.SelectTrigger placeholder={item.placeholder} />
                      <Select.SelectContent groups={item.groups} />
                    </Select.Root>
                  );
                }}
              />
            );
          })}

        {showAdvancedFilters ? (
          <div
            className="flex gap-1 items-center text-sm cursor-pointer"
            onClick={handleShowLessFields}
          >
            <MinusCircle size={16} />
            Hide less filters
          </div>
        ) : (
          <div
            className="flex gap-1 items-center text-sm cursor-pointer"
            onClick={() => setShowAdvancedFilters(true)}
          >
            <PlusCircle size={16} />
            Show more filters
          </div>
        )}
      </div>

      <Button type="submit" isLoading={isSubmitting}>
        <PlusCircle size={16} /> Recommendation!
      </Button>
    </div>
  );
};
