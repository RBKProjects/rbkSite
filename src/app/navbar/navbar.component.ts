import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../home/user/service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    public userAccessTest:any;
           flage=true;
  constructor(private router: Router , private auth : AuthService ) { 
  
}

  ngOnInit() {
  }
  callSignup(){
  	this.flage=false;
    this.router.navigate(['/signup']);
  }

  testUser(){
  console.log(localStorage.getItem('id_token'))
      if(localStorage.getItem('id_token')!==null){
        return true
      }
      else{
        return false
      }
   }

   logOut(){
   	this.flage=true;
   	 this.auth.logout();
   	 this.router.navigate(['/signin']);
   }
}
