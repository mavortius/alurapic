import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[apShowIfAuthenticated]'
})
export class ShowIfAuthenticatedDirective implements OnInit {
  currentDisplay: string;

  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
    this.userService.getUser()
      .subscribe((user) => {
        if (user) {
          this.renderer.setStyle(this.element.nativeElement, 'display', this.currentDisplay);
        } else {
          this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
          this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        }
      });
  }


}
