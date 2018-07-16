import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{

  @Output() ontyping = new EventEmitter<string>();
  debounce = new Subject<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.ontyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
