import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { twitter } from '../models/twitter';
import { DbService } from '../db.service';

@Component({
  selector: 'app-dmtool-register',
  templateUrl: './dmtool-register.component.html',
  styleUrls: ['./dmtool-register.component.scss']
})
export class DmtoolRegisterComponent implements OnInit {
  form!: FormGroup;
  screenNameControl = new FormControl(null, Validators.required);

  constructor(
    public dialogRef: MatDialogRef<DmtoolRegisterComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dbService: DbService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      screenName: this.screenNameControl
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    let twitter: twitter = {
      screen_name: this.form.get('screenName')?.value,
      authorized: false
    }
    this.dbService.get<twitter>('twitter', twitter.screen_name)
    .subscribe(twitter => {
      if(!twitter){
        this.snackBar.open('このTwitter IDは既に登録済みです', '閉じる', { duration: 7000 });
      }
      else{
        this.dbService.add<twitter>('twitter', twitter)
        .subscribe(result => {
          if(result){
            this.snackBar.open('登録しました', '閉じる', {duration: 5000});
            this.dialogRef.close();
          }
          else{
            this.snackBar.open('登録できませんでした', '閉じる', {duration: 7000});
          }
        });
      }
    });
  }

}
