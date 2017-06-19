import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';


import { TestService } from '../../../../testview/test.service';
@Component({
  selector: 'app-ana-ass',
  templateUrl: './ana-ass.component.html',
  styleUrls: ['./ana-ass.component.css']
})
export class AnaAssComponent implements OnInit {

  public form: FormGroup;

  private answers =[];
  public arrayData=  [
  {
    "_id": "5940787fc0d7912ba412ab57",
    "section": "multii",
    "arabic": "1",
    "english": "Rasha is jumping rope. a) Rasha is on the rope jumping team during the summer. b) Rasha is in the gym. c) Jumping rope occurs in the gym during the summer. d) All the kids in the gym are jumping rope.",
    "__v": 0,
    "forthValueScore": 1,
    "thirdValueScore": 1,
    "secValueScore": 1,
    "firstValueScore": 1,
    "choices": [
    "A and B",
    "B and D",
    "C and D ",
    "D and A"
    ]
  },
  {
    "_id": "59407890c0d7912ba412ab58",
    "section": "multii",
    "arabic": "1",
    "english": "Hend runs faster than Amer. a) Baha is the champion runner b) Hend can run further than Baha c) Hend can run as fast as Baha d) Baha can run faster than Amer.",
    "__v": 0,
    "forthValueScore": 1,
    "thirdValueScore": 1,
    "secValueScore": 1,
    "firstValueScore": 1,
    "choices": [
    "A and B",
    "B and D",
    "C and D ",
    "D and A"
    ]
  }
  ];

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
          localStorage.setItem("progress",data.progress);
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
            localStorage.setItem("progress","5")
          }
          this.finishFlag=data.finishflag

          this.arrayData=data.arrofQ;
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
      },
      err => {
        if(err.message === 'No JWT present or has expired'){
          this.router.navigate(['/']);
        }
      });
    }
  }
