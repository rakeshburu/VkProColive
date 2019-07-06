import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth-guard.service';

// not used - vijay
const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
     NbAuthModule.forRoot({
       strategies: [
         NbPasswordAuthStrategy.setup({
           name: 'email',
           token: {
            class: NbAuthJWTToken,
             key: 'Data.token', // this parameter tells where to look for the token
          },
           baseEndpoint: 'http://localhost:56675',
           login: {
             endpoint: '/api/RequestToken/GetToken',
             method: 'post',
             redirect: {
              success: 'pages/outstandingreport',      
              failure: null,
            },
           },
         }),
       ],
       forms: {
        login: {
          redirectDelay: 0, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: true,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
        },
        logout: {
          redirectDelay: 0,
          strategy: 'email',
        },
        validation: {
          password: {
            required: true,
            minLength: 4,
            maxLength: 50,
          },
          email: {
            required: true,
          },
          fullName: {
            required: false,
            minLength: 4,
            maxLength: 50,
          },
        },
       },
     }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
