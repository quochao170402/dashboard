import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";

const generateRecords = () => {
  const records = [];
  for (let i = 1; i <= 412; i++) {
    records.push({
      id: i.toString(),
      name: `Project ${String.fromCharCode(64 + i)}`, // Generates Project A, Project B, etc.
      key: `P${String.fromCharCode(64 + i)}`, // Generates keys like PA, PB, etc.
      type: `Type ${String.fromCharCode(64 + (i % 3) + 65)}`, // Cycles through Type A, Type B, Type C
      lead: `Lead ${String.fromCharCode(64 + i)}`, // Generates Lead A, Lead B, etc.
      category: `Category ${((i - 1) % 5) + 1}`, // Cycles through Category 1 to Category 5
      url: `http://example.com/${i}`, // Generates URLs like http://example.com/1
    } as IProject);
  }
  return records;
};

// const data: Array<IProject> = [
//   {
//     id: "1",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyf8GY7aK04OO2yxK_5varGDG6u-_E9KZ_A&s",
//     name: "Project Alpha",
//     key: "PA",
//     type: "Type A",
//     lead: "Alice",
//     category: "Category 1",
//     url: "http://example.com/1",
//   },
//   {
//     id: "2",
//     name: "Project Beta",
//     key: "PB",
//     type: "Type B",
//     lead: "Bob",
//     category: "Category 2",
//     url: "http://example.com/2",
//   },
//   {
//     id: "3",
//     name: "Project Charlie",
//     key: "PC",
//     type: "Type C",
//     lead: "Charlie",
//     category: "Category 3",
//     url: "http://example.com/3",
//   },
//   {
//     id: "4",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDyf8GY7aK04OO2yxK_5varGDG6u-_E9KZ_A&s",
//     name: "Project Alpha",
//     key: "PA",
//     type: "Type A",
//     lead: "Alice",
//     category: "Category 1",
//     url: "http://example.com/1",
//   },
//   {
//     id: "5",
//     name: "Project Beta",
//     key: "PB",
//     type: "Type B",
//     lead: "Bob",
//     category: "Category 2",
//     url: "http://example.com/2",
//   },
//   {
//     id: "6",
//     name: "Project Charlie",
//     key: "PC",
//     type: "Type C",
//     lead: "Charlie",
//     category: "Category 3",
//     url: "http://example.com/3",
//   },
// ];

const useProject = () => {
  const dummyData = generateRecords();
  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    totalItems: dummyData.length,
  });
  const data = dummyData.slice(pagination.current , pagination.current);

  const handleDelete = () => {
    console.log("Action delete");
  };

  const handleUpdate = () => {
    console.log("Update");
  };

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, current: page });
  };

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

  return {
    pagination,
    columns,
    dummyData,
    handlePageChange,
    handleDelete,
    handleUpdate,
  };
};

export default useProject;
