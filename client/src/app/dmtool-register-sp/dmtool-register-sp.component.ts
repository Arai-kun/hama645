import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { special } from '../models/special';
import { DbService } from '../db.service';

@Component({
  selector: 'app-dmtool-register-sp',
  templateUrl: './dmtool-register-sp.component.html',
  styleUrls: ['./dmtool-register-sp.component.scss']
})
export class DmtoolRegisterSpComponent implements OnInit {
  form!: FormGroup;
  screenNameControl = new FormControl(null, Validators.required);

  constructor(
    public dialogRef: MatDialogRef<DmtoolRegisterSpComponent>,
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
    let special: special = {
      screen_name: this.form.get('screenName')?.value,
    }
    this.dbService.get<special>('special', special.screen_name)
    .subscribe(exist => {
      if(exist){
        this.snackBar.open('このTwitter IDは既に登録済みです', '閉じる', { duration: 7000 });
      }
      else{
        this.dbService.add<special>('special', special)
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
