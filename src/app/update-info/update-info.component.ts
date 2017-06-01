import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { AuthService } from '../home/user/service/auth.service';
import {Router} from '@angular/router';





@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})

export class UpdateInfoComponent implements OnInit {
  public user:object;
  public updateInfo: FormGroup;


  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit() {
 this.updateInfo = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      nationality: ['', Validators.required],
      city: ['', Validators.required],
      englishAbility: ['', Validators.required],
      knowRBK: ['', Validators.required],
      educationLevel: ['', Validators.required],
      codeExperience: ['', Validators.required],
      isRefugee: ['', Validators.required],
      gender: ['', Validators.required]},
      );

  }

  private genders : string[] = [
  'Female',
  'Male',
  'Other'
  ];

  private nationalities : string[] = [
  'Jordanian',
  'Syrian',
  'Palestinian',
  'Other'
  ];

  private englishAbility : string[] = [
  '1-No English',
  '2-I can speak & read a little',
  '3-I can watch movies with no subtitles',
  '4-I can have a technical conversation with a native speaker',
  "5-I'm a native speaker"
  ];

  private educationLevel : string[] = [
  'Some High School' ,
  'High School Graduate' ,
  'Vocational Training' ,
  'Some University' ,
  'University Graduate (4+ Year Undergraduate Degree) ' ,
  'Masters Degree ', 'PhD ' ,'Other',
  ];

  private knowRBK : string[] = [
  'From a Friend', 'Email' , 'Event' ,  'Posters',  'Facebook',  'Web Search (Google, ect.)'];

  private codeExperience : string[] = ['Yes' ,'No' ];
  private isRefugee : string[] = ['Yes' ,'No' ]



  updateCandidateInfo(value: Object){
    console.log(value)

     	this.authService.updateInfo(value,localStorage.getItem('user-id')).subscribe(data => {
      if(data){

        console.log(data)
        // this.router.navigate(['/next']);
      }else {
        this.router.navigate(['/signup']);
      }
    });

  }

  }
