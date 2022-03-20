import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { user } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient
  ) { }

  get<T>(kind: string, id: string): Observable<T> {
    const url = `db/${kind}/${id}`;
    return this.http.get<T>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<T>())
    );
  }
  
  getAll<T>(kind: string): Observable<T[]> {
    const url = `db/${kind}`;
    return this.http.get<T[]>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<T[]>([]))
    );
  }

  add<T>(kind: string, data: T): Observable<boolean> {
    const url = `db/${kind}`;
    return this.http.post<boolean>(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    );
  }

  update<T>(kind: string, data: T): Observable<boolean> {
    const url = `db/${kind}`;
    return this.http.put<boolean>(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    );
  }

  delete(kind: string, id: string): Observable<boolean>{
    const url = `db/${kind}/${id}`;
    return this.http.delete<boolean>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false))
    );
  }

  getEmail(): Observable<string>{
    return this.http.get<string>('db/email', this.httpOptions)
    .pipe(
      catchError(this.handleError<string>(''))
    )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
