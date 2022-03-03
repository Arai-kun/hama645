import { Component, OnInit, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from '../db.service';
import { MatDialog } from '@angular/material/dialog';
import { NaviDeleteComponent } from '../navi-delete/navi-delete.component';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {
  email: string = '';
  @ViewChild('drawer') drawer!: MatDrawer;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private dbService: DbService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getEmail();
  }

  onLogout(): void {
    this.authService.logout()
    .subscribe(result => {
      if(result){
        this.router.navigate(['/login']);
      }
      else{
        this.snackBar.open('ログアウトできませんでした', '閉じる', { duration: 5000 });
      }
    });
  }

  onDelete(){
    this.dialog.open(NaviDeleteComponent, {
      width: '400px',
      data: this.email
    });
  }

  onRouter(place: string): void {
    this.router.navigate([`/${place}`]);
    this.isHandset$
    .subscribe(result => {
      if(result){
        this.drawer.close();
      }
    });
  }

  getEmail(): void {
    this.dbService.getEmail()
    .subscribe(email => this.email = email);
  }

}
