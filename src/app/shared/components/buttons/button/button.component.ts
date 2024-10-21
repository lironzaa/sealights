import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  color = input.required<'warn' | 'primary' | 'accent'>();
  text = input.required<string>();
  type = input<'button' | 'submit'>('button');
  isDisabled = input<boolean>(false);
  buttonClicked = output<Event>();

  onButtonClick(event: Event): void {
    this.buttonClicked.emit(event);
  }
}
