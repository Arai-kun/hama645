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

  private chatUrl(id: string): string{ 
    return `ws://localhost:3000/chat/${id}`;
  }

  create(id: string): Observable<boolean> {
    return this.http.get<boolean>(`/chat/create/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false)),
      shareReplay(1)
    );
  }

  connect(id: string): Subject<message>{
    return webSocket({
      url: `wss://${window.location.host}/chat/${id}`
    });
  }

  update(id: string | null): Observable<message> {
    if(!id){
      return new Observable<message>();
    }
    return this.http.get<message>(`/chat/update/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<message>()),
    );
  }

  delete(id: string | null): Observable<boolean> {
    if(!id){
      return of<boolean>(false);
    }
    return this.http.delete<boolean>(`/chat/delete/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<boolean>(false)),
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
