import { Component, OnInit } from '@angular/core';
import { AuthService } from '../home/user/service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {
private isActive : boolean
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.isActive=false
  }
activate(){
    this.isActive=!this.isActive
}
   next(){

      this.authService.agree(localStorage.getItem('user-id')).subscribe(
        data => {
          if(data){

            console.log(data)
            localStorage.setItem("progress",data.progress)
            this.router.navigate(['/minAss']);
          }else {
            this.router.navigate(['/signup']);
          }
        },
        err => {
          if(err.message === 'No JWT present or has expired'){
            this.router.navigate(['/']);
          }
        });
    }

}
