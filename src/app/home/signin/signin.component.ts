import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('usernameInput')
  usernameInput: ElementRef<HTMLInputElement>;

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private platformDetectorService: PlatformDetectorService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.auth.authenticate(username, password)
      .subscribe(() => this.router.navigate([ 'user', username ]),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.platformDetectorService.isPlatformBrowser() && this.usernameInput.nativeElement.focus();
          alert('Invalid user name or password!');
        });
  }
}
