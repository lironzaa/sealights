import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: [ './text-input.component.scss' ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class TextInputComponent {
  @Input() customFormControlName: string = '';
  @Input() label: string = '';
  @Input() index!: number;
  @Input() customFormArrayName: string = '';
}
