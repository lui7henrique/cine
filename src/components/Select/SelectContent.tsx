import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectItem } from "./SelectItem";

export type SelectOption = {
  value: string | number;
  label: string;
};

export type SelectContentGroup = {
  label: string;
  options: Array<SelectOption>;
};

type SelectContentProps = {
  groups: Array<SelectContentGroup>;
};

export const SelectContent = (props: SelectContentProps) => {
  const { groups } = props;

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className="overflow-hidden bg-zinc-900 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-[25px] bg-zic-900 text-zinc-500 cursor-default">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport className="p-[5px] flex flex-col divide-y">
          {groups.map((group) => {
            return (
              <SelectPrimitive.Group key={group.label}>
                <SelectPrimitive.Label className="px-[25px] text-xs leading-[25px] text-zinc-700">
                  {group.label}
                </SelectPrimitive.Label>
                {group.options.map((option) => {
                  return (
                    <SelectItem value={option.value} key={option.value}>
                      {option.label}
                    </SelectItem>
                  );
                })}
              </SelectPrimitive.Group>
            );
          })}
        </SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-[25px] bg-zinc-900 text-pink-500 cursor-default">
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};
