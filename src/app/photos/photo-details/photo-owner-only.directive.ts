import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Photo } from '../photo.model';
import { UserService } from '../../core/user/user.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[apPhotoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() ownedPhoto: Photo;

  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe((user) => {
        if (!user || user.id !== this.ownedPhoto.userId) {
          this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        }
      });
  }

}
