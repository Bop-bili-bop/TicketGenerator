import { useState } from "react";
import { ReactComponent as iconInfo } from "../assets/images/icon-info.svg";

const InputField = ({
  label,
  hint,
  disabled = false,
  error,
  icon,
  select,
  defaultOption,
  selectOptions,
  id,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-4 text-white ">
      {label && (
        <label htmlFor={id} className="block mb-1">
          {label}
        </label>
      )}

      <div
        className={`flex bg-neutral-400/15 items-center border px-2 py-2 rounded-lg border-neutral-400/50 hover:bg-neutral-400/40 hover:cursor-pointer transition-colors  ${
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
        {select ? (
          <select
            id={id}
            className="text-base focus:outline-none w-full rounded-md border-neutral-300 text-neutral-500"
            disabled={disabled}
            {...rest}
          >
            <option value="">{defaultOption}</option>
            {selectOptions.map((option) => (
              <option key={option.code} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            className="text-base w-full focus:outline-none hover:cursor-pointer"
            disabled={disabled}
            {...rest}
          />
        )}
      </div>
      {(hint || error) && (
        <div className="mt-2 text-sm flex items-center">
          <IconInfo
            className={`
        h-5 w-5 fill-current
        ${error ? "text-red-600" : "text-neutral-200/80"}
      `}
          />
          {hint && <p className="pl-2">{hint}</p>}
          {error && <p className="pl-2 text-red-600">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default InputField;
