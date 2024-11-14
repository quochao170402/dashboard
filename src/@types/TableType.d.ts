interface TableProps<T, K extends keyof T = keyof T> {
  className?: string;
  data: Array<T>;
  columns: Array<ColumnProps<T, K>>;
  pagination?: boolean;
  border?: boolean;
}

interface ColumnProps<T, K extends keyof T = keyof T> {
  key: K;
  header: string;
  width?: number;
  render?: (value: T[keyof T], row: T, rowIndex: number) => React.ReactNode;
  align?: "left" | "right" | "center";
}

interface TableHeaderProps<T, K extends keyof T = keyof T> {
  columns: Array<ColumnProps<T, K>>;
}