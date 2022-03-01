import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { summary } from '../models/summary';



export interface displayData {
  screen_name: string,
  date5: number,
  date4: number,
  date3: number,
  date2: number,
  date1: number,
  sum2: number,
  sum1: number
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [
    'screen_name',
    'date5',
    'date4',
    'date3',
    'date2',
    'date1',
    'sum2',
    'sum1'
  ];
  dataSource = new MatTableDataSource<displayData>();
  date1: string = ''; 
  date2: string = '';
  date3: string = '';
  date4: string = '';
  date5: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dbService: DbService,
  ) { }

  ngOnInit(): void {
    this.date1 = `${new Date().getMonth() + 1}/${new Date().getDate()}`;
    if((new Date().getDate() - 1) > 0){
      this.date2 = `${new Date().getMonth() + 1}/${new Date().getDate() - 1}`;
    }
    else{
      let previous = new Date(Date.now() - (23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000));
      this.date2 = `${previous.getMonth() + 1}/${previous.getDate()}`;
    }
    if((new Date().getDate() - 2) > 0){
      this.date3 = `${new Date().getMonth() + 1}/${new Date().getDate()- 2}`;
    }
    else{
      let previous = new Date(Date.now() - (47 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000));
      this.date3 = `${previous.getMonth() + 1}/${previous.getDate()}`;
    }
    if((new Date().getDate() - 3) > 0){
      this.date3 = `${new Date().getMonth() + 1}/${new Date().getDate()- 3}`;
    }
    else{
      let previous = new Date(Date.now() - (71 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000));
      this.date3 = `${previous.getMonth() + 1}/${previous.getDate()}`;
    }
    if((new Date().getDate() - 4) > 0){
      this.date3 = `${new Date().getMonth() + 1}/${new Date().getDate()- 4}`;
    }
    else{
      let previous = new Date(Date.now() - (95 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000));
      this.date3 = `${previous.getMonth() + 1}/${previous.getDate()}`;
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

    })
  }

}
