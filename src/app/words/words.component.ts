import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { buttonStateTrigger } from '../shared/animations/registerbtn-animation';
import { HttpClient } from '@angular/common/http';
import { WordsDto } from './words.model';

@Component({
    selector: 'app-login',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss'],
    animations: [
        buttonStateTrigger
    ]
})
export class WordsComponent implements OnInit {

    myForm: FormGroup;

    constructor(private _formBuilder: FormBuilder, private http: HttpClient) {
        this.myForm = this._formBuilder.group({
            numberFormControl: new FormControl('', [Validators.required, Validators.min(-1), Validators.max(1)]),
            textFormControl: new FormControl('', [Validators.required])
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        var formValues = this.myForm.value;
        console.log(this.myForm.value);
        var wordDto = new WordsDto(formValues.textFormControl, formValues.numberFormControl)
        this.http.post('http://localhost:5000/api/Words', wordDto).subscribe(res => {
            
        });
    }
}
