import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupAndActivationComponent } from './signup-and-activation/signup-and-activation.component';
import { CustomerPageComponent } from './login-logout-session/customer-page/customer-page.component';
import { AuthGuard } from './guard/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MerchantPageComponent } from './login-logout-session/merchant-page/merchant-page.component';
import { AdminPageComponent } from './login-logout-session/admin-page/admin-page.component';
import { LoginLogoutSessionComponent } from './login-logout-session/login-logout-session.component';
import { ViewMerchantsComponent } from './login-logout-session/admin-page/view-merchants/view-merchants.component';
import { ViewFeedbackComponent } from './login-logout-session/admin-page/view-feedback/view-feedback.component';
import { ImageUploadComponent } from './login-logout-session/admin-page/image-upload/image-upload.component';
import { ProductUpdateComponent } from './login-logout-session/admin-page/product-update/product-update.component';

export const routes: Routes = [{path:'login',component:LoginLogoutSessionComponent},
	{path:'signup',component:SignupAndActivationComponent},
	{path:'forgot-password',component:ForgotPasswordComponent},
	{path:'reset-password',component:ResetPasswordComponent},
	{path:'customer-page',component:CustomerPageComponent},
	{path:'merchant-page',component:MerchantPageComponent},
	{path:'admin-page',component:AdminPageComponent,canActivate:[AuthGuard],
	children:[{path:'view-merchants',component:ViewMerchantsComponent},
	{path:'view-feedback',component:ViewFeedbackComponent},
	{path:'image-upload',component:ImageUploadComponent},
	{path:'product-update',component: ProductUpdateComponent}
	]
	}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
	
	
}
