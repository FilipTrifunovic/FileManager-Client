//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WordsDto } from 'src/app/words/words.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { buttonStateTrigger } from 'src/app/shared/animations/registerbtn-animation';




@Component({
  selector: 'words-modal',
  templateUrl: './words-modal.component.html',
  styleUrls: ['./words-modal.component.scss'],
  animations:[
    buttonStateTrigger
  ]
})
export class WordsModalComponent {

  action:string;
  local_data:WordsDto;
  myForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<WordsModalComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private _formBuilder: FormBuilder) {
    
      this.action = data.action;
    this.local_data=data.object;
 


    this.myForm = this._formBuilder.group({
      numberFormControl: new FormControl(this.action=='Update'?this.local_data.value:'', [Validators.required, Validators.min(-1), Validators.max(1)]),
      textFormControl: new FormControl(this.action=='Update'?this.local_data.text:'', [Validators.required])
  });

  }

  doAction(){
    if(this.action=='Update' ){
      var formValues = this.myForm.value;
      this.local_data.text = formValues.textFormControl;
      this.local_data.value = formValues.numberFormControl;
    }else if(this.action=='Add'){
      var formValues = this.myForm.value;
      this.local_data = new WordsDto(formValues.textFormControl,formValues.numberFormControl);
    }
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'}); 
  }

}