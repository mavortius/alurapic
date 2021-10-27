import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ap-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService) {
  }

  ngOnInit() {
    const photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(photoId);
  }

}
