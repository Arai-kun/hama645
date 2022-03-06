import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DmtoolRegisterComponent } from '../dmtool-register/dmtool-register.component';
import { DbService } from '../db.service';
import { twitter } from '../models/twitter';
import { special } from '../models/special'
import { DmtoolDeleteComponent } from '../dmtool-delete/dmtool-delete.component';
import { DmtoolRegisterSpComponent } from '../dmtool-register-sp/dmtool-register-sp.component';
import { DmtoolDeleteSpComponent } from '../dmtool-delete-sp/dmtool-delete-sp.component';

@Component({
  selector: 'app-dmtool',
  templateUrl: './dmtool.component.html',
  styleUrls: ['./dmtool.component.scss']
})
export class DmtoolComponent implements OnInit {
  twitters: twitter[] = [];
  specials: special[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private dbService: DbService
  ) { }

  ngOnInit(): void {
    this.getTwitters();
    this.getSpecials();
  }

  onDM(screen_name: string): void {
    this.router.navigate([`/home/dm/${screen_name}`]);
  }

  onOAuth(screen_name: string): void {
    this.router.navigate(['/oauth'], {queryParams: {screen_name: screen_name}});
  }

  onDelete(screen_name: string){
    let dialogRef = this.dialog.open(DmtoolDeleteComponent, {
      width: '400px',
      data: screen_name
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
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
  
  onRegisterSP(): void {
    let dialogRef = this.dialog.open(DmtoolRegisterSpComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });

  }

  onDeleteSP(screen_name: string): void {
    let dialogRef = this.dialog.open(DmtoolDeleteSpComponent, {
      width: '400px',
      data: screen_name
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });

  }

  getSpecials(): void {
    this.dbService.getAll<special>('specials')
    .subscribe(spcials => this.specials = spcials);
  }
}
