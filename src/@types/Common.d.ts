interface IPagination {
  current: number;
  totalPage: number;
}

interface IOption<T> {
  label: string;
  value: T;
}
