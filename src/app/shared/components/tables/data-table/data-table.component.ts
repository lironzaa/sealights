import { Component, Input, OnInit } from '@angular/core';

import { TableColumn } from "../../../interfaces/data-table";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: [ './data-table.component.scss' ]
})
export class DataTableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() data: any = [];
  columnsNames: string[] = [];

  ngOnInit(): void {
    this.columnsNames = this.columns.map(column => column.name);
  }
}
