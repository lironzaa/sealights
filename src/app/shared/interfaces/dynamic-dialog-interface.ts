import { OutputEmitterRef } from '@angular/core';

export interface DynamicDialogInterface<T> {
  initComponent(data: any): void;
  onSubmit: OutputEmitterRef<T>;
  onCancel: OutputEmitterRef<void>;
}
