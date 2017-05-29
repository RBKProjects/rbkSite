import { Component, OnInit ,NgZone} from '@angular/core';
import { Http } from "@angular/http";
import { FacebookService, InitParams , LoginResponse } from 'ngx-facebook';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { emailValidator } from '../validators';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  private user : Object;
    name="";
    isUser = false;
    id="";
    email="";
    no = false;
    firstName="";
    lastName="";

   
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private fb     : FacebookService,
    private _ngZone: NgZone ,
    private http   : Http
    
  ) {
     let initParams: InitParams = {

          appId: "820622594754755",
          status: true,
          cookie: true, 
          xfbml: true,
          version: 'v2.9'
    };
    fb.init(initParams);
   }
  
  signinForm: FormGroup;

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,  emailValidator])],
      password: ['', Validators.required],
    });
  }
   
     loginWithFacebook(): void { 

     this.fb.login()
     .then((response: LoginResponse) => console.log('Logged in', response))
     .catch(e => console.error('Error logging in'));
     
        }
  

  submitSignIn(value: Object) {
      console.log(value)
      this.user=value;
      this.authService.signin(this.user).subscribe(data => {
        if(data.isUser === false){ // test if the data from backend that has token ...
         console.log(data) // if the user is not in DB first go to signup page to registe ...
        }else if(data.isValidPass === false){
          console.log(data) //send msg wrong pass
        }else{
          this.authService.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
          this.router.navigate(['/uhome']);
        }
      });
  }


 getUserInfo(){

   this.fb.login().then((response) => {
    const promise = this.fb.api('/me'); //function give data from fb...
    const emp=" ";
    promise.then((res)=> {
       //variables to save the data that come from fb ...

      this.id = res.id;
      this.name = res.name;
      this.email=res.email;
      this.isUser = true ;
      this.firstName=this.name.slice(0,this.name.indexOf(emp));
      this.lastName=this.name.slice(this.name.indexOf(emp));

   
      this.authService.facebookLogin({FbID:this.id ,firstName:this.firstName ,lastName:this.lastName}).subscribe(data => {
      
      if(data.token){ // test if the data from backend that has token ...
        this.authService.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
        this.router.navigate(['/uhome']);
         
       }else {
         
         this.authService.facebookSignup({FbID:this.id , firstName:this.firstName ,lastName:this.lastName}).subscribe(data => {
           
           if(data){ // test if the data from backend that has token ...
           console.log("insid the sigin")
           this.authService.storeInLocalStorage(data.token , data.id , data.userName); // store that data in localStorage ...
           this.router.navigate(['/updateinfo']); 

           }else {
           console.log("error")
           this.router.navigate(['/signin']); // if the user is not in DB first go to signup page to registe ...
             }  
      
        });//close of the signup ...

      }// else close..

    });//close of first subscribe ...
console.log(res)
   });//close of promise ...

  })//close of fb.login...

 }// close of the function ...

}
