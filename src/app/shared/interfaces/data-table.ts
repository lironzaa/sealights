export interface TableColumn {
  name: string;
  label: string;
}

export interface TableData<T> {
  [key: string]: any;
}
