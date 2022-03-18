import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { TextFieldModule } from '@angular/cdk/text-field';

/* Material */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';

/* Class */
import { MatPaginatorIntlJa } from './mat-paginator-jp';

/* Component */
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { DmtoolComponent } from './dmtool/dmtool.component';
import { LogComponent } from './log/log.component';
import { OauthComponent } from './oauth/oauth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DmtoolRegisterComponent } from './dmtool-register/dmtool-register.component';
import { DmtoolDeleteComponent } from './dmtool-delete/dmtool-delete.component';
import { DmtoolRegisterSpComponent } from './dmtool-register-sp/dmtool-register-sp.component';
import { DmtoolDeleteSpComponent } from './dmtool-delete-sp/dmtool-delete-sp.component';
import { SummaryComponent } from './summary/summary.component';
import { NaviDeleteComponent } from './navi-delete/navi-delete.component';
import { ChatComponent } from './chat/chat.component';
import { DmListComponent } from './dm-list/dm-list.component';
import { FollowComponent } from './follow/follow.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    DmtoolComponent,
    LogComponent,
    OauthComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DmtoolRegisterComponent,
    DmtoolDeleteComponent,
    DmtoolRegisterSpComponent,
    DmtoolDeleteSpComponent,
    SummaryComponent,
    NaviDeleteComponent,
    ChatComponent,
    DmListComponent,
    FollowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    OverlayModule,
    PortalModule,
    TextFieldModule,
    MatExpansionModule
  ],
  entryComponents: [
    MatSpinner
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlJa}],
  //providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
