import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dmtool',
  templateUrl: './dmtool.component.html',
  styleUrls: ['./dmtool.component.scss']
})
export class DmtoolComponent implements OnInit {
  screen_names: string[] = [
    'ka01_7',
    'abc123',
    'xxxxxx'
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onDM(screen_name: string): void {
  }

  onOAuth(screen_name: string): void {
    this.router.navigate(['/oauth'], {queryParams: {screen_name: screen_name}});
  }

  onDelete(screen_name: string){
    
  }

}
