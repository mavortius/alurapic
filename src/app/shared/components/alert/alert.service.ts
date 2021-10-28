import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertSubject = new Subject<Alert>();
  keepAfterRouteChanged = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChanged) {
          this.keepAfterRouteChanged = false;
        } else {
          this.clear();
        }
      }
    });
  }

  private alert(alertType: AlertType, message: string, keepAfterRouteChanged: boolean) {
    this.keepAfterRouteChanged = keepAfterRouteChanged;
    this.alertSubject.next(new Alert(alertType, message));
  }

  private clear() {
    this.alertSubject.next(null);
  }

  success(message: string, keepAfterRouteChanged = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChanged);
  }

  warning(message: string, keepAfterRouteChanged = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouteChanged);
  }

  error(message: string, keepAfterRouteChanged = false) {
    this.alert(AlertType.ERROR, message, keepAfterRouteChanged);
  }

  info(message: string, keepAfterRouteChanged = false) {
    this.alert(AlertType.INFO, message, keepAfterRouteChanged);
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }
}
