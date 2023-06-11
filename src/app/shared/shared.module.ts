import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";

import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { DateInputComponent } from './components/inputs/date-input/date-input.component';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';

@NgModule({
  declarations: [
    DataTableComponent,
    TextInputComponent,
    DateInputComponent,
    SelectInputComponent
  ],
  exports: [
    DataTableComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextInputComponent,
    DateInputComponent,
    SelectInputComponent,
    MatDialogModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule
  ]
})

export class SharedModule {
}
