import Image from "next/image";
import { useState } from "react";

type ResultCardPosterProps = {
  src: string;
  alt: string;
};

export const ResultCardPoster = (props: ResultCardPosterProps) => {
  const { alt, src } = props;

  return (
    <div className="aspect-[2/3] relative w-full rounded-lg overflow-hidden">
      <Image src={src} fill alt={alt} objectFit="cover" />
    </div>
  );
};

export const ResultCardPosterSkeleton = () => {
  return (
    <div className="aspect-[2/3] relative w-full rounded-lg overflow-hidden">
      <div className="bg-zinc-900 w-full h-full animate-pulse" />
    </div>
  );
};
