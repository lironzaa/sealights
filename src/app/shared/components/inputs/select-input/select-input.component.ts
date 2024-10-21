import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorDirective } from '../../../directives/input-directive.directive';
import { CustomErrorMessages } from '../error-input/error-messages';
import { AppSelectItem } from '../../../interfaces/app-select-item-interface';

@Component({
  selector: 'app-select-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true,
    },
  ],
  templateUrl: './select-input.component.html',
  styleUrl: './select-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectInputComponent<T>
  extends ControlValueAccessorDirective<T> {
  selectItems = input.required<AppSelectItem[]>();
  name = input.required<string>();
  formName = input<string>('');
  label = input<string>();
  type = input<'text' | 'email' | 'password'>('text');
  customErrorMessages = input<CustomErrorMessages>({});
}
