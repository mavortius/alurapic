import { Pipe, PipeTransform } from '@angular/core';

import { Photo } from '../photo.model';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], description: string): Photo[] {
    description = description.trim().toLowerCase();

    if (description) {
      return photos.filter(photo => photo.description.toLowerCase().includes(description));
    } else {
      return photos;
    }
  }
}
