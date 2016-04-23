import {Component, Input}   from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {User} from '../../beans/User';

@Component({
  selector: 'form',
  templateUrl: '/app/src/ts/components/formComponent/form.component.html'
})

export class FormComponent {
  
 name: Control;
 surname: Control;
 userForm: ControlGroup;
 
 constructor(private formBuilder: FormBuilder) {
 
   this.name = new Control('', Validators.required);
   this.surname = new Control('', Validators.required);
   this.userForm = formBuilder.group({
     name: this.name,
     surname: this.surname,
   });
 }
 
 doLogin(event){
   var user = new User(this.userForm.value.name, this.userForm.value.surname);
   console.log(user); 
}
   
}