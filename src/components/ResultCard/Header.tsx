type ResultCardHeaderProps = {
  title: string;
  rating: number;
};

export const ResultCardHeader = (props: ResultCardHeaderProps) => {
  const { rating, title } = props;

  return (
    <div className="w-full flex justify-between gap-4 items-center">
      <h3 className="whitespace-nowrap truncate font-bold text-zinc-200 text-md">
        {title}
      </h3>

      <h6 className="text-sm font-bold text-zinc-600">{rating}</h6>
    </div>
  );
};

export const ResultCardHeaderSkeleton = () => {
  return (
    <div className="w-full flex justify-between gap-4 items-center">
      <div className="bg-zinc-900 w-2/3 h-[24px] rounded-lg animate-pulse" />
      <div className="bg-zinc-900 w-[24px] h-[24px] rounded-lg animate-pulse" />
    </div>
  );
};
