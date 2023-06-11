import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: [ './select-input.component.scss' ],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class SelectInputComponent {
  @Input() customFormControlName: string = '';
  @Input() label: string = '';
  @Input() index!: number;
  @Input() customFormArrayName: string = '';
  @Input() items: any = [];
}
