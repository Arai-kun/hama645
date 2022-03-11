import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatService } from '../chat.service';
import { message } from '../models/message';
import { Subject, interval, Observable, Subscription } from 'rxjs';
import { mergeMap, takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit {
  messages: message[] = [];
  private subject: Subject<message[]> = new Subject();
  screen_name: string = '';
  opposite_name: string = '';
  subscription: Subscription = new Subscription();
  text: string = '';

  @ViewChild('scrollArea', {read: ElementRef}) scroll!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location,
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.route.snapshot.paramMap.get('id') || !this.route.snapshot.paramMap.get('dmUser')){
      this.failed();
    }
    else{
      this.screen_name = this.route.snapshot.paramMap.get('id')!;
      this.opposite_name = this.route.snapshot.paramMap.get('dmUser')!;
      this.chatService.create(this.screen_name)
      .subscribe(result => {
        if(result){
          this.initMsg();
          this.recieveMsg();
          this.subscription = this.polling().subscribe(data => {
            this.subject.next(data);
          });
        }
      });
    }
  }

  ngAfterViewInit(): void {
    //this.scrollToBottom();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    console.log('Call!')
    this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
  }

  private recieveMsg(): void {
    this.subject.subscribe({
      next: msgs => {
        console.log(msgs);
        for(let msg of msgs){
          let date = new Date(Number(msg.timestamp));
          if(!this.messages.map(msg => msg.id).includes(msg.id)){
            this.messages.push({
              id: msg.id,
              self: msg.self,
              text: msg.text,
              timestamp: `${date.getMonth() + 1}/${date.getDate()}/ ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
            });
          }
        }
      },
      error: e => console.log('error: ', e),
      complete: () => {
        console.log('disconnected');
        this.subscription.unsubscribe();
      }
    });
  }

  sendMsg(): void {
    this.chatService.send(this.screen_name, this.text, this.opposite_name)
    .subscribe(result => {
      if(!result){
        this.snackBar.open('送信できませんでした', '閉じる', {duration: 5000});
      }
      else{
        this.text = '';
      }
    });
  }

  initMsg(): void {
    this.chatService.update(this.screen_name, this.opposite_name)
    .subscribe(messages => {
      messages.forEach(msg => {
        let date = new Date(Number(msg.timestamp));
        this.messages.push({
          id: msg.id,
          self: msg.self,
          text: msg.text,
          timestamp: `${date.getMonth() + 1}/${date.getDate()}/ ${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
        });
      });
      this.messages.sort((x, y) => Number(x.timestamp) - Number(y.timestamp));
    });
  }

  polling(): Observable<message[]> {
    return interval(1000)
    .pipe(
      mergeMap(() => this.chatService.update(this.screen_name, this.opposite_name)),
      takeWhile(() => true)
    );
  }

  failed(): void{
    this.snackBar.open('エラーが発生しました', '閉じる', {duration: 7000});
    this.location.back();
  }

  onExit(): void {
    this.router.navigate(['/home/account']);
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
