import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from './test.service';

import {  
  
  //  FORM_DIRECTIVES,  
  //  FormBuilder,  
  FormGroup,
  FormArray,
  FormControl,
  Validators,  
} from '@angular/forms';

@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css']
})
export class TestviewComponent implements OnInit {
  
  public form: FormGroup;
  
  private quest = [ {
    "_id": "592f5631e97da92a28059f52", "section": "multii", "arabic": "test fill", "english": "test fill", "firstValue": "test3",  "secValue": "test3",  "thirdValue": "test3",
    "forthValue": "test3", "__v": 0, "forthValueScore": 4, "thirdValueScore": 3, "secValueScore": 2, "firstValueScore": 1},
    { "_id": "592ff25b79b38f1340a114d0",  "section": "multii", "arabic": "test fill",  "english": "test fill",  "firstValue": "test3", "secValue": "test3",  "thirdValue": "test3",
    "forthValue": "test3",  "__v": 0, "forthValueScore": 1, "thirdValueScore": 1,  "secValueScore": 1, "firstValueScore": 1 },
    // {  "_id": "592f422e0164ff2cf003331f", "section": "fill",   "arabic": "test1",   "english": "test2",  "fillBox": "test3",   "__v": 0 },
    // {  "_id": "592f42e98e6f692ed408cb61",   "section": "fill",   "arabic": "test1",    "english": "test2",   "fillBox": "test3", "__v": 0 },
    // {   "_id": "5931c07a9c05602184219382",   "section": "fill",   "arabic": "card 1",   "english": "card1 ",  "fillBox": "card 1",   "__v": 0 }
  ]
    private answers =[];
    public arrayData=this.quest;
    // {"answers":[
    // 			{"userId":"592ec695b8dbd72260a75c48","QId":"59320b5ebc05492a48b02e10","answer":"this is the answer new route test"}
    
    //             ]
    // }
    
    // constructor(
    //       private testservice: TestService,
    
    // ) { }
    arr = new FormArray([]);
    
    constructor() {  
      this.form=new FormGroup({ 'answers': this.arr });
      console.log(this.form);
      for(var i=0; i < this.arrayData.length; i++){
        this.arr.push(new FormControl('', [Validators.required]));
      } 
//  this.form = this.arrayData;

      
    }
    //////////////
    entries = [];
    selectedEntry: { [key: string]: any } = {
      answer: null,
      QId:null,
      userId: localStorage.getItem('user-id')
    };
    onSelectionChange(entry) {
      // clone the object for immutability
      // this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
      this.selectedEntry={   answer: null,
        QId:entry._id,
        userId: localStorage.getItem('user-id')
       }
      }
      
      ngOnInit() {
        // this.getquestions();
        this.entries = [
        {
          description: 'entry 1',
          answer: 1,
          QId: 1
          
        },
        {
          description: 'entry 2',
          answer: 2
        },
        {
          description: 'entry 3',
          answer: 3
        },
        {
          description: 'entry 4',
          answer: 4
        }
        ];
        
        // select the first one
        // if(this.entries) {
        //   this.onSelectionChange(this.entries[0]);  
        // }
      }
      showform(){
        console.log(this.form.value);
      }
      
      // getquestions(){
        //   this.testservice.getques().subscribe(data => {
          //     if (data){
            //       this.quest=data;
            
            
            
            //       console.log(this.quest,"the array quest")
            
            
            //     }
            //     else{
              //       console.log("something went wrong")
              //     }
              //     });
              // }
            }
            