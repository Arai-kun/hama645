import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { log } from '../models/log';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SpinnerService } from '../spinner.service';

export interface displayData {
  no: number,
  date: string,
  screen_name: string,
  event: string,
  partner_screen_name: string
}

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [
    'no',
    'date',
    'screen_name',
    'event',
    'partner'
  ];
  dataSource = new MatTableDataSource<displayData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dbService: DbService,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.getLogs();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getLogs(): void {
    this.spinnerService.attach();
    this.dbService.getAll<log>('logs')
    .subscribe(logs => {
      if(logs.length === 0){
        this.snackBar.open('イベントがありません', '閉じる', {duration: 5000});
        this.spinnerService.detach();
        return;
      }
      let displaylogs: displayData[] = [];
      logs.forEach(log => {
        let time = new Date(Number(log.timestamp));
        let event: string = '';
        switch(log.event){
          case 1:
            event = 'DMリクエスト';
            break;
          case 2:
            event = 'DM受信';
            break;
          case 3:
            event = '特殊DM受信';
            break;
          case 4:
            event = '検索F';
            break;
          case 5:
            event = 'フォロワーF';
            break;
          case 6:
            event = '検索&フォロワーF';
            break;
          case 7:
            event = 'F解除';
            break;
          default:
            break;
        }
        displaylogs.push({
          no: log.no,
          date: `${time.getFullYear()}/${this.pad(time.getMonth() + 1)}/${this.pad(time.getDate())}`,
          //time: `${this.pad(time.getHours())}:${this.pad(time.getMinutes())}:${this.pad(time.getSeconds())}`,
          screen_name: log.screen_name,
          event: event,
          partner_screen_name: log.partner_screen_name
        });
      });
      this.dataSource.data = displaylogs;
      this.spinnerService.detach();
    });
  }

  pad(number: number): string {
    let str: string = `${('0' + String(number)).slice(-2)}`;
    return str;
  }

  onRefresh(): void {
    this.ngOnInit();
  }

}
