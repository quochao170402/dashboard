import { useState } from "react";

interface Props {
  onFileSelect: (files: File[]) => void;
}
const MultipleFileUploader = ({ onFileSelect }: Props) => {
  const [selectedFiles, setSelectedFile] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    if (files) {
      setSelectedFile(files);
      onFileSelect(files);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50">
      <label
        htmlFor="fileInput"
        className="cursor-pointer text-center text-blue-600 hover:underline"
      >
        {selectedFiles.length > 0
          ? `Selected ${selectedFiles.length} file(s)`
          : "Click to upload files"}
      </label>
      <input
        id="fileInput"
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      {selectedFiles.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-gray-500">
          {selectedFiles.map((file, index) => (
            <li key={index}>
              {file.name} - {(file.size / 1024).toFixed(2)} KB
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultipleFileUploader;
