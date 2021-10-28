import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoadingService } from './loading.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ap-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading$: Observable<string>;

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.loading$ = this.loadingService.getLoading()
      .pipe(map((type) => type.valueOf()));
  }

}
