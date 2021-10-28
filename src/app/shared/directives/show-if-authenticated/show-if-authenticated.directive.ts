import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../core/user/user.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[apShowIfAuthenticated]'
})
export class ShowIfAuthenticatedDirective implements OnInit {

  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private userService: UserService) {
  }

  ngOnInit(): void {
    if (!this.userService.isLogged()) {
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }


}
