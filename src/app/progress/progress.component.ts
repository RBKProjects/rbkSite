import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
	public location = '' ;
  public progress=localStorage.getItem("progress");
  constructor(private  _router : Router) {
    this.location = _router.url; //add this to let this component hide in uhome url
  }
  
  ngOnInit() {
    this.setClass1() 
    this.setClass2() 
    this.setClass3() 
    this.setClass4() 
    this.setClass5() 
  }
  
  
  setClass1() {
    if(this.progress === "1"){
      return "col-xs-1 bs-wizard-step active" 
    }
    else if(this.progress >"1"){
      return "col-xs-1 bs-wizard-step  complete"
    }
  }
  setClass2() {
    if(this.progress >"2"){
      return "col-xs-1 bs-wizard-step complete" 
    }else if (this.progress === "2"){
      return "col-xs-1 bs-wizard-step  active"
    }
    return "col-xs-1 bs-wizard-step  disabled"
    
    
  }
  setClass3() {
    if(this.progress >"3"){
      return "col-xs-1 bs-wizard-step complete" 
    }else if (this.progress === "3"){
      return "col-xs-1 bs-wizard-step  active"
    }
    return "col-xs-1 bs-wizard-step  disabled"
    
  }
  setClass4() {
    if(this.progress >"4"){
      return "col-xs-1 bs-wizard-step complete" 
    }else if (this.progress === "4"){
      return "col-xs-1 bs-wizard-step  active"
    }
    return "col-xs-1 bs-wizard-step  disabled"
    
  }
  setClass5() {
    if(this.progress >"5" ||this.progress === "5" ){
      return "col-xs-1 bs-wizard-step  complete"
      
    }
    return "col-xs-1 bs-wizard-step  disabled"
    
  }
}
