import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DynamicDialogInterface } from '../../../../../shared/interfaces/dynamic-dialog-interface';
import { FormUtilitiesService } from '../../../../../shared/services/form-utilities.service';

@Component({
  selector: 'app-add-city-dialog',
  templateUrl: './add-city-dialog.component.html',
  styleUrl: './add-city-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCityDialogComponent implements DynamicDialogInterface<string> {
  onSubmit = output<string>();
  onCancel = output<void>();

  formUtilitiesService = inject(FormUtilitiesService);
  fb = inject(FormBuilder);

 cityForm!: FormGroup;

  initComponent(): void {
    this.initForm();
  }

  initForm(): void {
    this.cityForm = this.fb.group({
      name: new FormControl(null, Validators.required),
    });
  }
}
