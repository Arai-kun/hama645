import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { message } from './models/message';
import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class ChatService { 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private ws: WebsocketService
  ) { }

  create(id: string): Observable<boolean> {
    return this.http.get<boolean>(`/chat/create/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false)),
      shareReplay(1)
    );
  }

  send(id: string, text: string, sub_id: string): Observable<boolean> {
    return this.http.post<boolean>(`/chat/send/${id}/${sub_id}`, text,this.httpOptions)
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

  getdmUserList(id: string): Observable<string[]> {
    return this.http.get<string[]>(`/chat/dmUserList/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<string[]>([])),
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
