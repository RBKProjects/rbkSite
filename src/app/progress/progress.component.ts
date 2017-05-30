import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
	public location = '' ;

  constructor(private  _router : Router) {
  	this.location = _router.url; //add this to let this component hide in uhome url
  }

  ngOnInit() {
  }

}
