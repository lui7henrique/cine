import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

type SelectTriggerProps = { placeholder: string };

export const SelectTrigger = (props: SelectTriggerProps) => {
  const { placeholder } = props;

  return (
    <SelectPrimitive.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[16px] leading-none h-[40px] gap-[5px] bg-zinc-900 text-zinc-200 shadow-[0_2px_10px] shadow-black/10 hover:bg-zinc-800  data-[placeholder]:text-zinc-500 outline-none border-none"
      aria-label="Food"
    >
      <SelectPrimitive.Value placeholder={placeholder} />

      <SelectPrimitive.Icon className="text-zinc-500">
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};
