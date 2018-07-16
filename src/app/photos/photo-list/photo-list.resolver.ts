import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private service: PhotoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    return this.service.listFromUserPaginated(route.params.userName, 1);
  }
}
