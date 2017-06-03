import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from './test.service';



@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css']
})
export class TestviewComponent implements OnInit {
private quest : Object;
private TF = [];
private multi = [];
private fill = [];

  constructor(
        private testservice: TestService,

  ) { }

  ngOnInit() {
    this.getquestions();
    
  }

  getquestions(){
    this.testservice.getques().subscribe(data => {
      if (data){
        this.quest=data;
        this.TF=data.TF;
        this.multi=data.multi;
        this.fill=data.fill;
        

        console.log(this.quest,"the array quest")
        console.log(this.TF,"the  t f")
        console.log(this.multi," the multii")
        console.log(this.fill,"the fill")
        
      }
      else{
        console.log("something went wrong")
      }
      });
  }
}
