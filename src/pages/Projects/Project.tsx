import Table from "@/custom-components/table/Table";

const Project = () => {
  const columns: Array<
    ColumnProps<
      { id: number; name: string; age: number },
      "id" | "name" | "age"
    >
  > = [
    { key: "id", header: "ID", width: 50, align: "center" },
    { key: "name", header: "Name", width: 150, align: "left" },
    { key: "age", header: "Age", width: 100, align: "right" },
  ];

  const dummyData: Array<{ id: number; name: string; age: number }> = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
  ];
  return (
    <div>
      <Table data={dummyData} columns={columns} />
    </div>
  );
};

export default Project;
