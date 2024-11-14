const TableBody = <T, K extends keyof T>({ data, columns }: TableProps<T, K>) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className={`${
            rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
          } hover:bg-gray-100 transition-colors cursor-pointer`}
        >
          {columns.map((column, colIndex) => (
            <td
              key={colIndex}
              className="px-6 py-3 text-gray-700 border-b border-gray-200"
            >
              {row[column.key] as React.ReactNode}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
