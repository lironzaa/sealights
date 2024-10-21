import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { CustomErrorMessages } from '../error-input/error-messages';
import { ControlValueAccessorDirective } from '../../../directives/input-directive.directive';

@Component({
  selector: 'app-date-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
  ],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInputComponent<T>
  extends ControlValueAccessorDirective<T> {
  label = input<string>();
  customErrorMessages = input<CustomErrorMessages>({});
  name = input.required<string>();
  formName = input<string>('');
}
