import { Component, OnInit } from '@angular/core';
import { retweet } from '../models/retweet';
import { retweeted } from '../models/retweeted';
import { DbService } from '../db.service';
import { twitter } from '../models/twitter';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RetweetMultiregisterComponent } from '../retweet-multiregister/retweet-multiregister.component';

export interface statusOption {
  view: string,
  value: number
}

@Component({
  selector: 'app-retweet',
  templateUrl: './retweet.component.html',
  styleUrls: ['./retweet.component.scss']
})
export class RetweetComponent implements OnInit {
  retweets: retweet[] = [];
  retweeteds: retweeted[] = [];
  statusOptions: statusOption[] = [
    {view: '待機', value: 0},
    {view: 'リツイート', value: 1},
  ];
  input_retweeted: string = '';

  constructor(
    private dbService: DbService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog, 
  ) { }

  ngOnInit(): void {
    this.getRetweeteds();
    this.getRetweets();
  }

  getRetweets(): void {
    this.dbService.getAll<twitter>('twitters')
    .subscribe(twitters => {
      twitters = twitters.filter(twitter => twitter.authorized === true);
      this.dbService.getAll<retweet>('retweets')
      .subscribe(retweets => {
        this.retweets = retweets;
        twitters.forEach(twitter => {
          if(!this.retweets.map(el => el.screen_name).includes(twitter.screen_name)){
            this.retweets.push({
              screen_name: twitter.screen_name,
              user_id: twitter.user_id!,
              range_min: 3,
              range_max: 20,
              count_max: 100,
              status: 0,  // stop,
              status_now: 0,
              maxed: false
            });
          }
        });
      });
    });
  }

  getRetweeteds(): void {
    this.dbService.getAll<retweeted>('retweeteds')
    .subscribe(retweeteds => this.retweeteds = retweeteds);
  }

  onRefresh(): void {
    this.ngOnInit();
  }

  onRegister(): void {
    if(!this.input_retweeted){
      this.snackBar.open('Twitter IDを入力してください', '閉じる', {duration: 7000});
      return;
    }
    let retweeted: retweeted = {
      screen_name: this.input_retweeted,
      user_id: ''
    }
    this.dbService.add<retweeted>('retweeted', retweeted)
    .subscribe(result => {
      if(result){
        this.snackBar.open('登録しました', '閉じる', {duration: 5000});
        this.onRefresh();
      }
      else{
        this.snackBar.open('登録できませんでした', '閉じる', {duration: 7000});
      }
    });
  }

  onMultiregister(): void {
    let dialogRef = this.dialog.open(RetweetMultiregisterComponent, {
      width: '400px',
      maxHeight: '800px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.onRefresh();
    });
  }

  onStop(screen_name: string): void {
    let retweet = this.retweets.find(el => el.screen_name === screen_name);
    if(!retweet){
      this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
      this.onRefresh();
    }
    else{
      retweet.status = 0;
      this.dbService.add<retweet>('retweet', retweet)
      .subscribe(result => {
        if(result){
          this.snackBar.open('中止しています...', '閉じる', {duration: 5000});
          this.onRefresh();
        }
        else{
          this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
        }
      });
    }
  }

  onStart(screen_name: string): void {
    let retweet = this.retweets.find(el => el.screen_name === screen_name);
    if(!retweet){
      this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
      this.onRefresh();
    }
    else{
      if(retweet.range_min > retweet.range_max){
        this.snackBar.open('最小待機時間が最大待機時間を超えることはできません', '閉じる', {duration: 7000});
        return;
      }
      this.dbService.add<retweet>('retweet', retweet)
      .subscribe(result => {
        if(result){
          this.snackBar.open('スタートしました', '閉じる', {duration: 5000});
          this.onRefresh();
        }
        else{
          this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
        }
      });
    }
  }

  onRemove(screen_name: string){
    this.dbService.delete('retweeted', screen_name)
    .subscribe(result => {
      if(result){
        this.onRefresh();
      }
      else{
        this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
      }
    })
  }

}
