import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { CustomErrorMessages } from '../error-input/error-messages';
import { ControlValueAccessorDirective } from '../../../directives/input-directive.directive';

@Component({
  selector: 'app-text-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
  templateUrl: './text-input.component.html',
  styleUrls: [ './text-input.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent<T>
  extends ControlValueAccessorDirective<T> {
  name = input.required<string>();
  formName = input<string>('');
  label = input<string>();
  type = input<'text' | 'email' | 'password'>('text');
  customErrorMessages = input<CustomErrorMessages>({});
}
