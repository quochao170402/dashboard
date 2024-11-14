const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) => {
  return (
    <thead className="bg-gray-300 border-b border-gray-200">
      <tr>
        {columns.map((column, index) => (
          <th
            key={`thead_${column.header}_${index}`}
            className="px-6 py-3 font-semibold tracking-wider text-left text-gray-700 uppercase"
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
