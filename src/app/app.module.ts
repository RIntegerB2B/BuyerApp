import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AccountService } from '../app/account/account.service';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NavHeaderComponent} from './shared/nav-header/nav-header.component';
import { NavHeaderService } from './shared/nav-header/nav-header.service';
import { Routing } from './app.route';


import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { PwdChangeRequestComponent } from './account/pwd-change-request/pwd-change-request.component';
import { PwdChangeResetComponent } from './account/pwd-change-reset/pwd-change-reset.component';

import { CatalogComponent } from './product/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    WelcomeComponent,
    RegistrationComponent,
    SignInComponent,
    PwdChangeRequestComponent,
    PwdChangeResetComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Routing,
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For Tumblr counts
    RouterModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AccountService, NavHeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
