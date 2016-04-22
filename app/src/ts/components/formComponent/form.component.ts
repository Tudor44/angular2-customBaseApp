import {Component}   from 'angular2/core';
import {FormBuilder, Validators} from 'angular2/common';

import {NgForm}    from 'angular2/common';

@Component({
  selector: 'form',
  templateUrl: '/app/src/ts/components/formComponent/form.component.html'
})

export class FormComponent {
  onSubmit() { 
    console.log('submit');
  }

}