import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ap-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

}
