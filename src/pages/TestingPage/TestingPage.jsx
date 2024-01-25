import "./TestingPage.scss";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
const TestingPage = () => {
  const [myFiles, setMyFiles] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log("drop");
      setMyFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [myFiles]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
      </aside>
      <button
        onClick={() => {
          console.log(myFiles);
        }}>
        click
      </button>
    </section>
  );
};

export default TestingPage;
