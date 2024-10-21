import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { combineLatest, distinctUntilChanged, Observable, of, shareReplay, startWith } from 'rxjs';
import { map } from 'rxjs/operators';

import { CustomErrorMessages, getErrorMessage } from './error-messages';
import { FormUtilitiesService } from '../../../services/form-utilities.service';

@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrl: './error-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorInputComponent implements OnInit {
  formUtilitiesService = inject(FormUtilitiesService);

  controlName = input.required<string>();
  formContained = input.required<AbstractControl>();
  formName = input<string>('');
  customErrorMessages = input<CustomErrorMessages>({});

  error$!: Observable<string>;
  isFormSubmitted$!: Observable<boolean>;

  ngOnInit(): void {
    this.isFormSubmitted$ = this.formUtilitiesService.getFormSubmitAttemptListener(this.formName());
    this.initError$();
  }

  initError$(): void {
    const valueChange$: Observable<string> = this.control?.valueChanges.pipe(
      startWith(this.control?.value),
      map((value) => value),
      distinctUntilChanged(),
      shareReplay(1)
    ) || of('');

    this.error$ = combineLatest([
      valueChange$.pipe(startWith('')),
      this.isFormSubmitted$.pipe(startWith(false),),
    ]).pipe(
      map(([ valueChange, isFormSubmitted ]) => {
        if (valueChange) this.control?.markAsTouched();
        return (!this.control?.untouched || isFormSubmitted) && this.control?.errors ? getErrorMessage(this.control?.errors, this.customErrorMessages()) : '';
      })
    );
  }

  private get control(): AbstractControl | null {
    if (this.formContained() && this.controlName()) {
      return this.formContained() instanceof FormGroup
        ? this.formContained().get(this.controlName())
        : this.formContained();
    }
    return null;
  }
}
