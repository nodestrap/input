import { default as React } from 'react';
import { EditableTextControlProps } from '@nodestrap/editable-text-control';
export declare const inputElm = ":first-child";
export declare const usesInputLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesInputVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesInputStates: () => import("@cssfn/cssfn").Rule;
export declare const useInputSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    backgGrad: string[][];
}>, cssDecls: import("@cssfn/css-config").Decls<{
    backgGrad: string[][];
}>, cssVals: import("@cssfn/css-config").Vals<{
    backgGrad: string[][];
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export declare type InputTextLike = 'text' | 'search' | 'password' | 'email' | 'tel' | 'url' | 'number' | 'time' | 'week' | 'date' | 'datetime-local' | 'month';
export declare type InputType = InputTextLike | 'color' | 'file' | 'range';
export declare type InputHTMLAttributes<TElement> = Omit<React.InputHTMLAttributes<TElement>, 'size' | 'src' | 'alt' | 'width' | 'height' | 'crossOrigin' | 'checked' | 'multiple' | 'accept' | 'capture' | 'formAction' | 'formEncType' | 'formMethod' | 'formNoValidate' | 'formTarget' | keyof React.HTMLAttributes<TElement>>;
export interface InputProps extends EditableTextControlProps<HTMLInputElement>, InputHTMLAttributes<HTMLInputElement> {
    min?: string | number;
    max?: string | number;
    step?: string | number;
    pattern?: string;
    type?: InputType;
    placeholder?: string;
    autoComplete?: string;
    list?: string;
}
export declare function Input(props: InputProps): JSX.Element;
export { Input as default };
export declare function TextInput(props: InputProps): JSX.Element;
export declare namespace TextInput {
    var prototype: any;
}
export declare function SearchInput(props: InputProps): JSX.Element;
export declare namespace SearchInput {
    var prototype: any;
}
export declare function PasswordInput(props: InputProps): JSX.Element;
export declare namespace PasswordInput {
    var prototype: any;
}
export declare function EmailInput(props: InputProps): JSX.Element;
export declare namespace EmailInput {
    var prototype: any;
}
export declare function TelInput(props: InputProps): JSX.Element;
export declare namespace TelInput {
    var prototype: any;
}
export declare function UrlInput(props: InputProps): JSX.Element;
export declare namespace UrlInput {
    var prototype: any;
}
export declare function NumberInput(props: InputProps): JSX.Element;
export declare namespace NumberInput {
    var prototype: any;
}
export declare function TimeInput(props: InputProps): JSX.Element;
export declare namespace TimeInput {
    var prototype: any;
}
export declare function WeekInput(props: InputProps): JSX.Element;
export declare namespace WeekInput {
    var prototype: any;
}
export declare function DateInput(props: InputProps): JSX.Element;
export declare namespace DateInput {
    var prototype: any;
}
export declare function DateTimeInput(props: InputProps): JSX.Element;
export declare namespace DateTimeInput {
    var prototype: any;
}
export declare function MonthInput(props: InputProps): JSX.Element;
export declare namespace MonthInput {
    var prototype: any;
}
export { TextInput as Text, SearchInput as Search, PasswordInput as Password, EmailInput as Email, TelInput as Tel, UrlInput as Url, NumberInput as Number, TimeInput as Time, WeekInput as Week, DateInput as Date, DateTimeInput as DateTime, MonthInput as Month, };
