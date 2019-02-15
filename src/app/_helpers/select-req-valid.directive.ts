import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSelectReqValid]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectReqValidDirective,
      multi: true
    }
  ]
})
export class SelectReqValidDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any } | null {
      return control.value === '-1' ? {'defaultSelected' : true } : null;
  }
  constructor() {}
}
