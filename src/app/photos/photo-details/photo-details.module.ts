import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only.directive';

@NgModule({
  imports: [
    CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VMessageModule
  ],
  declarations: [
    PhotoDetailsComponent, PhotoCommentsComponent, PhotoOwnerOnlyDirective
  ],
  exports: [
    PhotoDetailsComponent, PhotoCommentsComponent
  ]
})
export class PhotoDetailsModule {
}
