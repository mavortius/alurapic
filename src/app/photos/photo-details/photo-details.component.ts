import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';
import { AlertService } from '../../shared/components/alert/alert.service';
import { UserService } from '../../core/user/user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private photoService: PhotoService,
              private alertService: AlertService,
              private userService: UserService) {
  }

  ngOnInit() {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId);
    this.photo$.subscribe(() => {
    }, error => {
      console.log(error);
      this.router.navigate(['not-found']);
    });
  }

  remove(photoId: number) {
    this.photoService.removePhoto(photoId)
      .subscribe(() => {
          this.alertService.success('Photo removed', true);
          this.router.navigate(['/user', this.userService.getUserName()]);
        },
        error => {
          console.log(error);
          this.alertService.error('Error when trying to remove photo', true);
        });
  }


  like(photo: Photo) {
    this.photoService.like(photo.id)
      .subscribe((liked) => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      });
  }
}
