import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validator-error-message',
  templateUrl: './validator-error-message.component.html',
  styleUrls: ['./validator-error-message.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ValidatorErrorMessageComponent {
  @Input()
  control: AbstractControl;

  @Input()
  formSubmitted: boolean;

  @Input()
  messages: Record<string, string>;

  constructor() {}

}
