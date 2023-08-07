import { Movie, TV } from "src/services/tmbd/types";
import { ResultCardPoster, ResultCardPosterSkeleton } from "./Poster";
import { ResultCardHeader, ResultCardHeaderSkeleton } from "./Header";

type ResultCardProps = {
  result: TV | Movie;
};

export const ResultCard = (props: ResultCardProps) => {
  const { result } = props;

  if ((result as TV).name) {
    const { name, vote_average } = result as TV;
    const poster = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;

    return (
      <div className="flex flex-col gap-2">
        <ResultCardHeader title={name} rating={vote_average} />
        <ResultCardPoster alt={name} src={poster} />
      </div>
    );
  }

  if ((result as Movie).title) {
    const { title, vote_average } = result as Movie;
    const poster = `https://image.tmdb.org/t/p/w500/${result.poster_path}`;

    return (
      <div className="flex flex-col gap-2">
        <ResultCardHeader title={title} rating={vote_average} />
        <ResultCardPoster alt={title} src={poster} />
      </div>
    );
  }
};

export const ResultCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <ResultCardHeaderSkeleton />
      <ResultCardPosterSkeleton />
    </div>
  );
};
