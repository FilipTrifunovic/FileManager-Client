import { Component, OnInit } from '@angular/core';
import { buttonStateTrigger } from '../../shared/animations/registerbtn-animation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[
    buttonStateTrigger
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(form);
  }
}
