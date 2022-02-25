import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { shareReplay, catchError} from 'rxjs/operators';
import { twitter } from './models/twitter';
import { user } from './models/user';

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

  login(user: user): Observable<boolean>{
    return this.http.post<boolean>('user/login', user, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false)),
      shareReplay(1)
    );
  }

  create(user: user): Observable<boolean> {
    return this.http.post<boolean>('user/create', user, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false)),
      shareReplay(1)
    );
  }

  exist(kind: string, id: string): Observable<boolean> {
    const url = `/${kind}/exist/${id}`;
    return this.http.get<boolean>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>('user/check', this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    );
  }

  logout(): Observable<boolean>{
    return this.http.get<boolean>('user/logout', this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    );
  }

  requestToken(screen_name: string): Observable<any> {
    return this.http.get<any>(`oauth/requestToken/${screen_name}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>())
    );
  }

  checkToken(screen_name: string, oauth_token: string): Observable<boolean> {
    return this.http.post<boolean>('oauth/checkToken', JSON.stringify({
      screen_name: screen_name, oauth_token: oauth_token
    }), this.httpOptions)
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
