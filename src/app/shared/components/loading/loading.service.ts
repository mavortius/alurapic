import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoadingType } from './loading-type';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingSubject = new Subject<LoadingType>();

  getLoading(): Observable<LoadingType> {
    return this.loadingSubject.asObservable()
      .pipe(startWith(LoadingType.STOPPED));
  }

  start() {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop() {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}
