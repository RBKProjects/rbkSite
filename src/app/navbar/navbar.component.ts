import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../home/user/service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public userAccessTest:any;
  constructor(private router: Router , private auth : AuthService ) { 
  this.userAccessTest=this.auth.userLoginTest()
}

  ngOnInit() {
  }
  callSignup(){
    this.router.navigate(['/signup']);
  }
  
}
