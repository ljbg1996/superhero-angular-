import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isDisabledSubject = new Subject<boolean>();

  isDisabled$ = this.isDisabledSubject.asObservable();

  setIsDisabled(value: boolean) {
    this.isDisabledSubject.next(value);
  }
}
