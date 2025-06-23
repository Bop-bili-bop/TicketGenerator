import React, { useRef, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import iconUpload from "../assets/images/icon-upload.svg";

const Dropzone = (props) => {
  const { required, name } = props;

  const hiddenInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (files) => {
      // mirror into your hidden input
      if (hiddenInputRef.current) {
        const dt = new DataTransfer();
        files.forEach((f) => dt.items.add(f));
        hiddenInputRef.current.files = dt.files;
      }
      // generate preview URL if it's an image
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
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

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          className={`flex justify-center items-center h-[50px] w-[50px] ${
            !preview &&
            "border-2 border-custom-neutral-700 group-hover:border-custom-neutral-500"
          } bg-white/10 backdrop-blur-2xl rounded-xl  shadow-md`}
        >
          <img
            src={preview || iconUpload}
            alt={preview ? "file-preview" : "icon-upload"}
            className={
              preview ? "rounded-xl border-custom-neutral-700 group-hover:border-custom-neutral-500" : "w-[30px] h-[30px]"
            }
          />
        </div>
        <input
          type="file"
          name={name}
          required={required}
          className="p-4 hover:cursor-pointer "
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
          {...getInputProps()}
        />
        <p className="text-center text-custom-neutral-300">
          Drag and drop or click to Upload
        </p>
      </div>
    </div>
  );
};

export default Dropzone;
