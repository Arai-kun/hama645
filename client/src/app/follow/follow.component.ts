import { Component, OnInit } from '@angular/core';
import { follow } from '../models/follow';
import { DbService } from '../db.service';
import { twitter } from '../models/twitter';

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
    {view: '検索&フォロワーフォロー', value: 3}
  ];

  constructor(
    private dbService: DbService
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
              status_now: 0
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

  }

  onStop(): void {

  }

  onStart(): void {
    console.log(this.follows);
  }

}
