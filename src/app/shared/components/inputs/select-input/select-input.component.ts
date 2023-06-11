import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class SelectInputComponent implements OnInit {
  @Input() customFormControlName: string = '';
  @Input() label: string = '';
  @Input() index!: number;
  @Input() customFormArrayName: string = '';
  @Input() items: any = [];
  @Output() onItemSelected = new EventEmitter();

  ngOnInit(): void {
    console.log(this.items)
  }

  itemSelected(selectedItem: any): void {
    this.onItemSelected.emit(selectedItem);
  }
}
