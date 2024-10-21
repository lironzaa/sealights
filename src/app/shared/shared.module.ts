import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';

import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { SpinnerComponent } from './components/spinners/spinner/spinner.component';
import { ValidateTypePipe } from './pipes/validate-type.pipe';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { ErrorInputComponent } from './components/inputs/error-input/error-input.component';
import { DateInputComponent } from './components/inputs/date-input/date-input.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import { DynamicDialogComponent } from './components/dialogs/dynamic-dialog/dynamic-dialog.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [
    DataTableComponent,
    SpinnerComponent,
    ValidateTypePipe,
    TextInputComponent,
    ErrorInputComponent,
    DateInputComponent,
    ButtonComponent,
    SelectInputComponent,
    DynamicDialogComponent,
    CustomDatePipe,
  ],
  exports: [
    DataTableComponent,
    ReactiveFormsModule,
    TextInputComponent,
    DateInputComponent,
    ButtonComponent,
    SelectInputComponent,
    DynamicDialogComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinner,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    MatFormField,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatHint,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButton,
    MatSelect,
    MatOption,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
export class SharedModule {
}
