import { DefaultLayout } from "src/layout/Default";
import { HomeActions } from "./Actions";
import { useCallback, useState } from "react";
import { Type } from "./GenreSelect";
import { tmbd } from "src/services/tmbd";

import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "./types";
import { Movie, TV } from "src/services/tmbd/types";
import Image from "next/image";
import { ResultCard, ResultCardSkeleton } from "src/components/ResultCard";

type Results = Movie[] | TV[];

export const HomeTemplate = () => {
  const [results, setResults] = useState<Results>([]);

  const methods = useForm<FormType>({
    defaultValues: {
      type: "movies",
      quantity: "3",
    },
  });

  const quantity = methods.watch("quantity");

  const fetchResults = useCallback(async (data: FormType) => {
    const request: Record<
      Type,
      (typeof tmbd)["discover"]["movie"] | (typeof tmbd)["discover"]["tv"]
    > = {
      movies: tmbd.discover.movie,
      tv: tmbd.discover.tv,
    };

    const { genre, type } = data;
    const genreId = genre?.split("-")[1];

    const { results } = await request[type]({ genreId });
    setResults(results);
  }, []);

  return (
    <DefaultLayout>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(fetchResults)}
          className="flex flex-col md:flex-row gap-2 my-4 justify-between"
        >
          <HomeActions />
        </form>
      </FormProvider>

      {methods.formState.isSubmitting ? (
        <div className="grid grid-cols-3 gap-4 mt-8">
          {Array.from({ length: 3 }).map((_, index) => {
            return <ResultCardSkeleton key={index} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-8">
          {results.slice(0, Number(quantity)).map((result) => {
            return <ResultCard result={result} key={result.id} />;
          })}
        </div>
      )}
    </DefaultLayout>
  );
};
