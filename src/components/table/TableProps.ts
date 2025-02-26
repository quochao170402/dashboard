export interface TableProps<T, K extends keyof T = keyof T> {
  className?: string;
  data: Array<T>;
  columns: Array<ColumnProps<T, K>>;
  pagination?: boolean;
  border?: boolean;
  onDoubleClick?: (row: T, rowIndex: number) => void;
}

export interface ColumnProps<T, K extends keyof T = keyof T> {
  key?: K;
  header: string;
  width?: number;
  render?: (
    value: T[K] | undefined,
    row: T,
    rowIndex: number
  ) => React.ReactNode | string;
  align?: "left" | "right" | "center";
}

export interface TableHeaderProps<T, K extends keyof T = keyof T> {
  columns: Array<ColumnProps<T, K>>;
}
