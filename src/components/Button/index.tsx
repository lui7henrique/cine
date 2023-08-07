import { ComponentPropsWithoutRef } from "react";
import { StageSpinner } from "react-spinners-kit";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  isLoading?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { isLoading } = props;

  const className =
    "bg-pink-600 px-4 py-2 text-zinc-200 rounded-md hover:bg-pink-700 transition-all text-[16px] h-[40px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";

  if (isLoading) {
    return (
      <button className={className} disabled>
        <StageSpinner size={18} />
      </button>
    );
  }

  return <button className={className} {...props} />;
};
