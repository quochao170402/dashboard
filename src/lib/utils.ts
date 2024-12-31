import { Datatype } from "@/@types/Enums";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DatatypeAliases: Record<Datatype, string> = {
  [Datatype.Text]: "Text",
  [Datatype.TextArea]: "Text Area",
  [Datatype.Number]: "Number",
  [Datatype.Decimal]: "Decimal",
  [Datatype.DateTime]: "Date Time",
  [Datatype.TimeSpan]: "Time Span",
  [Datatype.Boolean]: "Boolean",
  [Datatype.RadioButton]: "Radio Button",
  [Datatype.SelectList]: "Select List",
  [Datatype.File]: "File",
  [Datatype.MultiSelect]: "Multi Select",
  [Datatype.Person]: "Person",
};

export const getAllDatatypeAliases = () => {
  return Object.entries(DatatypeAliases).map(([key, alias]) => ({
    value: Number(key),
    alias,
  }));
};
