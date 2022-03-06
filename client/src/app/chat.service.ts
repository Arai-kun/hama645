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

  init(id: string): Observable<any> {
    return this.http.get<any>(`/chat/${id}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>()),
      shareReplay(1)
    );
  }

  connect(id: string): Subject<message>{
    return webSocket({
      url: `wss://${window.location.host}/chat/${id}`
    });
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
