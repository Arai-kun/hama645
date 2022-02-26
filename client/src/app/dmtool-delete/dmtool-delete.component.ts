import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dmtool-delete',
  templateUrl: './dmtool-delete.component.html',
  styleUrls: ['./dmtool-delete.component.scss']
})
export class DmtoolDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DmtoolDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public screen_name: string,
    private dbService: DbService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.dbService.delete('twitter', this.screen_name)
    .subscribe(result => {
      if(result){
        this.snackBar.open('削除しました', '閉じる', {duration: 5000});
        this.dialogRef.close();
      }
      else{
        this.snackBar.open('削除できませんでした', '閉じる', {duration: 7000});
      }
    })
  }

}
