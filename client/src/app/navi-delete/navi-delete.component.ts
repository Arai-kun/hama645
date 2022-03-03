import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '../spinner.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navi-delete',
  templateUrl: './navi-delete.component.html',
  styleUrls: ['./navi-delete.component.scss']
})
export class NaviDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NaviDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public email: string,
    private dbService: DbService,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.spinnerService.attach();
    this.dbService.delete('user', this.email)
    .subscribe(result => {
      if(result){
        this.spinnerService.detach();
        this.snackBar.open('削除しました', '閉じる', {duration: 5000});
        this.router.navigate(['/']);
        this.dialogRef.close();
      }
      else{
        this.spinnerService.detach();
        this.snackBar.open('削除できませんでした', '閉じる', {duration: 7000});
      }
    })
  }

}
