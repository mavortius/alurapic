import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  fromUrl: string;

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private platformDetectorService: PlatformDetectorService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe((params) => this.fromUrl = params.fromUrl);
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.userNameInput.nativeElement.focus();
    }
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => {
          if (this.fromUrl) {
            this.router.navigateByUrl(this.fromUrl);
          } else {
            this.router.navigate(['user', userName]);
          }
        },
        err => {
          console.log(err);
          this.loginForm.reset();
          if (this.platformDetectorService.isPlatformBrowser()) {
            this.userNameInput.nativeElement.focus();
          }
          alert('Invalid user name or password');
        }
      );
  }
}
