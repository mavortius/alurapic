import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private photoService: PhotoService) {
  }

  ngOnInit() {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId);
  }

  remove(photoId: number) {
    this.photoService.removePhoto(photoId)
      .subscribe(() => this.router.navigate(['']));
  }
}
