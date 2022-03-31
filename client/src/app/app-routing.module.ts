import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmtoolComponent } from './dmtool/dmtool.component';
import { LogComponent } from './log/log.component';
import { OauthComponent } from './oauth/oauth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { ChatComponent } from './chat/chat.component';
import { FollowComponent } from './follow/follow.component';
import { RetweetComponent } from './retweet/retweet.component';

const routes: Routes = [
  { path: 'oauth', component: OauthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'account', component: DmtoolComponent },
      { path: 'follow', component: FollowComponent },
      { path: 'retweet', component: RetweetComponent },
      { path: 'log', component: LogComponent }, 
      { path: 'dm/:id/:dmUser', component: ChatComponent }
    ]
  },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
