import { useState } from "react";

const InputField = ({
  label,
  hint,
  disabled = false,
  error,
  icon,
  id,
  dragDrop,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const IconInfo = ({ className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
      />
      <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.004 10.462V7.596M8 5.569v-.042"
      />
    </svg>
  );

  return (
    <div className="mb-4 text-white ">
      {label && (
        <label htmlFor={id} className="block mb-1">
          {label}
        </label>
      )}

      <div
        className={`flex bg-neutral-400/15 items-center border rounded-xl border-neutral-400/50 hover:bg-neutral-400/40 hover:cursor-pointer transition-colors  ${
          isFocused
            ? "ring-1 ring-offset-2 ring-offset-black ring-neutral-300/85"
            : error
            ? "border-red-500 ring ring-red-500/30"
            : ""
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {icon && <div className="mr-2">{icon}</div>}

        <input
          id={id}
          className="text-base w-full px-2 py-4 focus:outline-none hover:cursor-pointer rounded-xl"
          disabled={disabled}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <div className="mt-2 text-sm flex items-center">
          <IconInfo
            className={`
        h-5 w-5 
        ${error ? "text-red-600" : "text-neutral-200/80"}
      `}
          />
          {hint && <p className="pl-2 text-neutral-400">{hint}</p>}
          {error && <p className="pl-2 text-red-600">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default InputField;
