import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.less']
})
export class BottomComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: this.fb.control(null, [Validators.required]),
      givenName: this.fb.control(null, [this.dumbRuleValidator()]),
    });
  }

  validate() {}

  get titleCtl() {
    return this.form.get('title');
  }

  get givenNameCtl() {
    return this.form.get('givenName');
  }

  dumbRuleValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const minLength = 3;
      if (control.value && control.value.length < minLength) {
        return {dumbRule: {value: control.value, message: 'Le champ doit faire au moins 3 caractères'}};
      } else {
        return null;
      }
    };
  }

}
