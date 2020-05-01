import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ObservableInput } from '../shared/observable-input';

@Component({
  selector: 'app-validator-error-message',
  templateUrl: './validator-error-message.component.html',
  styleUrls: ['./validator-error-message.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorErrorMessageComponent implements OnInit {
  @Input('controlErrors')
  @ObservableInput()
  controlErrors$: Observable<ValidationErrors>;

  @Input('controlTouched')
  @ObservableInput()
  controlTouched$: Observable<boolean>;

  @Input('formSubmitted')
  @ObservableInput()
  formSubmitted$: Observable<boolean>;

  @Input()
  messages: Record<string, string>;

  errorsToDisplay$: Observable<string[]>;

  constructor() {}

  ngOnInit(): void {
    this.errorsToDisplay$ = combineLatest(
      this.controlErrors$,
      this.controlTouched$.pipe(startWith(false)),
      this.formSubmitted$.pipe(startWith(false))
    ).pipe(
      map(([controlErrors, controlTouched, formSubmitted]) => {
        if (!controlTouched && !formSubmitted) {
          return new Array<string>();
        } else {
          return this.getErrorsToDisplay(controlErrors);
        }
      })
    );
  }

  private getErrorsToDisplay(validationErrors: ValidationErrors): string[] {
    const _messages = [];
    if (validationErrors) {
      Object.entries(validationErrors).forEach(([key, value]) => {
        if (this.messages && this.messages[key]) {
          // Message d'erreur défini dans le paramètre input "messages"
          _messages.push(this.messages[key]);
        }
        if (value.message) {
          // Message d'erreur renvoyé par un custom validator
          _messages.push(value.message);
        }
      });
    }
    return _messages;
  }
}
