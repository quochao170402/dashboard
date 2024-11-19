import { SquarePen, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import IUpsertProject, { IProjectFilter } from "../common/IUpsertProject";

const generateRecords = () => {
  const records = [];
  for (let i = 1; i <= 412; i++) {
    records.push({
      id: i.toString(),
      name: `Project ${String.fromCharCode(64 + i)}`, // Generates Project A, Project B, etc.
      key: `P${String.fromCharCode(64 + i)}`, // Generates keys like PA, PB, etc.
      type: `Type ${String.fromCharCode(64 + i)}`, // Cycles through Type A, Type B, Type C
      lead: `Lead ${String.fromCharCode(64 + i)}`, // Generates Lead A, Lead B, etc.
      category: `Category ${((i - 1) % 5) + 1}`, // Cycles through Category 1 to Category 5
      url: `http://example.com/${i}`, // Generates URLs like http://example.com/1
    } as IProject);
  }
  return records;
};

const defaultPageSize = 5;

const useProject = () => {
  const [dummyData, setDummyData] = useState<IProject[]>(generateRecords());
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [filter, setFilter] = useState<IProjectFilter>({
    keyword: "",
    type: "",
    category: "",
  });

  const [upsertProjectData, setUpsertProjectData] = useState<IUpsertProject>({
    visible: false,
    updatable: true,
    data: undefined,
  } as IUpsertProject);

  const [pagination, setPagination] = useState<Pagination>({
    current: 1,
    totalPage: Math.ceil(dummyData.length / defaultPageSize),
  });

  const [data, setData] = useState<IProject[]>(
    dummyData.slice(0, defaultPageSize)
  );

  useEffect(() => {
    setPagination({
      current: 1,
      totalPage: Math.ceil(dummyData.length / pageSize),
    });
  }, [pageSize, dummyData.length]);

  useEffect(() => {
    setData(
      dummyData.slice(
        (pagination.current - 1) * pageSize,
        pageSize * pagination.current
      )
    );
  }, [pageSize, pagination.current, dummyData.length]);

  const handleDelete = (data: IProject) => {
    setDummyData((prev) => prev.filter((item) => item.id !== data.id));
  };

  const handleUpdate = (data: IProject) => {
    setUpsertProjectData({
      ...upsertProjectData,
      visible: true,
      data: data,
    });
  };

  const handleAdd = (data: IProject) => {
    setDummyData((prev) => [...prev, data]);
  };

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, current: page });
  };

  const handleChangePageSize = (pageSize: number) => {
    if (pageSize > 0) {
      setPageSize(pageSize);
    }
  };

  const handleDoubleClick = (row: IProject, rowIndex: number) => {
    setUpsertProjectData({
      ...upsertProjectData,
      visible: true,
      data: row,
      updatable: false,
    });
  };

  const handleToggleModal = (isOpen: boolean) => {
    setUpsertProjectData({
      ...upsertProjectData,
      data: undefined,
      visible: isOpen,
      updatable: true,
    });
  };

  const handleRefetch = () => {
    setFilter({ keyword: "", type: "", category: "" });
  };

  const handleFilter = () => {
    let temp: IProject[] = dummyData;

    if (filter.keyword && filter.keyword.length > 0) {
      temp = dummyData.filter((x) =>
        x.name.toLowerCase().includes(filter.keyword.toLowerCase())
      );
    }
    if (filter.type && filter.type.length > 0) {
      temp = dummyData.filter((x) => x.type === filter.type);
    }
    if (filter.category && filter.category.length > 0) {
      temp = dummyData.filter((x) => x.category === filter.category);
    }

    setData(
      temp.slice(
        (pagination.current - 1) * pageSize,
        pageSize * pagination.current
      )
    );
  };

  const columns: Array<ColumnProps<IProject>> = [
    {
      key: "id",
      header: "Index",
      width: 100,
      align: "center",
      render: (_value, _row, rowIndex) => {
        return <>{pagination.current * pageSize - pageSize + rowIndex + 1}</>;
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
      render: (_value, row) => {
        return (
          <div className="flex gap-3 items-center justify-center">
            <button onClick={() => handleUpdate(row)}>
              <SquarePen size={18} color="#0c66e4" />
            </button>
            <button onClick={() => handleDelete(row)}>
              <Trash2 size={18} color="red" />
            </button>
          </div>
        );
      },
    },
  ];

  return {
    pagination,
    pageSize,
    columns,
    data,
    upsertProjectData,
    filter,
    setFilter,
    handleToggleModal,
    handlePageChange,
    handleChangePageSize,
    handleDelete,
    handleUpdate,
    handleAdd,
    handleDoubleClick,
    handleRefetch,
    handleFilter,
  };
};

export default useProject;
