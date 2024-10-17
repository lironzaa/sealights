import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppToastrService {
  toastr = inject(ToastrService);

  showToastr(message: string, type: 'error' | 'success'): void {
    switch (type) {
      case 'success':
        this.toastr.success(message);
        break;
      case 'error':
        this.toastr.error(message);
        break
    }
  }
}
