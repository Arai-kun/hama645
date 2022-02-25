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

  requestToken(screen_name: string): Observable<any> {
    return this.http.get<any>(`oauth/requestToken/${screen_name}`, this.httpOptions)
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

  exchangeToken(screen_name: string, oauth_verifier: string): Observable<boolean> {
    return this.http.post<boolean>('oauth/exchangeToken', JSON.stringify({
      screen_name: screen_name, oauth_verifier: oauth_verifier
    }), this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    );
  }

  handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
