import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from '../photos/load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from '../../shared/directives/dark-on-hover/dark-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkOnHoverModule
  ]
})
export class PhotoListModule {

}
