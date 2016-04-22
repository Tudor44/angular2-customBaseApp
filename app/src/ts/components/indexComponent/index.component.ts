import {Component}     from 'angular2/core';
import {FormComponent} from '../formComponent/form.component'

@Component({
  selector: 'index',
  template: '<form></form>',
  directives: [FormComponent]
})

export class IndexComponent { }