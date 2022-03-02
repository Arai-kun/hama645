import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { summary } from '../models/summary';
import { SpinnerService } from '../spinner.service';



export interface displayData {
  screen_name: string,
  date: number[],
  sum: number
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [
    'screen_name',
    'date4',
    'date3',
    'date2',
    'date1',
    'date0',
    'sum'
  ];
  dataSource = new MatTableDataSource<displayData>();
  date: Array<string> = new Array(5);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dbService: DbService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.spinnerService.attach();
    this.date[0] = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
    for(let i = 1; i < this.date.length; i++){
      let time = new Date(Date.now() - (24 * (i - 1) * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000);
      this.date[i] = `${time.getMonth() + 1}/${time.getDate()}`;
    }
    this.getSummary();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getSummary(): void {
    this.dbService.getAll<summary>('summary')
    .subscribe(summary => {
      if(summary.length === 0){
        this.snackBar.open('連携しているTwitter ID がありません', '閉じる', {duration: 5000});
        this.spinnerService.detach();
        return;
      }
      let displaylogs: displayData[] = [];
      summary.forEach(el => {
        displaylogs.push({
          screen_name: el.screen_name,
          date: el.date,
          sum: el.sum
        });
      });
      this.dataSource.data = displaylogs;
      this.spinnerService.detach();
    });
  }

}
