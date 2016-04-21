import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

@Component({
  selector: 'hero-form',
  templateUrl: '/app/src/ts/components/formComponent/form.component.html'
})

export class FormComponent {
  
  onSubmit() { 
    console.log('submit');
  }
}