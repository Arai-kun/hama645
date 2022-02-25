import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DmtoolRegisterComponent } from '../dmtool-register/dmtool-register.component';
import { DbService } from '../db.service';
import { twitter } from '../models/twitter';

@Component({
  selector: 'app-dmtool',
  templateUrl: './dmtool.component.html',
  styleUrls: ['./dmtool.component.scss']
})
export class DmtoolComponent implements OnInit {
  twitters: twitter[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private dbService: DbService
  ) { }

  ngOnInit(): void {
    this.getTwitters();
  }

  onDM(): void { }

  onOAuth(screen_name: string): void {
    this.router.navigate(['/oauth'], {queryParams: {screen_name: screen_name}});
  }

  onDelete(screen_name: string){
    
  }

  onRegister(): void {
    let dialogRef = this.dialog.open(DmtoolRegisterComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  getTwitters(): void {
    this.dbService.getAll<twitter>('twitters')
    .subscribe(twitters => this.twitters = twitters);
  }
}
