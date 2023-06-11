import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: [ './date-input.component.scss' ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class DateInputComponent {
  @Input() customFormControlName: string = '';
  @Input() label: string = '';
}
