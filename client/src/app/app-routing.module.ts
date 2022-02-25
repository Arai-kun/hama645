import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmtoolComponent } from './dmtool/dmtool.component';
import { LogComponent } from './log/log.component';
import { OauthComponent } from './oauth/oauth.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'oauth', component: OauthComponent },
  { path: 'dmtool', component: DmtoolComponent },
  { path: 'log', component: LogComponent },
  { path: 'home', component: HomeComponent },
  { path: '/', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
