import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { message } from './models/message';
import { dmUser } from './models/dmUser';

@Injectable({
  providedIn: 'root'
})
export class ChatService { 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient
  ) { }

  create(id: string): Observable<boolean> {
    return this.http.get<boolean>(`/chat/create/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false)),
      shareReplay(1)
    );
  }

  send(id: string, text: string, sub_id: string): Observable<boolean> {
    return this.http.post<boolean>(`/chat/send/${id}/${sub_id}`, JSON.stringify({text: text}),this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false)),
    );
  }

  update(id: string, sub_id: string): Observable<message[]> {
    return this.http.get<message[]>(`/chat/update/${id}/${sub_id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<message[]>([])),
    );
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`/chat/delete/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false)),
    );
  }

  getdmUserList(id: string): Observable<dmUser[]> {
    return this.http.get<dmUser[]>(`/chat/dmUserList/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<dmUser[]>([])),
    );
  }

  getScreenName(id: string, sub_id: string): Observable<string> {
    return this.http.get<string>(`/screenName/${id}/${sub_id}`)
    .pipe(
      catchError(this.handleError<string>('')),
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
