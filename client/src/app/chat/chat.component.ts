import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatService } from '../chat.service';
import { message } from '../models/message';
import { Subject, interval, Observable, Subscription } from 'rxjs';
import { mergeMap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: message[] = [];
  private subject: Subject<message> = new Subject();
  screen_name: string = '';
  subscription: Subscription = new Subscription();
  text: string = '';

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location,
    private chatService: ChatService
  ) { }

  ngOnInit(): void {
    if(!this.route.snapshot.paramMap.get('id') || !this.route.snapshot.paramMap.get('dmUser')){
      this.failed();
    }
    else{
      this.screen_name = this.route.snapshot.paramMap.get('id')!;
      this.chatService.create(this.screen_name)
      .subscribe(result => {
        if(result){
          this.recieveMsg();
          this.subscription = this.polling().subscribe(data => {
            this.subject.next(data);
          });
        }
      });
    }
  }

  private recieveMsg(): void {
    this.subject.subscribe({
      next: msg => {
        console.log(msg);
        let date = new Date(msg.timestamp);
        this.messages.push({
          self: msg.self,
          text: msg.text,
          timestamp: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}`
        });
      },
      error: e => console.log('error: ', e),
      complete: () => {
        console.log('disconnected');
        this.subscription.unsubscribe();
      }
    });
  }

  sendMsg(): void {
    this.chatService.send(this.screen_name, this.text)
    .subscribe(result => {
      if(!result){
        this.snackBar.open('送信できませんでした', '閉じる', {duration: 5000});
      }
      else{
        this.text = '';
      }
    })
  }

  polling(): Observable<message> {
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
    });
  }

}
