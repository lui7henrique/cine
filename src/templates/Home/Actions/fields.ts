import {
  SelectContentGroup,
  SelectOption,
} from "src/components/Select/SelectContent";
import { FormType } from "../types";

type Field = {
  basic: boolean;
  name: keyof FormType;
  type: "select";
  placeholder: string;
  groups: Array<SelectContentGroup>;
  defaultValue?: string;
};

type Fields = Array<Field>;

export const fields: Fields = [
  {
    basic: true,
    type: "select",
    name: "quantity",
    placeholder: "Quantity",
    defaultValue: "3",
    groups: [
      {
        label: "Quantity",
        options: Array.from({
          length: 20,
        }).map((_, index) => {
          return {
            label: String(index + 1),
            value: String(index + 1),
          };
        }),
      },
    ],
  },
  {
    basic: true,
    type: "select",
    name: "type",
    placeholder: "Type",
    defaultValue: "movies",
    groups: [
      {
        label: "Type",
        options: [
          {
            label: "Movies",
            value: "movies",
          },
          {
            label: "TV",
            value: "tv",
          },
        ],
      },
    ],
  },
  {
    basic: false,
    type: "select",
    name: "release_year",
    placeholder: "Release year",
    groups: [
      {
        label: "Release year",
        options: Array.from({
          length: 100,
        }).map((_, index) => {
          return {
            label: String(new Date().getFullYear() - index),
            value: String(new Date().getFullYear() - index),
          };
        }),
      },
    ],
  },
  {
    basic: false,
    type: "select",
    name: "vote_average",
    placeholder: "Vote average",
    groups: [
      {
        label: "Vote average",
        options: Array.from({
          length: 11,
        }).map((_, index) => {
          return {
            label: String(index),
            value: String(index),
          };
        }),
      },
    ],
  },
];
