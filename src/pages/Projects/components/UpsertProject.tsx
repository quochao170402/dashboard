import FileUploader from "@/custom-components/inputs/uploader/FileUploader";
import Title from "@/custom-components/title/Title";

const UpsertProject = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-2">
        <Title className="mb-4" title={"Add new Project"} />
      </div>
      {/* Form */}
      <div className="grid grid-flow-col grid-cols-2 items-center gap-4">
        {/* Top */}

        {/* Left */}
        <div className="h-full w-full">
          <FileUploader
            enablePreview
            onFileSelect={(file) => console.log(file)}
          />
          {/* <MultipleFileUploader
              onFileSelect={(files) => {
                console.log("files.length", files.length);
              }} 
            /> */}
        </div>

        {/* Right */}
        <div className="grid grid-flow-row grid-rows-3 gap-4">
          <input
            placeholder="Name"
            type="text"
            className="p-2 border rounded-md"
          />
          <input
            placeholder="Type"
            type="text"
            className="p-2 border rounded-md"
          />
          <input
            placeholder="Category"
            type="text"
            className="p-2 border rounded-md"
          />
        </div>

        {/* Bottom */}
      </div>
    </div>
  );
};

export default UpsertProject;
