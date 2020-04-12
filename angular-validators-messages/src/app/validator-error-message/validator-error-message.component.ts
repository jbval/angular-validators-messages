import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-validator-error-message',
  templateUrl: './validator-error-message.component.html',
  styleUrls: ['./validator-error-message.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorErrorMessageComponent implements OnInit {
  @Input()
  control;

  @Input()
  form: FormGroupDirective;

  @Input()
  messages: Record<string, string>;

  @Input()
  showAsToolTip = false;

  formSubmitted$: Observable<boolean>;
  constructor() {}

  ngOnInit() {
    this.formSubmitted$ = this.form.ngSubmit.pipe(
      map((f) => this.form.submitted)
    );
  }
}
