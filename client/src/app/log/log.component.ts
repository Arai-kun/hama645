import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { log } from '../models/log';
import { DbService } from '../db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface displayData {
  no: number,
  date: string,
  time: string,
  screen_name: string,
  event: string
}

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'date',
    'time',
    'screen_name',
    'event'
  ];
  dataSource = new MatTableDataSource<displayData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dbService: DbService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

}
