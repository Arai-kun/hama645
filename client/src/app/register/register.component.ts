import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { user } from '../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  emailControl = new FormControl(null, [
    Validators.required,
    Validators.email
  ]);
  passwordControl = new FormControl(null, Validators.required);
  password2Control = new FormControl(null, Validators.required);


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.emailControl,
      password: this.passwordControl,
      password2: this.password2Control
    });
  }

  onSubmit() {
    let user : user = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }
    if(user.password !== this.form.get('password2')?.value){
      this.snackBar.open('パスワードが一致していません', '閉じる', { duration: 7000 });
      this.form.get('password2')?.setValue(null);
      return;
    }
    else{
      this.authService.exist('user', user.email)
      .subscribe(exist => {
        if(exist){
          this.snackBar.open('このアドレスは既に登録済みです', '閉じる', { duration: 7000 });
        }
        else{
          this.authService.create(user)
          .subscribe(result => {
            if(result){
              this.authService.login(user)
              .subscribe(() => {
                if(result){
                  this.router.navigate(['home']);
                }
                else{
                  this.snackBar.open('ログインできませんでした', '閉じる', { duration: 7000 });
                }
              });
            }
            else{
              this.snackBar.open('登録できませんでした', '閉じる', { duration: 7000 });
            }

          });
        }
      });
    }
  }
}
