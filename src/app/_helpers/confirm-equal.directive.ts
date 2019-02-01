import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmEqual]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualDirective,
      multi: true
    }
  ]
})
export class ConfirmEqualDirective implements Validator {
  @Input() appConfirmEqual: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare  = control.parent.get(this.appConfirmEqual);
    if (controlToCompare && controlToCompare.value !== control.value ) {
      return { 'notEqual': true};
    } return null;
  }
  constructor() {}
}
