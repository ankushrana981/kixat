import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/base-layout/base-layout.module').then(m => m.BaseLayoutModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('../app/modules/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('../app/modules/otp/otp.module').then(m => m.OTPModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('../app/modules/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('../app/modules/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('../app/modules/my-account/my-account.module').then(m => m.MyAccountModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('../app/modules/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'shipping',
    loadChildren: () => import('../app/modules/shipping/shipping.module').then(m => m.ShippingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
