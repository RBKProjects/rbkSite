import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

import { TestService } from '../../../../testview/test.service';

@Component({
  selector: 'app-mindest-ass',
  templateUrl: './mindest-ass.component.html',
  styleUrls: ['./mindest-ass.component.css']
})
export class MindestAssComponent implements OnInit {

  public form: FormGroup;

  private answers =[];
  public arrayData=[];
  public dataflag= true;
  private id =localStorage.getItem('user-id');
  arr :any;
  public finishFlag :boolean;

  constructor( private testservice : TestService ,private router: Router) {



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
    this.testservice.sendanswer({answers:answerArr}).subscribe(
      data => {
        if (data){
          console.log(data,"done");
          this.getquestions();
        }
        else{
          console.log("something went wrong")
        }
      },
      err => {
        if(err.message === 'No JWT present or has expired'){
          this.router.navigate(['/']);
        }
      });

  }
    finish(){
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
    console.log(answerArr,"in finish")
    this.testservice.sendanswer({answers:answerArr,finishtest:true}).subscribe(
      data => {
        if (data){
            localStorage.setItem("progress",data.progress)

            this.router.navigate(['/interview']);

        }
        else{
          console.log("something went wrong")
        }
      },
      err => {
        if(err.message === 'No JWT present or has expired'){
          this.router.navigate(['/']);
        }
      });

  }

  getquestions(){
    this.arr=new FormArray([])
    this.form=new FormGroup({ 'answers': this.arr });

    this.testservice.getques().subscribe(
      data => {
        // if(data.length<1){
        //   this.dataflag= false;

        // }
        if (data){
          if(data.arrayData == []){
            localStorage.setItem("progress","4");
          }
          this.finishFlag=data.finishflag;
          this.arrayData=data.arrofQ;
          //// add data to the form
          this.form=new FormGroup({ 'answers': this.arr });
          for(var i=0; i < this.arrayData.length; i++){
            this.arr.push(new FormControl('', [Validators.required]));
          }
          console.log(this.arrayData,"the array quest");
        }
        else{
          console.log("something went wrong");
        }
      },
      err => {
        if(err.message === 'No JWT present or has expired'){
          this.router.navigate(['/']);
        }
      });
  }
}
