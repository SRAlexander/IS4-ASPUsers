import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedComponent } from './components/protected/protected.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './shared/services/authguard.service';
import { AuthCallbackComponent } from './shared/components/auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
