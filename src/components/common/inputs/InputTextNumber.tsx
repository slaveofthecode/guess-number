import { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface Props {
  placeholder: string;
  onChange?: ChangeEventHandler<any>;
  onKeyUp?: KeyboardEventHandler<any>;
  value?: string;
  maxLength?: number;
  minLength?: number;
  classCss?: string;
}

const InputTextNumber = ({
  placeholder,
  onKeyUp,
  onChange,
  value,
  minLength,
  maxLength,
  classCss,
}: Props) => {
  const className = `block w-full px-3 py-2 placeholder-gray-600 border-b-1 border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo my-2 ${classCss}`;
  return (
    <div>
      <input
        type="text" // Use text type to control the input pattern
        inputMode="numeric" // Hints to mobile browsers to show numeric keyboard
        autoFocus // Optional: Auto focus on page load (for PWA)
        pattern="\d*" // Ensures only numbers can be input
        className={className}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};

export default InputTextNumber;
