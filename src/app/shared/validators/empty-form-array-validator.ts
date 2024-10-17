import { AbstractControl, ValidatorFn } from '@angular/forms';

export const emptyFormArrayValidator: ValidatorFn = (control: AbstractControl) => {
  const formControlValue = control.value as any[];

  if (!formControlValue || formControlValue.length === 0) {
    return { emptyControl: true };
  }

  return null;
};
