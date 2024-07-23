import { Component } from '@angular/core';
import { Subscription } from "rxjs";
import { Alert, AlertType } from './alert.model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  alerts: Alert[] = [];
  private _subscription!: Subscription;

  constructor(private alert: AlertService) { }

  private _addAlert(alert: Alert) {
    this.alerts.push(alert);

    if (alert.timeout !== 0) {
      setTimeout(() => this.close(alert), alert.timeout);
    }
  }

  ngOnInit() {
    this._subscription = this.alert.getObservable().subscribe(alert => this._addAlert(alert));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  close(alert: Alert) {
    this.alerts = this.alerts.filter(obj => obj.id !== alert.id);
  }


  className(alert: Alert): string {

    let style: string;

    switch (alert.type) {

      case AlertType.success:
        style = 'success';
        break;

      case AlertType.warning:
        style = 'warning';
        break;

      case AlertType.error:
        style = 'error';
        break;

      default:
        style = 'info';
        break;
    }

    return style;
  }
}