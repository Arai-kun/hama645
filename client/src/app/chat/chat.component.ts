import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatService } from '../chat.service';
import { message } from '../models/message';
import { Subject, interval, Observable } from 'rxjs';
import { mergeMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  message: message[] = [];
  private subject: Subject<message> = new Subject();
  screen_name: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.screen_name = this.route.snapshot.paramMap.get('id');
    if(!this.screen_name){
      this.failed();
    }
    else{
      //this.subject = this.chatService.connect(this.screen_name);
      this.chatService.create(this.screen_name)
      .subscribe(result => {
        if(result){
          this.recieveMsg();
          this.polling().subscribe(data => {
            this.subject.next(data);
          });
        }
      })
    }
  }

  private recieveMsg(): void {
    this.subject.subscribe({
      next: msg => {
        console.log(msg);
        this.message.push(msg);
      },
      error: e => console.log('error: ', e),
      complete: () => console.log('disconnected')
    })
  }

  sendMsg(): void {
    this.subject.next({text: 'test', timestamp: 'date'});
  }

  polling(): Observable<any> {
    return interval(1000)
    .pipe(
      mergeMap(() => this.chatService.update(this.screen_name)),
      takeWhile(() => true)
    );
  }

  failed(): void{
    this.snackBar.open('エラーが発生しました', '閉じる', {duration: 7000});
    this.location.back();
  }

  ngOnDestroy(): void {
      this.subject.complete();
      this.chatService.delete(this.screen_name)
      .subscribe(result => {
        if(result){
          console.log('Deleted');
        }
      })
  }

}
