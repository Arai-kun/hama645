import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { twitter } from '../models/twitter';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {
  params: Params = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.params = this.route.snapshot.queryParams;
    if(this.params['id'] && !this.params['oauth_token'] && !this.params['oauth_verifier']){
      /* Step1: Request Token */
      this.authService.requestToken(this.params['id'])
      .subscribe(result => {
        console.log(result.oauth_callback_confirmed);
        if(result.oauth_callback_confirmed){
          window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${result.oauth_token}`;
        }
        else{
          console.log('Request token failed');
        }
      });
    }
    else if(this.params['id'] && this.params['oauth_token'] && this.params['oauth_verifier']){
      /* Step2: Authorize token */
      let twitter: twitter = {
        id: this.params['id'],
        oauth_token: this.params['oauth_token']
      }
      this.authService.checkToken(twitter)
      .subscribe(result => {
        if(result){
          /* Step3: Exchange token */
          this.authService.exchangeToken(this.params['id'], this.params['oauth_verifier'])
          .subscribe(result => {
            if(result){
              console.log('3 legs oauth success!');
            }
            else{
              console.log('Exchange token failed');
            }
          })
        }
        else{
          console.log('Check token failed');
        }
      })

    }
  }

}
