import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dmtool',
  templateUrl: './dmtool.component.html',
  styleUrls: ['./dmtool.component.scss']
})
export class DmtoolComponent implements OnInit {
  ids: string[] = [
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

  onDM(id: string): void {
    this.authService.requestToken()
    .subscribe(result => {
      console.log(result);
      const json = JSON.parse(result);
      if(json.oauth_callback_confirmed){
        window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${json.oauth_token}`;
      }
      //this.router.navigate(['/dmtool/auth'], {queryParams: {id: id}});
    })
  }

}
