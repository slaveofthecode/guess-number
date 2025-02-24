import { JSX, ChangeEventHandler, KeyboardEventHandler } from 'react';

interface Props {
  placeholder: string;
  onChange?: ChangeEventHandler<any>;
  onKeyUp?: KeyboardEventHandler<any>;
  maxLength?: number;
  minLength?: number;
  classCss?: string;
  value?: string;
}
const InputText = ({
  placeholder,
  onChange,
  onKeyUp,
  maxLength,
  minLength,
  classCss,
  value,
}: Props): JSX.Element => {
  const className = `block w-full px-3 py-2 placeholder-gray-600 border-b-1 border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo my-2 ${classCss}`;

  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      maxLength={maxLength}
      minLength={minLength}
      value={value}
    />
  );
};

export default InputText;
