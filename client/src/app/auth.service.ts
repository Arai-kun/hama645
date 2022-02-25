import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { shareReplay, catchError} from 'rxjs/operators';
import { twitter } from './models/twitter';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  requestToken(id: string): Observable<any> {
    return this.http.get<any>(`oauth/requestToken/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>())
    );
  }

  checkToken(twitter: twitter): Observable<boolean> {
    return this.http.post<boolean>('oauth/checkToken', twitter, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    )
  }

  exchangeToken(oauth_verifier: string): Observable<boolean> {
    return this.http.get<boolean>(`oauth/exchangeToken/${oauth_verifier}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    )
  }

  handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
