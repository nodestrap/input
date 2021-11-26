// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, vars, children, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { stripoutTextbox, } from '@nodestrap/stripouts';
import { 
// hooks:
usePropEnabled, usePropReadOnly, } from '@nodestrap/accessibilities';
// nodestrap components:
import { 
// hooks:
usesSizeVariant, usesGradientVariant, usesPadding, } from '@nodestrap/basic';
import { 
// styles:
usesEditableTextControlLayout, usesEditableTextControlVariants, usesEditableTextControlStates, EditableTextControl, } from '@nodestrap/editable-text-control';
// styles:
export const inputElm = ':first-child';
export const usesInputLayout = () => {
    // dependencies:
    // spacings:
    const [, paddingRefs] = usesPadding();
    return composition([
        imports([
            // layouts:
            usesEditableTextControlLayout(),
        ]),
        layout({
            // layouts:
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'nowrap',
            // positions:
            verticalAlign: 'baseline',
            // children:
            ...children(inputElm, [
                imports([
                    stripoutTextbox(), // clear browser's default styles
                ]),
                layout({
                    // layouts:
                    display: 'block',
                    // sizes:
                    flex: [[1, 1, '100%']],
                    alignSelf: 'stretch',
                    // strip out the *weird input's prop [size]* so it can follow flex behavior:
                    // span to maximum width including parent's paddings:
                    boxSizing: 'border-box',
                    inlineSize: 'fill-available',
                    fallbacks: {
                        inlineSize: `calc(100% + (${paddingRefs.paddingInline} * 2))`,
                    },
                    // spacings:
                    // cancel-out parent's padding with negative margin:
                    marginInline: `calc(0px - ${paddingRefs.paddingInline})`,
                    marginBlock: `calc(0px - ${paddingRefs.paddingBlock})`,
                    // copy parent's paddings:
                    paddingInline: paddingRefs.paddingInline,
                    paddingBlock: paddingRefs.paddingBlock,
                }),
            ]),
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    ]);
};
export const usesInputVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    // colors:
    const [gradient, , gradientDecls] = usesGradientVariant((toggle) => composition([
        vars({
            // *toggle on/off* the background gradient prop:
            [gradientDecls.backgGradTg]: toggle ? cssProps.backgGrad : ((toggle !== null) ? 'initial' : null),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesEditableTextControlVariants(),
            // layouts:
            sizes(),
            // colors:
            gradient(),
        ]),
    ]);
};
export const usesInputStates = () => {
    return composition([
        imports([
            // states:
            usesEditableTextControlStates(),
        ]),
    ]);
};
export const useInputSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesInputLayout(),
            // variants:
            usesInputVariants(),
            // states:
            usesInputStates(),
        ]),
    ]),
]);
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        backgGrad: [['linear-gradient(180deg, rgba(0,0,0, 0.2), rgba(255,255,255, 0.2))', 'border-box']],
    };
}, { prefix: 'inp' });
export function Input(props) {
    // styles:
    const sheet = useInputSheet();
    // rest props:
    const { 
    // essentials:
    elmRef, 
    // accessibilities:
    autoFocus, tabIndex, enterKeyHint, 
    // values:
    name, form, defaultValue, value, onChange, // forwards to `input[type]`
    // validations:
    required, minLength, maxLength, min, max, step, pattern, 
    // formats:
    type, placeholder, autoComplete, list, ...restProps } = props;
    // fn props:
    const propEnabled = usePropEnabled(props);
    const propReadOnly = usePropReadOnly(props);
    // jsx:
    return (React.createElement(EditableTextControl, { ...restProps, 
        // semantics:
        tag: props.tag ?? 'span', 
        // accessibilities:
        tabIndex: -1, enabled: props.enabled ?? !(props.disabled ?? false), 
        // classes:
        mainClass: props.mainClass ?? sheet.main },
        React.createElement("input", { 
            // essentials:
            ref: elmRef, ...{
                autoFocus,
                tabIndex,
                enterKeyHint,
            }, disabled: !propEnabled, readOnly: propReadOnly, ...{
                name,
                form,
                defaultValue,
                value,
            }, ...{
                required,
                minLength,
                maxLength,
                min,
                max,
                step,
                pattern,
            }, ...{
                type,
                placeholder,
                autoComplete,
                list,
            }, 
            // events:
            onChange: (e) => {
                onChange?.(e);
                // then do nothing here, just for satisfying React for controllable readonly input
                // passing `onChange={undefined}` causing React unhappy
            } })));
}
export { Input as default };
export function TextInput(props) { return React.createElement(Input, { ...props, type: 'text' }); }
export function SearchInput(props) { return React.createElement(Input, { ...props, type: 'search' }); }
export function PasswordInput(props) { return React.createElement(Input, { ...props, type: 'password' }); }
export function EmailInput(props) { return React.createElement(Input, { ...props, type: 'email' }); }
export function TelInput(props) { return React.createElement(Input, { ...props, type: 'tel' }); }
export function UrlInput(props) { return React.createElement(Input, { ...props, type: 'url' }); }
export function NumberInput(props) { return React.createElement(Input, { ...props, type: 'number' }); }
export function TimeInput(props) { return React.createElement(Input, { ...props, type: 'time' }); }
export function WeekInput(props) { return React.createElement(Input, { ...props, type: 'week' }); }
export function DateInput(props) { return React.createElement(Input, { ...props, type: 'date' }); }
export function DateTimeInput(props) { return React.createElement(Input, { ...props, type: 'datetime-local' }); }
export function MonthInput(props) { return React.createElement(Input, { ...props, type: 'month' }); }
// mark as Input compatible:
TextInput.prototype = Input.prototype;
SearchInput.prototype = Input.prototype;
PasswordInput.prototype = Input.prototype;
EmailInput.prototype = Input.prototype;
TelInput.prototype = Input.prototype;
UrlInput.prototype = Input.prototype;
NumberInput.prototype = Input.prototype;
TimeInput.prototype = Input.prototype;
WeekInput.prototype = Input.prototype;
DateInput.prototype = Input.prototype;
DateTimeInput.prototype = Input.prototype;
MonthInput.prototype = Input.prototype;
export { TextInput as Text, SearchInput as Search, PasswordInput as Password, EmailInput as Email, TelInput as Tel, UrlInput as Url, NumberInput as Number, TimeInput as Time, WeekInput as Week, DateInput as Date, DateTimeInput as DateTime, MonthInput as Month, };
