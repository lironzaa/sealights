import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent {

}
