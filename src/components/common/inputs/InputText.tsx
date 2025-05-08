import {
  JSX,
  ChangeEventHandler,
  KeyboardEventHandler,
  FocusEventHandler,
} from 'react';

interface Props {
  placeholder: string;
  onChange?: ChangeEventHandler<any>;
  onKeyUp?: KeyboardEventHandler<any>;
  onBlur?: FocusEventHandler<any>;
  onFocus?: FocusEventHandler<any>;
  maxLength?: number;
  minLength?: number;
  classCss?: string;
  value?: string;
  ref?: any;
  autoFocus?: boolean;
}
const InputText = ({
  placeholder,
  onChange,
  onKeyUp,
  onBlur,
  onFocus,
  maxLength,
  minLength,
  classCss,
  value,
  ref,
  autoFocus,
}: Props): JSX.Element => {
  // const className = `block w-full px-3 py-2 placeholder-gray-600 border-b-1 border-gray-400 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo my-2 ${classCss}`;

  const className = `${!classCss ? '' : classCss}`;

  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      onFocus={onFocus}
      maxLength={maxLength}
      minLength={minLength}
      value={value}
      ref={ref}
      autoFocus={autoFocus}
    />
  );
};

export default InputText;
