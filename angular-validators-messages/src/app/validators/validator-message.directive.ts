import {
  Directive,
  Input,
  ElementRef,
} from '@angular/core';
import { NgControl, FormGroupDirective } from '@angular/forms';
import { map, startWith, filter, switchMap, tap } from 'rxjs/operators';

/**
 * @deprecated 'tests d'implémentation'
 */
@Directive({
  selector: '[appValidatorMessage]',
})
export class ValidatorMessageDirective {
  @Input()
  messages: Record<string, string>;
  @Input()
  form: FormGroupDirective;

  /**
   *
   */
  constructor(private element: ElementRef, control: NgControl) {

    this.form.ngSubmit
      .pipe(
        startWith(false),
        map(() => true),
        filter((s) => s),
        switchMap(() => control.statusChanges),
        map(() => control.valid),
        tap((isValid) => {
          if (!isValid) {
            const errSpan = '<span class="validator">Erreur</span>';
            this.element.nativeElement.parentElement.insertAdjacentHTML(
              'beforeend',
              errSpan
            );
          } else {
            this.element.nativeElement.parentElement
              .querySelectorAll('.validator')[0]
              .remove();
          }
        })
      )
      .subscribe();
  }
}
