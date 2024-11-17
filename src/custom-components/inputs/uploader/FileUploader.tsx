import { useState } from "react";

interface Props {
  width?: number;
  height?: number;
  onFileSelect: (file: File) => void;
  enablePreview?: boolean;
}
const FileUploader = ({
  width = 200,
  height = 200,
  enablePreview = false,
  onFileSelect,
}: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{ width: width, height: height }}
      className="flex flex-col items-center justify-center p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50"
    >
      <label
        htmlFor="fileInput"
        className="cursor-pointer text-center text-blue-600 hover:underline"
      >
        {selectedFile
          ? `Selected: ${selectedFile.name}`
          : "Click to upload a file"}
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      {enablePreview && previewUrl && previewUrl.length > 0 && (
        <img
          width={100}
          src={previewUrl}
          alt="Preview"
        />
      )}

      {!enablePreview && selectedFile && (
        <p className="mt-2 text-sm text-gray-500">
          File size: {(selectedFile.size / 1024).toFixed(2)} KB
        </p>
      )}
    </div>
  );
};

export default FileUploader;
