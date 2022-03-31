import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { retweeted } from '../models/retweeted';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-retweet-multiregister',
  templateUrl: './retweet-multiregister.component.html',
  styleUrls: ['./retweet-multiregister.component.scss']
})
export class RetweetMultiregisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RetweetMultiregisterComponent>,
    private fb: FormBuilder,
    private dbService: DbService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      screenNames: this.fb.array([])
    })
  }

  get screenNames(): FormArray {
    return this.form.get('screenNames') as FormArray;
  }

  addScreenName() {
    this.screenNames.push(this.fb.group({
      screen_name: ''
    }));
  }

  onRegister(): void {
    let retweeteds: retweeted[] = [];
    (this.form.get('screenNames') as FormArray).value.forEach((el: { screen_name: string; }) => {
      if(el.screen_name){
        retweeteds.push({
          screen_name: el.screen_name,
          user_id: ''
        });
      }
    });
    if(retweeteds.filter(el => el.screen_name === '').length === retweeteds.length){
      this.snackBar.open('Twitter IDを入力してください', '閉じる', {duration: 7000});
      return;
    }
    this.dbService.add<retweeted[]>('retweeteds', retweeteds)
    .subscribe(result => {
      if(result){
        this.snackBar.open('登録しました', '閉じる', {duration: 5000});
        this.dialogRef.close();
      }
      else{
        this.snackBar.open('登録できませんでした', '閉じる', {duration: 7000});
      }
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  

}
