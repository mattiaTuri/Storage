import { TFunction } from "i18next";
import { User } from "./User";
import { ReactNode } from "react";

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
    title:string;
    addFunction: () => void;
    children:ReactNode;
}

export interface TextInputProps{
    id: string;
    label:string;
    name: string;
    onChange: (e:any) => void;
    autofocus: boolean;
}

export interface CustomButtonProps {
    id: string;
    title: string;
    functionClick: () => void;
    children?: ReactNode;
    disabled?: boolean;
}

export interface LoaderProps {
    size: number;
    color: string;
}

export interface MenuLinkProps {
    id: string;
    href: string;
    link: string;
    fontSize: number;
    children: ReactNode;
    clickFunction: () => void;
}