import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;

  comments$: Observable<PhotoComment[]>;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
  }

}
