import { useState } from "react";

interface Props {
  onFileSelect: (file: File) => void;
  enablePreview?: boolean;
  className?: string;
  disabled?: boolean;
}
const FileUploader = ({
  className,
  enablePreview = false,
  onFileSelect,
  disabled,
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
      className={`${className} flex flex-col items-center justify-center p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50`}
    >
      <label
        htmlFor="fileInput"
        className={`${
          disabled ? "cursor-not-allowed" : "cursor-pointer hover:underline"
        } text-center text-blue-600 truncate`}
      >
        {selectedFile
          ? `Selected: ${selectedFile.name}`
          : "Click to upload a file"}
      </label>
      <input
        disabled={disabled}
        id="fileInput"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      {enablePreview && previewUrl && previewUrl.length > 0 && (
        <img width={100} src={previewUrl} alt="Preview" />
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
