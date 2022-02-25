import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmtoolComponent } from './dmtool/dmtool.component';
import { LogComponent } from './log/log.component';
import { AuthComponent } from './auth/auth.component';
import { OauthComponent } from './oauth/oauth.component';

const routes: Routes = [
  { path: 'oauth', component: OauthComponent },
  { path: 'dmtool', component: DmtoolComponent },
  { path: 'log', component: LogComponent },
  { path: '/', redirectTo: 'dmtool', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
