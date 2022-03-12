import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent implements OnInit {
  params: Params = {};
  iframe: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.attach();
    this.params = this.route.snapshot.queryParams;
    if(this.params['screen_name'] && !this.params['oauth_token'] && !this.params['oauth_verifier']){
      if(this.params['denied']){
        this.spinnerService.detach();
        this.router.navigate(['/home']);
        return;
      }
      /* Step1: Request Token */
      this.authService.requestToken(this.params['screen_name'])
      .subscribe(result => {
        if(result.oauth_callback_confirmed){
          window.location.href = encodeURI(`https://api.twitter.com/oauth/authorize?oauth_token=${result.oauth_token}&force_login=true&screen_name=${this.params['screen_name']}`);
        }
        else{
          console.log('Request token failed');
          this.failed();
        }
      });
    }
    else if(this.params['screen_name'] && this.params['oauth_token'] && this.params['oauth_verifier']){
      /* Step2: Authorize token */
      this.authService.checkToken(this.params['screen_name'], this.params['oauth_token'])
      .subscribe(result => {
        if(result){
          /* Step3: Exchange token */
          this.authService.exchangeToken(this.params['screen_name'], this.params['oauth_verifier'])
          .subscribe(result => {
            if(result){
              this.spinnerService.detach();
              this.snackBar.open('連携に成功しました', '閉じる', { duration: 5000 });
              this.router.navigate(['home']);
            }
            else{
              console.log('Exchange token failed');
              this.failed();
            }
          })
        }
        else{
          console.log('Check token failed');
          this.failed();
        }
      })

    }
  }

  failed(): void {
    this.spinnerService.detach();
    this.snackBar.open('連携に失敗しました', '閉じる', { duration: 7000 });
    this.router.navigate(['home']);
  }

}
