import { ColumnTypeEnum } from '../enums/data-table/column-type-enum';
import { SortDirectionEnum } from '../enums/data-table/sort-direction-enum';
import { SortTypeEnum } from '../enums/data-table/sort-type-enum';

export interface DataTableConfig<T> {
  columns: DataTableColumn<T>[];
}

export interface DataTableBaseColumn<T> {
  title: string;
  dataProperty: keyof T;
}

// Column Type
export interface DataTableStringColumn<T> extends DataTableBaseColumn<T> {
  columnType: ColumnTypeEnum.string;
}

export interface DataTableNumberColumn<T> extends DataTableBaseColumn<T> {
  columnType: ColumnTypeEnum.number;
}

export interface DataTableDateColumn<T> extends DataTableBaseColumn<T> {
  columnType: ColumnTypeEnum.date;
}

// Is Column Sortable
export interface DataTableSortableColumn<T> extends DataTableBaseColumn<T> {
  isSortable: true;
  sortDirection: SortDirectionEnum;
  sortType: SortTypeEnum;
}

export interface DataTableNonSortableColumn<T> extends DataTableBaseColumn<T> {
  isSortable?: false;
  sortDirection?: never;
  sortType?: never;
}

export type DataTableColumn<T> = (DataTableSortableColumn<T> | DataTableNonSortableColumn<T>)
  & (DataTableDateColumn<T> | DataTableNumberColumn<T> | DataTableStringColumn<T>);


export interface DataTableItem {
  [key: string]: string | number;
}
