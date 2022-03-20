import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { follow } from '../models/follow';
import { SpinnerService } from '../spinner.service';

export interface dialogData {
  follows: follow[]
}

export interface statusOption {
  view: string,
  value: number
}

export interface input_data {
  keyword: string,
  range_min: number,
  range_max: number,
  count_max: number,
  status: number
}

@Component({
  selector: 'app-all-dialog',
  templateUrl: './all-dialog.component.html',
  styleUrls: ['./all-dialog.component.scss']
})
export class AllDialogComponent implements OnInit {
  statusOptions: statusOption[] = [
    {view: '待機', value: 0},
    {view: '検索フォロー', value: 1},
    {view: 'フォロワーフォロー', value: 2},
    {view: '検索&フォロワーフォロー', value: 3}
  ];
  input_data: input_data = {
    keyword: '',
    range_min: 3,
    range_max: 20,
    count_max: 100,
    status: 0,
  }

  constructor(
    public dialogRef: MatDialogRef<AllDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData,
    private dbService: DbService,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
  }

  onStart(): void {
    this.spinnerService.attach();
    if(this.input_data.keyword === '' && (this.input_data.status === 1 || this.input_data.status === 3)){
      this.snackBar.open('キーワードを入力してください', '閉じる', {duration: 7000});
      this.spinnerService.detach();
      return;
    }
    if(this.input_data.range_min > this.input_data.range_max){
      this.snackBar.open('最小待機時間が最大待機時間を超えることはできません', '閉じる', {duration: 7000});
      this.spinnerService.detach();
      return;
    }
    this.data.follows.forEach(follow => {
      follow.keyword = this.input_data.keyword;
      follow.range_max = this.input_data.range_max;
      follow.range_min = this.input_data.range_min;
      follow.count_max = this.input_data.count_max;
      follow.status = this.input_data.status;
    });
    this.dbService.add<follow[]>('follows', this.data.follows)
    .subscribe(result => {
      if(result){
        this.snackBar.open('更新しました', '閉じる', {duration: 5000});
        this.spinnerService.detach();
        this.dialogRef.close();
      }
      else{
        this.snackBar.open('エラーが発生しました', '閉じる', {duration: 5000});
        this.spinnerService.detach();
      }
    })
    
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
