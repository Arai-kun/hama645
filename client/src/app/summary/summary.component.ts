import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { summary } from '../models/summary';



export interface displayData {
  screen_name: string,
  date3: number,
  date2: number,
  date1: number,
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
    'date3',
    'date2',
    'date1',
    'sum'
  ];
  dataSource = new MatTableDataSource<displayData>();
  date1: string = ''; 
  date2: string = '';
  date3: string = '';

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
