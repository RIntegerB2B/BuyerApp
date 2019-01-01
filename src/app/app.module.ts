import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AccountService } from '../app/account/account.service';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule,
   MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NavHeaderComponent} from './shared/nav-header/nav-header.component';
import { NavHeaderService } from './shared/nav-header/nav-header.service';
import { ProductService} from './product/product.service';
import { Routing } from './app.route';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ngx-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { PwdChangeRequestComponent } from './account/pwd-change-request/pwd-change-request.component';
import { PwdChangeResetComponent } from './account/pwd-change-reset/pwd-change-reset.component';
import { SubProductComponent } from './product/sub-product/sub-product.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CatalogComponent } from './product/catalog/catalog.component';
import { FooterComponent } from './home/footer/footer.component';
import { ThanksComponent } from './home/thanks/thanks.component';
import { ContactComponent } from './home/contact/contact.component';
import { SubProductViewComponent } from './product/sub-product-view/sub-product-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    WelcomeComponent,
    RegistrationComponent,
    SignInComponent,
    PwdChangeRequestComponent,
    PwdChangeResetComponent,
    CatalogComponent,
    FooterComponent,
    SubProductComponent,
    ThanksComponent,
    ContactComponent,
    SubProductViewComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Routing,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ProductService, NavHeaderService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
