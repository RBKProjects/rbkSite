import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from './test.service';

import {  
  
  ReactiveFormsModule,  
  FormBuilder,  
  FormGroup,
  FormArray,
  FormControl,
  Validators,  
} from '@angular/forms';

@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css'],
  // providers: [FormBuilder]
})

export class TestviewComponent implements OnInit {
  
  public form: FormGroup;
  
  private answers =[];
  public arrayData=[];
  
  private id =localStorage.getItem('user-id');
  arr = new FormArray([]);
  
  
  constructor( private testservice : TestService) {  
    this.form=new FormGroup({ 'answers': this.arr });
    
    
    
  }
  
  
  
  ngOnInit() {
    this.getquestions();
    
    
    
  }
  showform(){
    let answerArr=[];
    let answer :any ;
    let Qid: any;
    let userId : any ;
    for(let i=0;i<this.form.value.answers.length;i++){
      let x=this.form.value.answers[i].split(":").join(",").split(",");
      console.log(x[1])
      let y ={}
      y["answer"]=x[1];
      y["QId"]=x[3];
      y["userId"]=this.id;
      
      answerArr.push(y)
    }
    console.log(answerArr)
        this.testservice.sendanswer({answers:answerArr}).subscribe(data => {
      if (data){
       
        
        
        console.log(data,"done")
        this.getquestions()
        
      }
      else{
        console.log("something went wrong")
      }
    });

  }
  
  getquestions(){
    this.testservice.getques().subscribe(data => {
      if (data){
        this.arrayData=data;
        //// add data to the form 
        this.form=new FormGroup({ 'answers': this.arr });
        for(var i=0; i < this.arrayData.length; i++){
          this.arr.push(new FormControl('', [Validators.required]));
        } 
        
        
        
        console.log(this.arrayData,"the array quest")
        
        
      }
      else{
        console.log("something went wrong")
      }
    });
  }
}
