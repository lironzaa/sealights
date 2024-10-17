import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { DataTableConfig, DataTableItem } from '../../../interfaces/data-table-interface';
import { Person } from '../../../../features/persons/interfaces/person-interface';
import { ColumnTypeEnum } from '../../../enums/data-table/column-type-enum';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T> {
  dataTableConfig = input.required<DataTableConfig<T>>();
  items = input.required({
    transform: (items: Person[]): DataTableItem[] => {
      console.log(items);
      return items as unknown as DataTableItem[];
    }
  })
  isLoading = input.required<boolean | undefined>();
  idKey = input('id');

  columnTypeEnum = ColumnTypeEnum;
}
