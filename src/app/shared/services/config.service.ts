import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private ENDPOINT = environment.URI.API_RESOURCE;
  constructor(private _http: HttpClient) {}

  read(query: any): Observable<any> {
    return this._http
      .get(`${this.ENDPOINT}config`, {
        params: query,
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        tap({
          next: (res: any) => {
            return res;
          },
          error: (error) => {
            return error;
          },
        })
      );
  }
}
