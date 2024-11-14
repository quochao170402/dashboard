import Pagination from "@/custom-components/pagination/Pagination";
import Table from "@/custom-components/table/Table";
import Title from "@/custom-components/title/Title";

const Project = () => {
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
    { key: "name", header: "Name", width: 500, align: "left" },
    { key: "key", header: "Key", width: 200, align: "left" },
    { key: "type", header: "Type", width: 150, align: "left" },
    { key: "lead", header: "Lead", width: 200, align: "left" },
    { key: "category", header: "Category", width: 150, align: "left" },
    { key: "url", header: "URL", width: 250, align: "left" },
  ];

  const dummyData: Array<IProject> = [
    {
      id: "1",
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

  return (
    <div>
      <Title className="mb-4" title={"Project"} />
      <div>
        <Table border={false} data={dummyData} columns={columns} />
        <Pagination
          totalPage={10}
          currentPage={2}
          onPageChange={() => {}}
          pageSize={100}
        />
      </div>
    </div>
  );
};

export default Project;