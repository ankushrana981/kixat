import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Alert, AlertType } from './alert.model';

@Injectable()
export class AlertService {

  private _subject = new Subject<Alert>();
  private _idx = 0;
  private timeout = 4000

  constructor() { }

  getObservable(): Observable<Alert> {
    return this._subject.asObservable();
  }

  message(message: string, type?: string) {
    this._subject.next(new Alert(this._idx++, type ? AlertType.error : AlertType.info, message, this.timeout));
  }

}