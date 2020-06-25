import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { buttonStateTrigger } from '../../shared/animations/registerbtn-animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations:[
    // buttonStateTrigger
  ]
})
export class RegisterComponent implements OnInit {
  maxDate;

  constructor() { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }

  onSubmit(form:NgForm){
    console.log(form); 
  }

  onClick(){
    console.log('click');
  }

}
