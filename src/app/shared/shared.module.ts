import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { SpinnerComponent } from './components/spinners/spinner/spinner.component';
import { ValidateTypePipe } from './pipes/validate-type.pipe';
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { ErrorInputComponent } from './inputs/error-input/error-input.component';
import { DateInputComponent } from './inputs/date-input/date-input.component';

@NgModule({
  declarations: [
    DataTableComponent,
    SpinnerComponent,
    ValidateTypePipe,
    TextInputComponent,
    ErrorInputComponent,
    DateInputComponent,
  ],
  exports: [
    DataTableComponent,
    ReactiveFormsModule,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinner,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    MatFormField
  ]
})
export class SharedModule {
}
