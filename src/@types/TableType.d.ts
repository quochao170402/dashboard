interface TableProps<T, K extends keyof T> {
  data: Array<T>;
  columns: Array<ColumnProps<T, K>>;
  pagination?: boolean;
}

interface ColumnProps<T, K extends keyof T> {
  key: K;
  header: string;
  width?: number;
  align?: "left" | "right" | "center";
}

interface TableHeaderProps<T, K extends keyof T> {
  columns: Array<ColumnProps<T, K>>;
}
