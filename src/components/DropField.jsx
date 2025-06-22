import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = (props) => {
  const { required, name } = props;

  const hiddenInputRef = useRef(null);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    onDrop: (incomingFiles) => {
      if (hiddenInputRef.current) {
        const dataTransfer = new DataTransfer();
        incomingFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div
      className="container flex justify-center items-center text-center text-white border-2 border-dashed border-[#8784A5] bg-[#201B3D] hover:bg-[#3D3957]  rounded-xl cursor-pointer"
    >
      <div {...getRootProps({ className: "dropzone" })}>
        <input
          type="file"
          name={name}
          required={required}
          className="p-4 hover:cursor-pointer "
          style={{ opacity: 0 }}
          ref={hiddenInputRef}
        />
        <input {...getInputProps()} />
        <button type="button" onClick={open} className="">
          Drag and drop or click to Upload
        </button>
      </div>
    </div>
  );
};

export default Dropzone;
