import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';

import { Photo } from './photo.model';
import { PhotoComment } from './photo/photo-comment';
import { catchError, map } from 'rxjs/operators';

const API_URL = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  listFromUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${API_URL}${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Photo[]>(`${API_URL}${userName}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);
    return this.http.post(`${API_URL}/photos/upload`, formData);
  }

  findById(photoId: number): Observable<Photo> {
    return this.http.get<Photo>(`${API_URL}/photos/${photoId}`);
  }

  getComments(photoId: number): Observable<PhotoComment[]> {
    return this.http.get<PhotoComment[]>(`${API_URL}/photos/${photoId}/comments`);
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(`${API_URL}/photos/${photoId}/comments`, {
      commentText
    });
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${API_URL}/photos/${photoId}`);
  }

  like(photoId: number): Observable<boolean> {
    return this.http.post(API_URL + '/photos/' + photoId + '/like', {}, { observe: 'response' })
      .pipe(map(() => true))
      .pipe(catchError((err) => {
        return err.status === 304 ? of(false) : throwError(err);
      }));
  }
}
