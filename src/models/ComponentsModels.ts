import { TFunction } from "i18next";
import { User } from "./User";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { SelectChangeEvent } from "@mui/material";

export interface StatisticsNumberBoxProps {
  title: string;
  tab: string;
  link: string;
  data: number;
  loading: boolean;
  primaryColor: string;
  secondaryColor: string;
}

export interface SliderThemeProps {
  t: TFunction;
  user: User;
}

export interface InputSettingsProps {
  id: string;
  labelText: string;
  inputValue: string;
}

export interface LanguageSelectProps {
  t: TFunction;
  user: User;
}

export interface ModalProps {
  title: string;
  btnId: string;
  btnTitle: string;
  btnFunction: (e: SelectChangeEvent) => void;
  children: ReactNode;
  open: boolean;
  initialValues: any;
  setValues?: Dispatch<SetStateAction<any>>;
  closeFunction: () => void;
}

export interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange: (e: any) => void;
  autofocus: boolean;
  labelError?: string;
  errorVisibility?: boolean;
}

export interface SelectProps {
  id: string;
  label: string;
  selectLabel: string;
  fixedLabel: boolean;
  name: string;
  value?: string | string[];
  onChange: (e: any) => void;
  labelError?: string;
  errorVisibility?: boolean;
  objList: any[];
  saveIconLoading?: boolean;
  multiple: boolean;
}

export interface CustomButtonProps {
  id: string;
  title?: string;
  functionClick: (e: any) => void;
  children?: ReactNode;
  disabled?: boolean;
}

export interface LoaderProps {
  size: number;
  color: string;
}

export interface SidebarLinkProps {
  id: string;
  href: string;
  link: string;
  fontSize: number;
  children: ReactNode;
  clickFunction: () => void;
}

export interface TableFilterProps {
  multipleGenre: string[];
  setMultipleGenre: Dispatch<SetStateAction<string[]>>;
}

export interface RatingStarsProps {
  starsValue?: number;
  functionChange?: (e: any) => void;
}
