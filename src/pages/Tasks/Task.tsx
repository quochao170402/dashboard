const Task = () => {
  const handleClick = () => {
    console.log("🚀 ~ handleClick :>> ");
  };
  return (
    <div className="w-full h-full flex flex-col gap-4 items-end">
      {/* <ToastMessage onClick={handleClick} message={"Success"} type="success" />
      <ToastMessage onClick={handleClick} message={"Info"} type="info" />
      <ToastMessage onClick={handleClick} message={"Waring"} type="warning" />
      <ToastMessage onClick={handleClick} message={"Error"} type="error" /> */}
    </div>
  );
};

export default Task;
