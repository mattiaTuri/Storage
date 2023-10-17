import { TFunction } from "i18next";
import { User } from "./User";
import { Dispatch, ReactNode, SetStateAction } from "react";

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
    btnId:string;
    btnTitle:string;
    btnFunction: () => void;
    children:ReactNode;
    open:boolean;
}

export interface InputProps{
    id: string;
    label:string;
    name: string;
    type?:string;
    value?:string;
    onChange: (e:any) => void;
    autofocus: boolean;
    labelError:string;
    errorVisibility:boolean;
}

export interface CustomButtonProps {
    id: string;
    title?: string;
    functionClick: () => void;
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

export interface TableFilterProps{
    genreName: string[];
    setGenreName: Dispatch<SetStateAction<string[]>>;
}

export interface RatingStarsProps {
    starsValue?:number;
    functionChange?:(e:any) => void;
}