import { TableProps } from "./TableProps";

const Table = <T, K extends keyof T>({
  data,
  columns,
  border,
  className,
  onDoubleClick,
}: TableProps<T, K>) => {
  return (
    <table className={`w-full overflow-hidden rounded-sm ${className}`}>
      <thead className={`border-b border-gray-200`}>
        <tr>
          {columns.map((column, index) => (
            <th
              key={`th_${column.header}_${index}`}
              className={`px-6 py-3 font-semibold tracking-wider text-left
                ${border ? "border" : "border-b"}
                `}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            onDoubleClick={() => onDoubleClick && onDoubleClick(row, rowIndex)}
            key={`tbody_tr_${rowIndex}`}
            className={`hover:bg-gray-100 transition-colors cursor-pointer`}
          >
            {columns.map((column, colIndex) => (
              <td
                key={`tbody_td_${rowIndex}_${colIndex}`}
                className={`px-6 py-3 text-gray-700 border-gray-200 ${
                  border ? "border" : "border-b"
                }`}
                width={column.width}
              >
                {column.render
                  ? column.render(undefined, row, rowIndex)
                  : column.key
                  ? (row[column.key] as React.ReactNode)
                  : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
