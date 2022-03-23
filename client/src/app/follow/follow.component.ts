import { Component, OnInit } from '@angular/core';
import { follow } from '../models/follow';
import { DbService } from '../db.service';
import { twitter } from '../models/twitter';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AllDialogComponent } from '../all-dialog/all-dialog.component';

export interface statusOption {
  view: string,
  value: number
}

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  follows: follow[] = [];
  statusOptions: statusOption[] = [
    {view: '待機', value: 0},
    {view: '検索フォロー', value: 1},
    {view: 'フォロワーフォロー', value: 2},
    //{view: '検索&フォロワーフォロー', value: 3}
  ];

  constructor(
    private dbService: DbService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog, 
  ) { }

  ngOnInit(): void {
    this.getFollows();
  }

  getFollows(): void {
    this.dbService.getAll<twitter>('twitters')
    .subscribe(twitters => {
      twitters = twitters.filter(twitter => twitter.authorized === true);
      this.dbService.getAll<follow>('follows')
      .subscribe(follows => {
        this.follows = follows;
        twitters.forEach(twitter => {
          if(!this.follows.map(el => el.screen_name).includes(twitter.screen_name)){
            this.follows.push({
              screen_name: twitter.screen_name,
              user_id: twitter.user_id!,
              keyword: '',
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

  onRefresh(): void {
    this.ngOnInit();
  }

  onAll(): void {
    let dialogRef = this.dialog.open(AllDialogComponent, {
      width: '400px',
      data: {
        follows: this.follows.filter(follow => follow.status_now === 0)
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.onRefresh();
    });
  }

  
  onStop(screen_name: string): void {
    let follow = this.follows.find(el => el.screen_name === screen_name);
    if(!follow){
      this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
      this.onRefresh();
    }
    else{
      follow.status = 0;
      this.dbService.update<follow>('follow', follow)
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
    let follow = this.follows.find(el => el.screen_name === screen_name);
    if(!follow){
      this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
      this.onRefresh();
    }
    else{
      if(follow.keyword === ''){
        this.snackBar.open('キーワードを入力してください', '閉じる', {duration: 7000});
        return;
      }
      if(follow.range_min > follow.range_max){
        this.snackBar.open('最小待機時間が最大待機時間を超えることはできません', '閉じる', {duration: 7000});
        return;
      }
      this.dbService.add<follow>('follow', follow)
      .subscribe(result => {
        if(result){
          this.snackBar.open('更新しました', '閉じる', {duration: 5000});
          this.onRefresh();
        }
        else{
          this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
        }
      });
    }
  }

}
