import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RegistrationComponent } from './account/registration/registration.component';
import {SignInComponent} from './account/sign-in/sign-in.component';
import {PwdChangeRequestComponent} from './account/pwd-change-request/pwd-change-request.component';
import {PwdChangeResetComponent} from './account/pwd-change-reset/pwd-change-reset.component';
import {CatalogComponent} from './product/catalog/catalog.component';
import {ThanksComponent} from './home/thanks/thanks.component';
import {ContactComponent} from './home/contact/contact.component';
import {SubProductComponent} from './product/sub-product/sub-product.component';
import {SubProductViewComponent} from './product/sub-product-view/sub-product-view.component';
const routes: Routes = [
    { path: 'Welcome', component: WelcomeComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'thanks', component: ThanksComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'PwdChangeReq', component: PwdChangeRequestComponent },
    { path: 'PwdChangeReset', component: PwdChangeResetComponent },
    { path: 'Catalog', component: CatalogComponent },
    { path: 'Product/:id', component: SubProductComponent },
    { path: 'Catalog/:id/Product/:productId', component: SubProductViewComponent},
    { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'Welcome', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });
