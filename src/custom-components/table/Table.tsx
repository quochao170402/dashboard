import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>) => {
  return (
    <table className="overflow-hidden rounded-sm">
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
