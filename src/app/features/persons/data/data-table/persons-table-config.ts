import { DataTableConfig } from '../../../../shared/interfaces/data-table-interface';
import { Person } from '../../interfaces/person-interface';
import { ColumnTypeEnum } from '../../../../shared/enums/data-table/column-type-enum';
import { SortDirectionEnum } from '../../../../shared/enums/data-table/sort-direction-enum';
import { SortTypeEnum } from '../../../../shared/enums/data-table/sort-type-enum';
import { PersonsTablePropsEnum } from '../../enums/data-table/persons-table-props-enum';

export const personsTableConfig: DataTableConfig<Person> = {
  columns: [
    {
      title: 'id',
      dataProperty: PersonsTablePropsEnum.id,
      columnType: ColumnTypeEnum.number,
      isSortable: true,
      sortDirection: SortDirectionEnum.none,
      sortType: SortTypeEnum.integer
    },
    {
      title: 'Name',
      dataProperty: PersonsTablePropsEnum.name,
      columnType: ColumnTypeEnum.string,
      isSortable: true,
      sortDirection: SortDirectionEnum.none,
      sortType: SortTypeEnum.string
    },
    {
      title: 'Birthdate',
      dataProperty: PersonsTablePropsEnum.birthdate,
      columnType: ColumnTypeEnum.date,
      isSortable: true,
      sortDirection: SortDirectionEnum.none,
      sortType: SortTypeEnum.string
    },
    {
      title: 'Addresses count',
      dataProperty: PersonsTablePropsEnum.addressesCount,
      columnType: ColumnTypeEnum.number,
      isSortable: true,
      sortDirection: SortDirectionEnum.none,
      sortType: SortTypeEnum.integer
    },
  ],
}

