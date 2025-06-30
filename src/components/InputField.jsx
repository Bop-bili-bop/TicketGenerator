import { useDropzone } from "react-dropzone";
import { useState, useRef, useEffect } from "react";
import iconUpload from "../assets/images/icon-upload.svg";

const InputField = ({
  label,
  hint,
  disabled = false,
  error,
  id,
  dragNDrop,
  name,
  setValue,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [preview, setPreview] = useState(null);
  const hiddenInputRef = useRef(null);

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

  const { getRootProps, getInputProps } = useDropzone({
    disabled: !dragNDrop,
    multiple: false,
    onDrop: (files) => {
      const dt = new DataTransfer();
      files.forEach((file) => dt.items.add(file));
      if (hiddenInputRef.current) {
        hiddenInputRef.current.files = dt.files;
      }

      setValue?.("photoAvatar", dt.files, { shouldValidate: true });

      const file = files[0];
      if (file?.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(file));
      } else {
        setPreview(null);
      }
    },
  });

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="text-white group">
      {label && (
        <label htmlFor={id} className="text-lg block mb-1">
          {label}
        </label>
      )}

      <div
        {...(dragNDrop ? getRootProps() : {})}
        className={`flex bg-neutral-400/15 backdrop-blur-md hover:cursor-pointer justify-center items-center rounded-xl 
          ${
            dragNDrop
              ? "border-2 border-dashed focus:border-custom-neutral-500 focus:outline-none backdrop-blur-md h-28 flex-col gap-2"
              : "h-12"
          } 
          ${
            isFocused
              ? "ring-1 ring-offset-2 ring-offset-black ring-neutral-300/85"
              : error
              ? "border-red-500 ring ring-red-500/30"
              : "border border-neutral-400/50 group-hover:bg-neutral-400/40 hover:cursor-pointer transition-colors"
          }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {dragNDrop ? (
          <>
            <div className="w-[50px] h-[50px] border-2 border-custom-neutral-700 group-hover:border-custom-neutral-500 backdrop-blur-2xl rounded-xl flex items-center justify-center bg-custom-neutral-700/10">
              <img
                src={preview || iconUpload}
                alt={preview ? "preview" : "upload"}
                className={
                  preview ? "w-full h-full rounded-xl" : "w-[30px] h-[30px]"
                }
              />
            </div>

            <div>
              <input
                type="file"
                name={name}
                ref={hiddenInputRef}
                disabled={disabled}
                style={{ opacity: 0 }}
                {...getInputProps()}
              />
              {preview ? (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setValue(name, null, { shouldValidate: true });
                      if (hiddenInputRef.current)
                        hiddenInputRef.current.value = "";
                    }}
                    className="px-3 py-1 text-custom-neutral-300 font text-xs rounded-md hover:underline underline-offset-4 bg-white/10 transition"
                  >
                    Remove image
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      hiddenInputRef.current?.click();
                    }}
                    className="px-3 py-1 text-custom-neutral-300 text-xs rounded-md hover:underline underline-offset-4 bg-white/10 transition"
                  >
                    Change image
                  </button>
                </div>
              ) : (
                <p className="text-center text-sm text-custom-neutral-300">
                  Drag and drop or click to upload
                </p>
              )}
            </div>
          </>
        ) : (
          <input
            id={id}
            name={name}
            disabled={disabled}
            className="text-lg w-full px-2 py-4 focus:outline-none hover:cursor-pointer rounded-xl"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
          />
        )}
      </div>

      {(hint || error) && (
        <div className="mt-2 text-xs flex items-center">
          <IconInfo
            className={
              error ? "text-red-600 h-5 w-5" : "text-neutral-200/80 h-5 w-5"
            }
          />{" "}
          {error ? (
            <p className="pl-2 text-red-600">{error}</p>
          ) : (
            <p className="pl-2 text-neutral-400">{hint}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
