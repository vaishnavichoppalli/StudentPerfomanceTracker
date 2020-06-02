import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapgStoreHomePageComponent } from './capg-store-home-page/capg-store-home-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginLogoutSessionComponent } from './login-logout-session/login-logout-session.component';
import { SignupAndActivationComponent } from './signup-and-activation/signup-and-activation.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { CustomerPageComponent } from './login-logout-session/customer-page/customer-page.component'; 
import { AuthGuard } from './guard/auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MerchantPageComponent } from './login-logout-session/merchant-page/merchant-page.component';
import { AdminPageComponent } from './login-logout-session/admin-page/admin-page.component';
import { ViewMerchantsComponent } from './login-logout-session/admin-page/view-merchants/view-merchants.component';
import { ViewFeedbackComponent } from './login-logout-session/admin-page/view-feedback/view-feedback.component';
import { ImageUploadComponent } from './login-logout-session/admin-page/image-upload/image-upload.component';
import { ProductUpdateComponent } from './login-logout-session/admin-page/product-update/product-update.component';
@NgModule({
  declarations: [
    AppComponent,
    CapgStoreHomePageComponent,
    ForgotPasswordComponent,
    LoginLogoutSessionComponent,
    SignupAndActivationComponent,
    CustomerPageComponent,
    ResetPasswordComponent,
    MerchantPageComponent,
    AdminPageComponent,
    ViewMerchantsComponent,
    ViewFeedbackComponent,
    ImageUploadComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
    RouterModule.forRoot(routes),
	HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
