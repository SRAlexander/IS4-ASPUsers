import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './services/authguard.service';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    CommonModule,
    BrowserModule
  ],
  declarations: [AuthCallbackComponent],
  providers: [AuthGuardService, AuthService]
})
export class SharedModule { }
