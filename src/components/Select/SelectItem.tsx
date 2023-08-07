import React from "react";
import classnames from "classnames";
import * as SelectPrimitive from "@radix-ui/react-select";

import { CheckIcon } from "@radix-ui/react-icons";

// eslint-disable-next-line react/display-name
export const SelectItem = React.forwardRef<
  SelectPrimitive.SelectItemProps & HTMLDivElement,
  any
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item
      className={classnames(
        "text-[13px] leading-none text-zinc-500 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-zinc-600 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-zinc-800 data-[highlighted]:text-zinc-400 cursor-pointer",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});
