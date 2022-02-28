import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-dmtool-delete-sp',
  templateUrl: './dmtool-delete-sp.component.html',
  styleUrls: ['./dmtool-delete-sp.component.scss']
})
export class DmtoolDeleteSpComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DmtoolDeleteSpComponent>,
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
    this.dbService.delete('special', this.screen_name)
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
