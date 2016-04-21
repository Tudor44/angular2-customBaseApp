import {Component}         from 'angular2/core';
import {FormComponent} from '../formComponent/form.component'

@Component({
  selector: 'my-app',
  template: '<hero-form></hero-form>',
  directives: [FormComponent]
})

export class IndexComponent { }