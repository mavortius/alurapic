import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';
import { Observable } from 'rxjs';

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
    const id = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id);
  }

}
