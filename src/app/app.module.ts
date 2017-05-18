import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy , HashLocationStrategy } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/user/auth/signup/signup.component';
import { SigninComponent } from './home/user/auth/signin/signin.component';
import { FacebookLogInComponent } from './home/user/auth/facebook-log-in/facebook-log-in.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    FacebookLogInComponent,
    UserhomeComponent,
    EmployeehomeComponent,
    SigninemployeeComponent,
    TestviewComponent,
    EmployeeFbLoginComponent,
    FootbarComponent,
    NavbarComponent,
    InterviewComponent
    

  ],
  imports: [
    FacebookModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
  { path:'',component:HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'uhome', component: UserhomeComponent },
  { path: 'ehome', component: EmployeehomeComponent },
  { path: 'esignin', component: SigninemployeeComponent },
  { path:'fbUsignin', component: FacebookLogInComponent },
  { path: 'test', component: TestviewComponent },
  { path: 'interview', component: InterviewComponent }
  
 
])
  ],

  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},AuthService,EAuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
