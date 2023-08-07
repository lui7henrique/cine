import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-pink-600 px-4 py-2 text-zinc-200 rounded-md hover:bg-pink-700 transition-all text-[16px] h-[40px]"
      {...props}
    />
  );
};
