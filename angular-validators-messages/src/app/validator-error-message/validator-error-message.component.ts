import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-validator-error-message',
  templateUrl: './validator-error-message.component.html',
  styleUrls: ['./validator-error-message.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidatorErrorMessageComponent implements OnChanges {
  @Input()
  controlErrors: ValidationErrors;

  @Input()
  touched: boolean;

  @Input()
  formSubmitted: boolean;

  @Input()
  messages: Record<string, string>;

  errorsToDisplay$ = new Subject<string[]>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.touched || this.formSubmitted) {
      this.errorsToDisplay$.next(this.getErrorsToDisplay(this.controlErrors));
    }
  }

  private getErrorsToDisplay(validationErrors: ValidationErrors): string[] {
    const _messages = [];
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
    return _messages;
  }
}
