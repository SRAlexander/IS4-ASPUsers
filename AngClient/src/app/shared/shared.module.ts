import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from './services/authguard.service';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { AuthService } from './services/auth.service';
import { ApiTestService } from './services/api-test.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [
    CommonModule,
    BrowserModule
  ],
  declarations: [AuthCallbackComponent],
  providers: [AuthGuardService, AuthService, ApiTestService]
})
export class SharedModule { }
