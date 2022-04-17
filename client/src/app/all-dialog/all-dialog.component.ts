import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { follow } from '../models/follow';
import { SpinnerService } from '../spinner.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

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
export class AllDialogComponent implements OnInit, AfterViewInit {
  statusOptions: statusOption[] = [
    {view: '待機', value: 0},
    {view: '検索フォロー', value: 1},
    {view: 'フォロワーフォロー', value: 2},
    //{view: '検索&フォロワーフォロー', value: 3}
  ];
  input_data: input_data = {
    keyword: '',
    range_min: 3,
    range_max: 20,
    count_max: 100,
    status: 0,
  }
  keywordCtl = new FormControl('');
  form!: FormGroup;
  labels: string[] = [];
  disableAnimation: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<AllDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogData,
    private dbService: DbService,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      keywords: this.fb.array([])
    });
    this.createFormField();

    this.keywordCtl.valueChanges.subscribe(keyword => {
      let buf = new Array(this.keywords.length).fill({keyword: keyword});
      console.log(buf)
      this.keywords.setValue(buf);
    });
  }

  ngAfterViewInit(): void {
    /* Prevent expanasion panel animation on init */
    setTimeout(() => this.disableAnimation = false);
  }

  get keywords(): FormArray {
    return this.form.get('keywords') as FormArray;
  }

  createFormField() {
    for(let follow of this.data.follows){
      this.labels.push(follow.screen_name);
      this.keywords.push(this.fb.group({
        keyword: ''
      }));
    }
  }

  onStart(): void {
    this.spinnerService.attach();
    if(this.input_data.range_min > this.input_data.range_max){
      this.snackBar.open('最小待機時間が最大待機時間を超えることはできません', '閉じる', {duration: 7000});
      this.spinnerService.detach();
      return;
    }
    this.data.follows.forEach(follow => {
      let index = this.labels.indexOf(follow.screen_name);
      if(index !== -1){
        follow.keyword = ((this.form.get('keywords') as FormArray).getRawValue())[index].keyword;
      }
      follow.range_max = this.input_data.range_max;
      follow.range_min = this.input_data.range_min;
      follow.count_max = this.input_data.count_max;
      follow.status = this.input_data.status;
    });
    console.log(this.data.follows);
    if(this.data.follows.map(follow => follow.keyword).includes('')){
      this.snackBar.open('キーワードは全て入力してください', '閉じる', {duration: 7000});
      this.spinnerService.detach();
      return;
    }
    this.dbService.add<follow[]>('follows', this.data.follows)
    .subscribe(result => {
      if(result){
        this.snackBar.open('スタートしました', '閉じる', {duration: 5000});
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
