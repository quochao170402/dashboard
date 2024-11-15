import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
const useProject = () => {
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    totalPage: 10,
  });

  const columns: Array<ColumnProps<IProject>> = [
    {
      key: "id",
      header: "Index",
      width: 100,
      align: "center",
      render: (_value, _row, rowIndex) => {
        return <>{rowIndex + 1}</>;
      },
    },
    {
      key: "name",
      header: "Name",
      width: 500,
      align: "left",
      render: (_value, _row) => {
        return (
          <>
            <div className="flex gap-4">
              {_row.logo && <img width={24} height={24} src={_row.logo} />}
              {_row.name}
            </div>
          </>
        );
      },
    },
    { key: "key", header: "Key", width: 200, align: "left" },
    { key: "type", header: "Type", width: 150, align: "left" },
    { key: "lead", header: "Lead", width: 200, align: "left" },
    { key: "category", header: "Category", width: 150, align: "left" },
    { key: "url", header: "URL", width: 250, align: "left" },
    {
      header: "",
      width: 100,
      align: "center",

      render: (_value, _row) => {
        return (
          <div className="flex gap-3 items-center justify-center">
            <button onClick={handleUpdate}>
              <SquarePen size={18} color="#0c66e4" />
            </button>
            <button onClick={handleDelete}>
              <Trash2 size={18} color="red" />
            </button>
          </div>
        );
      },
    },
  ];

  const data: Array<IProject> = [
    {
      id: "1",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyf8GY7aK04OO2yxK_5varGDG6u-_E9KZ_A&s",
      name: "Project Alpha",
      key: "PA",
      type: "Type A",
      lead: "Alice",
      category: "Category 1",
      url: "http://example.com/1",
    },
    {
      id: "2",
      name: "Project Beta",
      key: "PB",
      type: "Type B",
      lead: "Bob",
      category: "Category 2",
      url: "http://example.com/2",
    },
    {
      id: "3",
      name: "Project Charlie",
      key: "PC",
      type: "Type C",
      lead: "Charlie",
      category: "Category 3",
      url: "http://example.com/3",
    },
  ];

  const handleDelete = () => {
    console.log("Action delete");
  };

  const handleUpdate = () => {
    console.log("Update");
  };

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, current: page });
  };

  return {
    pagination,
    columns,
    data,
    handlePageChange,
    handleDelete,
    handleUpdate,
  };
};

export default useProject;
