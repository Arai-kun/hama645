import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { summary } from '../models/summary';



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
  ) { }

  ngOnInit(): void {
    this.date[0] = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
    for(let i = 1; i < this.date.length; i++){
      let time = new Date(Date.now() - (24 * (i - 1) * 60 * 60 + 23 * 60 * 60 + 59 * 60 + 59) * 1000);
      this.date[i] = `${time.getMonth() + 1}/${time.getDate()}`;
    }
    /*
    if((new Date().getDate() - 1) > 0){
      this.date2 = `${new Date().getMonth() + 1}/${new Date().getDate() - 1}`;
    }
    else{
      let previous = new Date(Date.now() - (23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000));
      this.date2 = `${previous.getMonth() + 1}/${previous.getDate()}`;
    }
    if((new Date().getDate() - 2) > 0){
      this.date3 = `${new Date().getMonth() + 1}/${new Date().getDate() - 2}`;
    }
    else{
      let previous = new Date(Date.now() - (47 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000));
      this.date3 = `${previous.getMonth() + 1}/${previous.getDate()}`;
    }
    if((new Date().getDate() - 3) > 0){
      this.date4 = `${new Date().getMonth() + 1}/${new Date().getDate() - 3}`;
    }
    else{
      let previous = new Date(Date.now() - (71 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000));
      this.date4 = `${previous.getMonth() + 1}/${previous.getDate()}`;
    }
    if((new Date().getDate() - 4) > 0){
      this.date5 = `${new Date().getMonth() + 1}/${new Date().getDate() - 4}`;
    }
    else{
      let previous = new Date(Date.now() - (95 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000));
      this.date5 = `${previous.getMonth() + 1}/${previous.getDate()}`;
    }*/
    this.getSummary();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getSummary(): void {
    this.dbService.getAll<summary>('summary')
    .subscribe(summary => {
      let displaylogs: displayData[] = [];
      summary.forEach(el => {
        displaylogs.push({
          screen_name: el.screen_name,
          date: el.date,
          sum: el.sum
        });
      });
    });
  }

}
