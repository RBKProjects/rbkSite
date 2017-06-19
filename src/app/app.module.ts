import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { LocationStrategy , HashLocationStrategy } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/user/auth/signup/signup.component';
import { SigninComponent } from './home/user/auth/signin/signin.component';
import { AuthService} from './home/user/service/auth.service';
import { UserhomeComponent } from './home/user/userhome/userhome.component';
import { EmployeehomeComponent } from './home/employee/employeehome/employeehome.component';
import { SigninemployeeComponent } from './home/employee/signinemployee/signinemployee.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FacebookModule } from 'ngx-facebook';
import { TestviewComponent } from './testview/testview.component';
import { EmployeeFbLoginComponent } from './home/employee/employee-fb-login/employee-fb-login.component';
import { EAuthService} from './home/employee/eAuth/e-auth.service';

import { FootbarComponent } from './footbar/footbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InterviewComponent } from './interview/interview.component';
import { MindestAssComponent } from './home/user/auth/mindest-ass/mindest-ass.component';
import { AnaAssComponent } from './home/user/auth/ana-ass/ana-ass.component';

import { ConUserGuard } from './con-user.guard';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { ProgressComponent } from './progress/progress.component';
import { TestService } from './testview/test.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token',
    noTokenScheme: true,
    headerName: 'x-access-token',
		tokenGetter: (() => localStorage.getItem('id_token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    UserhomeComponent,
    EmployeehomeComponent,
    SigninemployeeComponent,
    TestviewComponent,
    EmployeeFbLoginComponent,

    FootbarComponent,
    NavbarComponent,
    InterviewComponent,
    MindestAssComponent,
    AnaAssComponent,

    UpdateInfoComponent,

    ProgressComponent

  ],
  imports: [
    FacebookModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
  { path:'',component:SigninComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'uhome', component: UserhomeComponent },
  { path: 'ehome', component: EmployeehomeComponent },
  { path: 'esignin', component: SigninemployeeComponent },

  { path: 'test', component: TestviewComponent, canActivate:[ConUserGuard]},
  { path: 'interview', component: InterviewComponent, canActivate:[ConUserGuard]},
  { path: 'minAss', component: MindestAssComponent, canActivate:[ConUserGuard]},
  { path: 'anaAss', component: AnaAssComponent, canActivate:[ConUserGuard] },

  { path: 'esignin', component: EmployeeFbLoginComponent },
  // { path: 'test', component: TestviewComponent },

 // { path: 'updateinfo', component: UpdateInfoComponent }

  { path: 'updateinfo', component: UpdateInfoComponent ,canActivate:[ConUserGuard]}

    ])
  ],

  providers: [
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy
    },
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService,
    ConUserGuard,
    EAuthService,
    TestService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
