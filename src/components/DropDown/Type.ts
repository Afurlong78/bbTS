import { SetStateAction, Dispatch } from "react";

export type CategoryDropDownProps = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};
