import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Case, Default, Switch } from "react-if";

const FileInput: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const handleAddFiles = useCallback(() => {
    open();
  }, [open]);

  const handleDeleteFile = useCallback((fileToDelete: File) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  }, []);

  return (
    <section className="container mx-auto">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div className="flex items-center justify-start flex-row flex-wrap gap-2 border-2 border-dashed border-primary rounded-md p-2 w-full max-w-xs">
          <Switch>
            <Case condition={files.length > 0}>
              {files.map((file) => (
                <div
                  key={file.name}
                  className="w-28 h-28 rounded-lg p-2 cursor-pointer"
                >
                  <img
                    className="w-full h-auto rounded-lg after:bg-red-500 relative after:absolute after:top-0 after:left-0 after:z-50"
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                  />
                </div>
              ))}
            </Case>
            <Default>
              <p>Please drop or select files from your local machine:</p>
            </Default>
          </Switch>
        </div>
      </div>
      <aside className="mt-4">
        <button
          type="button"
          onClick={handleAddFiles}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Add More Files
        </button>
      </aside>
    </section>
  );
};

export default FileInput;

